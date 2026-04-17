const StudyPlan = require('../models/StudyPlan');
const TestAttempt = require('../models/TestAttempt');

exports.calculateStudentAnalytics = async (studentId) => {
    // Fetch all plans for the user
    const plans = await StudyPlan.find({ userId: studentId });

    // Track total unique tasks across all plans
    const uniqueTopics = new Map(); // `${examType}__${subject}__${topic}` -> stats

    plans.forEach(plan => {
       const exam = plan.examType || 'General';
       plan.planDays.forEach(day => {
          day.tasks.forEach(task => {
             const subject = task.subject || plan.subject || 'General';
             const topic = task.topic;
             
             // Ignore tasks without topics
             if (!topic) return;

             const key = `${exam}__${subject}__${topic}`;

             if (!uniqueTopics.has(key)) {
                uniqueTopics.set(key, {
                   examType: exam,
                   subject: subject,
                   topic: topic,
                   hasStudy: false,
                   studyPassed: false,
                   studyLocked: false,
                   studyPending: false,
                   hasMock: false,
                   mockPassed: false,
                   mockLocked: false,
                   mockPending: false
                });
             }

             const tData = uniqueTopics.get(key);

             if (task.taskType === 'study' || task.taskType === 'revision') {
                tData.hasStudy = true;
                if (task.completed) tData.studyPassed = true;
                if (day.isUnlocked) {
                   if (!task.completed) tData.studyPending = true;
                } else {
                   tData.studyLocked = true;
                }
             } else if (task.taskType === 'mocktest') {
                tData.hasMock = true;
                if (task.completed) tData.mockPassed = true;
                if (task.unlocked && day.isUnlocked) {
                    if (!task.completed) tData.mockPending = true;
                } else {
                    tData.mockLocked = true;
                }
             }
          });
       });
    });

    let totalUniqueTasks = 0;
    let completedUniqueTasks = 0;
    let lockedUniqueTasks = 0;
    let pendingUniqueTasks = 0;

    const subjectProgress = {}; // { subject: { total: X, completed: Y } }

    uniqueTopics.forEach((tData, key) => {
        totalUniqueTasks += 1;

        // Initialize Subject tracking
        if (!subjectProgress[tData.subject]) {
           subjectProgress[tData.subject] = { total: 0, completed: 0 };
        }
        subjectProgress[tData.subject].total += 1;

        // Determine Topic Status
        // A topic is completed if both required modules (if present) are passed.
        const reqStudyDone = tData.hasStudy ? tData.studyPassed : true;
        const reqMockDone  = tData.hasMock ? tData.mockPassed : true;

        if (reqStudyDone && reqMockDone) {
            completedUniqueTasks += 1;
            subjectProgress[tData.subject].completed += 1;
        } else if (tData.studyLocked && tData.mockLocked) {
            lockedUniqueTasks += 1;
        } else {
            pendingUniqueTasks += 1;
        }
    });

    // Subject Progress percentages
    const finalSubjectProgress = {};
    for (const [sub, stats] of Object.entries(subjectProgress)) {
       finalSubjectProgress[sub] = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
    }

    // Now query TestAttempts for granular test data & reattempts
    const attempts = await TestAttempt.find({ student: studentId });
    
    let totalTestsTaken = attempts.length;
    let testsPassed = 0;
    let testsFailed = 0;
    
    let taskTestReattempts = 0;
    let mockTestReattempts = 0;
    
    const topicAttemptCounts = new Map(); // `${planId}_${topic}_${testType}` -> count

    attempts.forEach(att => {
        if (att.passed) testsPassed += 1;
        else testsFailed += 1;

        const attKey = `${att.plan}_${att.topic}_${att.testType}`;
        const previousCount = topicAttemptCounts.get(attKey) || 0;
        
        if (previousCount >= 1) {
            // This is a reattempt
            if (att.testType === 'task') taskTestReattempts += 1;
            if (att.testType === 'mock') mockTestReattempts += 1;
        }
        
        topicAttemptCounts.set(attKey, previousCount + 1);
    });

    let avgScore = 0;
    if (totalTestsTaken > 0) {
        const totalScore = attempts.reduce((acc, curr) => acc + curr.score, 0);
        avgScore = (totalScore / totalTestsTaken).toFixed(1);
    }
    
    const totalReattempts = taskTestReattempts + mockTestReattempts;

    return {
        plans,
        totalUniqueTasks,
        completedUniqueTasks,
        pendingUniqueTasks,
        lockedUniqueTasks,
        testSummary: {
          testsTaken: totalTestsTaken,
          testsPassed,
          testsFailed,
          reattempts: totalReattempts
        },
        taskTestReattempts,
        mockTestReattempts,
        totalReattempts,
        avgScore,
        subjectProgress: finalSubjectProgress
    };
};
