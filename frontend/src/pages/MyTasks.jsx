import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function MyTasks() {
  const { user } = useContext(AuthContext);
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  
  const [activeTest, setActiveTest] = useState(null);
  const [testAnswers, setTestAnswers] = useState({});
  const [testTime, setTestTime] = useState(480);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [obtainedScore, setObtainedScore] = useState(null);

  const fetchPlans = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/planner', { headers: { Authorization: `Bearer ${user.token}` } });
      setPlans(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  useEffect(() => {
    let timer;
    if (activeTest && !testSubmitted && testTime > 0) {
      timer = setInterval(() => {
        setTestTime(prev => prev - 1);
      }, 1000);
    } else if (activeTest && !testSubmitted && testTime === 0) {
      handleTestSubmit();
    }
    return () => clearInterval(timer);
  }, [activeTest, testTime, testSubmitted]);

  const startTest = async (planId, dayId, taskId, taskTopic, taskType) => {
    try {
      const testParam = taskType === 'mocktest' ? 'mock' : 'task';
      const { data } = await axios.get(`http://localhost:5000/api/test/generate?topic=${encodeURIComponent(taskTopic)}&type=${testParam}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setActiveTest({ planId, dayId, taskId, topic: taskTopic, type: testParam, questions: data.questions });
      setTestAnswers({});
      setTestTime(480);
      setTestSubmitted(false);
      setObtainedScore(null);
    } catch (err) {
      alert(err.response?.data?.message || 'Error fetching test questions');
    }
  };

  const handleTestSubmit = async () => {
    if (!activeTest) return;
    
    let score = 0;
    activeTest.questions.forEach((q, idx) => {
      const selectedOptionText = testAnswers[idx] !== undefined ? q.options[testAnswers[idx]] : null;
      if (selectedOptionText === q.correctAnswer) score += 1;
    });

    try {
      const { data } = await axios.post(`http://localhost:5000/api/planner/${activeTest.planId}/day/${activeTest.dayId}/task/${activeTest.taskId}/submit`, 
        { score }, 
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      
      setObtainedScore(score);
      setTestSubmitted(true);
      fetchPlans(); // Refresh the full plan state

    } catch (err) {
      alert(err.response?.data?.message || 'Error submitting test');
      setActiveTest(null);
    }
  };

  const markTaskCompleted = async (planId, dayId, taskId) => {
    try {
      const { data } = await axios.post(`http://localhost:5000/api/planner/${planId}/day/${dayId}/task/${taskId}/submit`, 
        { }, // no score = study task
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      alert(data.message);
      fetchPlans();
    } catch (err) {
      alert(err.response?.data?.message || 'Error completing task');
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const selectedPlan = plans.find(p => p._id === selectedPlanId);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
         {selectedPlanId && (
            <button className="btn btn-outline" style={{ padding: '8px 12px' }} onClick={() => setSelectedPlanId(null)}>← Back</button>
         )}
         <h2 style={{ margin: 0 }}>{selectedPlanId ? 'Tasks & Timetable' : 'Your Study Plans & Tasks'}</h2>
      </div>
      
      {!selectedPlanId ? (
         // Plans View
         plans.length === 0 ? (
            <div className="glass-card" style={{ textAlign: 'center', padding: '40px' }}>
              <p>No study plans found. Please generate one from the Dashboard!</p>
            </div>
         ) : (
            <div style={{ display: 'grid', gap: '20px' }}>
               {plans.map(plan => (
                  <div key={plan._id} className="glass-card" style={{ padding: '24px', borderLeft: '6px solid var(--primary-color)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <div style={{ display: 'flex' }}>
                          <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '2px', marginRight: '2px' }}/>
                          <div style={{ width: '12px', height: '12px', background: '#3b82f6', borderRadius: '2px', marginRight: '2px' }}/>
                          <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '2px' }}/>
                        </div>
                        <h3 style={{ margin: 0 }}>
                           {plan.examType} {plan.subject || (plan.subjects && plan.subjects.length > 0) ? `- ${plan.subject || plan.subjects.join(', ')}` : ''}
                        </h3>
                     </div>
                     <div style={{ marginBottom: '12px', fontWeight: '500' }}>
                        Topics: <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>{plan.topics?.join(', ')}</span>
                     </div>
                     <div style={{ marginBottom: '24px', fontWeight: '500' }}>
                        Duration: <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>
                           {new Date(plan.startDate).toDateString()} to {new Date(plan.endDate).toDateString()}
                        </span>
                     </div>
                     <button className="btn btn-outline" style={{ background: 'var(--panel-bg)', borderColor: 'var(--panel-border)' }} onClick={() => setSelectedPlanId(plan._id)}>
                        View Tasks & Timetable
                     </button>
                  </div>
               ))}
            </div>
         )
      ) : (
         // Detailed Tasks View Nested in Plan!
         !selectedPlan ? null : (
            <div className="glass-card animate-fade-in" style={{ padding: '32px' }}>
              {/* Header Info */}
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid var(--panel-border)', marginBottom: '24px' }}>
                 <h2 className="text-gradient" style={{ margin: '0 0 16px 0', fontSize: '2rem' }}>
                    {selectedPlan.examType} - {selectedPlan.subject || (selectedPlan.subjects && selectedPlan.subjects.join(', ')) || 'General'}
                 </h2>
                 <p style={{ color: 'var(--text-muted)' }}>
                    <strong>Duration:</strong> {new Date(selectedPlan.startDate).toDateString()} to {new Date(selectedPlan.endDate).toDateString()} ({selectedPlan.totalDays} Days)
                 </p>
                 
                 {/* Progress Bar & Display Handling */}
                 {(() => {
                    const days = selectedPlan.planDays || [];
                    // Group tasks by topic to compute unique topic progress
                    const topicMap = new Map();
                    days.forEach(d => {
                       d.tasks.forEach(t => {
                          if (!t.topic) return;
                          if (!topicMap.has(t.topic)) {
                             topicMap.set(t.topic, {
                                hasStudy: false, studyPassed: false,
                                hasMock: false, mockPassed: false
                             });
                          }
                          const tData = topicMap.get(t.topic);
                          if (t.taskType === 'study' || t.taskType === 'revision') {
                             tData.hasStudy = true;
                             if (t.completed) tData.studyPassed = true;
                          } else if (t.taskType === 'mocktest') {
                             tData.hasMock = true;
                             if (t.completed) tData.mockPassed = true;
                          }
                       });
                    });

                    let totalUniqueTopics = 0;
                    let completedUniqueTopics = 0;

                    topicMap.forEach(tData => {
                       totalUniqueTopics++;
                       const reqStudyDone = tData.hasStudy ? tData.studyPassed : true;
                       const reqMockDone = tData.hasMock ? tData.mockPassed : true;
                       if (reqStudyDone && reqMockDone) {
                          completedUniqueTopics++;
                       }
                    });

                    const percent = totalUniqueTopics === 0 ? 0 : Math.round((completedUniqueTopics / totalUniqueTopics) * 100);

                    return (
                       <div style={{ marginTop: '24px', background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '500' }}>
                             <span>Overall Progress</span>
                             <span>{completedUniqueTopics} / {totalUniqueTopics} Topics Completed ({percent}%)</span>
                          </div>
                          <div style={{ width: '100%', height: '10px', background: 'var(--panel-border)', borderRadius: '5px', overflow: 'hidden' }}>
                             <div style={{ height: '100%', width: `${percent}%`, background: 'var(--primary-color)', transition: 'width 0.3s ease' }}></div>
                          </div>
                       </div>
                    );
                 })()}
              </div>

              {/* Table of Tasks */}
              {(selectedPlan.planDays || []).length > 0 && (
                <div style={{ overflowX: 'auto', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid var(--panel-border)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                     <thead>
                        <tr style={{ borderBottom: '2px solid var(--panel-border)', color: 'var(--text-muted)' }}>
                           <th style={{ padding: '16px' }}>Date</th>
                           <th style={{ padding: '16px' }}>Topic</th>
                           <th style={{ padding: '16px' }}>Task Type</th>
                           <th style={{ padding: '16px' }}>Status</th>
                           <th style={{ padding: '16px', textAlign: 'right' }}>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {selectedPlan.planDays.map(day => (
                           day.tasks.map(task => {
                              // Identify strict status logic
                              let statusLabel = task.completed ? 'COMPLETED' : (task.unlocked ? 'PENDING' : 'LOCKED');
                              let statusClass = task.completed ? 'completed' : (task.unlocked ? 'pending' : 'locked');

                              return (
                                 <tr key={task._id} style={{ borderBottom: '1px solid var(--panel-border)', opacity: task.unlocked ? 1 : 0.6 }}>
                                    <td style={{ padding: '16px', verticalAlign: 'top' }}>
                                       <strong>Day {day.dayNumber}</strong><br/>
                                       <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{new Date(day.date).toDateString()}</span>
                                    </td>
                                    <td style={{ padding: '16px', verticalAlign: 'top' }}>
                                       <div style={{ fontWeight: '500' }}>{task.topic}</div>
                                       {task.score !== null && <div style={{ fontSize: '0.8rem', marginTop: '4px', color: 'var(--success-color)' }}>Score: {task.score}/10</div>}
                                    </td>
                                    <td style={{ padding: '16px', verticalAlign: 'top', textTransform: 'capitalize' }}>
                                       <div style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{task.taskType}</div>
                                       <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{task.title}</div>
                                    </td>
                                    <td style={{ padding: '16px', verticalAlign: 'top' }}>
                                       <span className={`badge badge-${statusClass}`}>{statusLabel}</span>
                                    </td>
                                    <td style={{ padding: '16px', verticalAlign: 'top', textAlign: 'right' }}>
                                       {!task.unlocked ? (
                                          <button className="btn btn-outline" disabled style={{ opacity: 0.5 }}>Locked</button>
                                       ) : task.completed ? (
                                          <button className="btn btn-outline" disabled style={{ color: 'var(--success-color)' }}>✓ Done</button>
                                       ) : (
                                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                                             {task.taskType === 'study' && (
                                                <button className="btn btn-primary" onClick={() => markTaskCompleted(selectedPlan._id, day._id, task._id)}>
                                                   Mark as Completed
                                                </button>
                                             )}
                                             {(task.taskType === 'mocktest' || task.taskType === 'revision') && (
                                                <button className="btn btn-primary" onClick={() => startTest(selectedPlan._id, day._id, task._id, task.topic, task.taskType)}>
                                                   {task.taskType === 'revision' ? 'Start Revision Test' : 'Take Mock Test'}
                                                </button>
                                             )}
                                          </div>
                                       )}
                                    </td>
                                 </tr>
                              );
                           })
                        ))}
                     </tbody>
                  </table>
                </div>
              )}
            </div>
         )
      )}

      {/* Test Wizard Modal */}
      {activeTest && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div className="glass-panel animate-fade-in" style={{ width: '800px', maxHeight: '90vh', overflowY: 'auto', padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 className="text-gradient" style={{ fontSize: '1.8rem', margin: 0 }}>
                  {activeTest.type === 'mock' ? 'Mock Test' : 'Task Test'}: {activeTest.topic}
                </h2>
                {!testSubmitted ? (
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'monospace', color: testTime < 60 ? 'var(--danger-color)' : 'var(--primary-color)' }}>
                    {formatTime(testTime)}
                  </div>
                ) : (
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: obtainedScore >= 5 ? 'var(--success-color)' : 'var(--danger-color)' }}>
                    Score: {obtainedScore}/10 {obtainedScore >= 5 ? '(Passed)' : '(Failed)'}
                  </div>
                )}
            </div>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              {testSubmitted 
                 ? "Review your answers below. Explanations are provided for your learning."
                 : "Select the best answer for each question. You need a score of 5 or higher to pass."}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
               {activeTest.questions.map((q, idx) => {
                  const isCorrectAnswer = testAnswers[idx] !== undefined && q.options[testAnswers[idx]] === q.correctAnswer;
                  
                  return (
                  <div key={idx} style={{ 
                     background: 'rgba(255,255,255,0.02)', 
                     padding: '16px', borderRadius: '8px',
                     borderLeft: testSubmitted ? (isCorrectAnswer ? '4px solid var(--success-color)' : '4px solid var(--danger-color)') : 'none'
                  }}>
                     <h4 style={{ marginBottom: '12px' }}>{idx + 1}. {q.questionText}</h4>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {q.options.map((opt, optIdx) => (
                           <label key={optIdx} style={{ 
                              display: 'flex', alignItems: 'center', gap: '10px', 
                              cursor: testSubmitted ? 'default' : 'pointer',
                              color: testSubmitted && opt === q.correctAnswer ? 'var(--success-color)' : 'inherit'
                           }}>
                              <input 
                                 type="radio" 
                                 name={`q_${idx}`} 
                                 value={optIdx} 
                                 checked={testAnswers[idx] === optIdx}
                                 onChange={() => !testSubmitted && setTestAnswers(prev => ({ ...prev, [idx]: optIdx }))}
                                 disabled={testSubmitted}
                              />
                              <span style={{ fontWeight: testSubmitted && opt === q.correctAnswer ? 'bold' : 'normal' }}>{opt}</span>
                           </label>
                        ))}
                     </div>
                     {testSubmitted && (
                        <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px', fontSize: '0.9rem' }}>
                           <strong style={{ color: 'var(--primary-color)' }}>Explanation:</strong> {q.explanation}
                        </div>
                     )}
                  </div>
               )})}
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                {testSubmitted ? (
                   <button className="btn btn-primary" onClick={() => setActiveTest(null)}>Close & Return to Tasks</button>
                ) : (
                   <>
                      <button className="btn btn-outline" onClick={() => setActiveTest(null)}>Cancel</button>
                      <button className="btn btn-primary" onClick={handleTestSubmit}>
                        Submit Test & Check Score
                      </button>
                   </>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
