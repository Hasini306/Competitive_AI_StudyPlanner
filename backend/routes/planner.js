const express = require('express');
const { protect } = require('../middlewares/auth');
const StudyPlan = require('../models/StudyPlan');

const router = express.Router();

const stripTime = (dateStr) => {
  const d = new Date(dateStr);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

// Helper: Generates the full day-wise structure based on topics vs total days
const generateDayWisePlan = ({ subject, topics, startDate, endDate, totalDays }) => {
   const planDays = [];
   const start = stripTime(startDate);
   // Determine how many days belong to revision
   const revisionDaysCount = totalDays >= 3 ? (totalDays > 5 ? 2 : 1) : 0;
   const studyDaysCount = totalDays - revisionDaysCount;
   
   // Topics fallback
   const topicsToUse = topics && topics.length > 0 ? topics : [`${subject || 'General'} Basics`];
   let currentTopicIndex = 0;

   for (let day = 0; day < totalDays; day++) {
     const taskDate = new Date(start);
     taskDate.setDate(taskDate.getDate() + day);
     
     const dayTasks = [];
     
     if (day < studyDaysCount && currentTopicIndex < topicsToUse.length) {
         let remainingTopics = topicsToUse.length - currentTopicIndex;
         let remainingStudyDays = studyDaysCount - day;
         let topicsForToday = Math.ceil(remainingTopics / remainingStudyDays);
         
         for(let i=0; i < topicsForToday; i++) {
           if(currentTopicIndex < topicsToUse.length) {
             const tName = topicsToUse[currentTopicIndex];
             dayTasks.push({
               subject: subject || 'General',
               topic: tName,
               taskType: 'study',
               title: `Study ${tName}`,
               description: `Focus on mastering ${tName} concepts.`,
               completed: false,
               unlocked: day === 0,
               status: day === 0 ? "pending" : "locked"
             });
             dayTasks.push({
               subject: subject || 'General',
               topic: tName,
               taskType: 'mocktest',
               title: `Mock Test - ${tName}`,
               description: `Take 10 questions based on ${tName}.`,
               completed: false,
               unlocked: false,
               status: "locked"
             });
             currentTopicIndex++;
           }
         }
     } else {
        // Revision injection
        dayTasks.push({
           subject: subject || 'General',
           topic: `Revision`,
           taskType: 'revision',
           title: `Revise previous topics`,
           description: `Revise all previously studied topics`,
           completed: false,
           unlocked: day === 0,
           status: day === 0 ? "pending" : "locked"
        });
        dayTasks.push({
           subject: subject || 'General',
           topic: `Revision`,
           taskType: 'mocktest',
           title: `Revision Mock Test`,
           description: `Take mixed questions from revised topics`,
           completed: false,
           unlocked: false,
           status: "locked"
        });
     }

     planDays.push({
       dayNumber: day + 1,
       date: taskDate,
       isUnlocked: day === 0,
       isCompleted: false,
       tasks: dayTasks
     });
   }
   return planDays;
};

// Helper: auto-migrate legacy plan
const migrateLegacyPlanToFullPlan = async (plan) => {
   let activeSubject = plan.subject || (plan.subjects && plan.subjects.length > 0 ? plan.subjects[0] : 'General');
   plan.subject = activeSubject;

   const start = plan.startDate ? stripTime(plan.startDate) : new Date();
   const end = plan.endDate ? stripTime(plan.endDate) : new Date();
   let computedTotal = plan.totalDays;
   if (!computedTotal || computedTotal <= 0) {
      computedTotal = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;
      plan.totalDays = computedTotal || 1;
      plan.startDate = start;
      plan.endDate = end;
   }

   plan.planDays = generateDayWisePlan({
      subject: activeSubject,
      topics: plan.topics,
      startDate: plan.startDate,
      endDate: plan.endDate,
      totalDays: plan.totalDays
   });

   await plan.save();
   return plan;
};

// @route   POST /api/planner/generate
router.post('/generate', protect, async (req, res) => {
  try {
    const { examType, subjects, startDate, endDate, topics } = req.body;
    
    if (!examType || !startDate || !endDate) return res.status(400).json({ message: 'Missing required fields' });

    const start = stripTime(startDate);
    const end = stripTime(endDate);
    const totalDays = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    if (totalDays <= 0 || !topics) return res.status(400).json({ message: 'Invalid start/end date or topics' });

    const subjectList = subjects ? subjects.split(',').map(s => s.trim()) : ['General'];
    const topicList = topics ? topics.split(',').map(t => t.trim()) : [];
    
    const subjectTopicsMap = {};
    subjectList.forEach(sub => subjectTopicsMap[sub] = []);
    topicList.forEach((topic, idx) => {
       const assignedSubject = subjectList[idx % subjectList.length];
       subjectTopicsMap[assignedSubject].push(topic);
    });

    const generatedPlans = [];

    for (const sub of subjectList) {
       const subTopics = subjectTopicsMap[sub].length > 0 ? subjectTopicsMap[sub] : [`${sub} Basics`];
       
       const planDays = generateDayWisePlan({
          subject: sub,
          topics: subTopics,
          startDate: start,
          endDate: end,
          totalDays
       });

       const newPlan = await StudyPlan.create({
         userId: req.user._id,
         examType,
         subject: sub,
         topics: subTopics,
         startDate: start,
         endDate: end,
         totalDays,
         planDays
       });
       generatedPlans.push(newPlan);
    }

    res.status(201).json({ message: 'Study plans generated successfully!', plans: generatedPlans });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/planner
router.get('/', protect, async (req, res) => {
  try {
    let plans = await StudyPlan.find({ userId: req.user._id }).sort({ createdAt: -1 });

    // Auto-migrate legacy plans transparently
    for (let i = 0; i < plans.length; i++) {
       const needsMigration = !plans[i].planDays || plans[i].planDays.length === 0 || plans[i].planDays.some(d => !d.tasks || d.tasks.length === 0);
       
       if (needsMigration) {
          plans[i] = await migrateLegacyPlanToFullPlan(plans[i]);
       }
    }

    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/planner/:planId/migrate
router.post('/:planId/migrate', protect, async (req, res) => {
   try {
      let plan = await StudyPlan.findOne({ _id: req.params.planId, userId: req.user._id });
      if (!plan) return res.status(404).json({ message: 'Plan not found' });
      
      if (!plan.planDays || plan.planDays.length === 0) {
         plan = await migrateLegacyPlanToFullPlan(plan);
      }
      res.json(plan);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// @route   POST /api/planner/:planId/day/:dayId/task/:taskId/submit
router.post('/:planId/day/:dayId/task/:taskId/submit', protect, async (req, res) => {
   try {
      const { planId, dayId, taskId } = req.params;
      const { score } = req.body; // simulated test score

      const plan = await StudyPlan.findOne({ _id: planId, userId: req.user._id });
      if(!plan) return res.status(404).json({ message: 'Plan not found' });

      const day = plan.planDays.id(dayId);
      if(!day) return res.status(404).json({ message: 'Day not found' });

      const task = day.tasks.id(taskId);
      if(!task) return res.status(404).json({ message: 'Task not found' });

      if (score !== undefined) {
         task.score = score;
         if (score > 5) {
            task.completed = true;
            task.status = 'completed';
         } else {
            task.completed = false;
         }
      } else {
         task.completed = true; // non-test task completion
         task.status = 'completed';

         // Dynamic Unlock Logic: Study -> Mocktest explicitly
         if (task.taskType === 'study' || task.taskType === 'revision') {
             const nextMockTest = day.tasks.find(t => t.topic === task.topic && t.taskType === 'mocktest');
             if (nextMockTest) {
                 nextMockTest.unlocked = true;
                 nextMockTest.status = 'pending';
             }
         }
      }

      // Check if day is fully completed
      const allTasksDone = day.tasks.every(t => t.completed);
      if (allTasksDone) {
         day.isCompleted = true;

         // Check if we should unlock next day.
         // Logic: "Next day opens only on its actual date after 12:00 AM"
         // and "Next day unlock only after current day completed"
         const today = stripTime(new Date()).getTime();
         
         const nextDay = plan.planDays.find(d => d.dayNumber === day.dayNumber + 1);
         if (nextDay) {
            const nextDate = stripTime(nextDay.date).getTime();
            if (today >= nextDate) {
               nextDay.isUnlocked = true;
               // Unlock its tasks
               nextDay.tasks.forEach(t => t.unlocked = true);
            }
         }
      }

      await plan.save();

      if (score !== undefined && score <= 5) {
         return res.json({ success: false, message: 'Score too low. Must reattempt.' });
      }
      return res.json({ success: true, message: 'Task completed successfully!' });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;
