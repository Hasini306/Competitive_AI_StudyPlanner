import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Mail, AlertTriangle, ArrowLeft, Target, BookOpen, Layers, Activity } from 'lucide-react';

export default function MentorDashboard() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'incomplete'
  const [studentsData, setStudentsData] = useState([]);
  const [incompleteData, setIncompleteData] = useState([]);
  
  const [messageText, setMessageText] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [viewProgressData, setViewProgressData] = useState(null); 
  const [loading, setLoading] = useState(true);

  const fetchMentorData = async () => {
    setLoading(true);
    try {
      const [allRes, incRes] = await Promise.all([
         axios.get('http://localhost:5000/api/mentor/students', { headers: { Authorization: `Bearer ${user.token}` } }),
         axios.get('http://localhost:5000/api/mentor/incomplete-work', { headers: { Authorization: `Bearer ${user.token}` } })
      ]);
      setStudentsData(allRes.data);
      setIncompleteData(incRes.data);
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMentorData();
  }, [user.token]);

  const handleSendMessage = async (type) => {
     if(!messageText.trim() || !selectedStudentId) return;
     try {
       await axios.post('http://localhost:5000/api/mentor/message', {
         studentId: selectedStudentId,
         text: messageText,
         type
       }, { headers: { Authorization: `Bearer ${user.token}` }});
       alert(type === 'reminder' ? 'Reminder forcibly pushed to student dashboard!' : 'Message securely sent!');
       setMessageText('');
     } catch (err) {
       alert('Failed to send communication packet.');
     }
  };

  const loadProgress = async (student) => {
    setSelectedStudentId(student._id);
    setViewProgressData(null);
    try {
       const { data } = await axios.get(`http://localhost:5000/api/mentor/student/${student._id}/progress`, {
         headers: { Authorization: `Bearer ${user.token}` }
       });
       setViewProgressData(data);
    } catch (err) {
       alert('Failed to extract student analytics parameters');
    }
  };

  const displayedList = activeTab === 'all' ? studentsData : incompleteData;

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Retrieving Mentor Analytics...</div>;

  return (
    <div className="animate-fade-in" style={{ height: '100%', padding: '10px' }}>
      {selectedStudentId ? (
        
        // ==============================================
        // VIEW: DETAILED STUDENT ANALYTICS & COMMUNICATIONS
        // ==============================================
        <div className="animate-fade-in">
          <button className="btn btn-outline" onClick={() => { setSelectedStudentId(null); fetchMentorData(); }} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <ArrowLeft size={18} /> Back to Dashboard
          </button>
          
          {!viewProgressData ? (
             <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Compiling Student Metrics...</div>
          ) : (
             <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '24px' }}>
                
                {/* LEFT: ANALYTICS */}
                <div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                     <div>
                       <h2 style={{ margin: '0 0 8px 0', fontSize: '2.2rem' }}>{viewProgressData.student.name}'s Profile</h2>
                       <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                          <span>{viewProgressData.student.email}</span>
                          {viewProgressData.student.targetExam && <span style={{ color: 'var(--primary-color)' }}>Target: {viewProgressData.student.targetExam}</span>}
                          {viewProgressData.student.targetScore && <span>Goal Score: {viewProgressData.student.targetScore}</span>}
                       </div>
                     </div>
                   </div>

                   {/* Quick Metrics */}
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                      <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
                         <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary-color)' }}>{viewProgressData.totalTasks}</h3>
                         <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Tasks</div>
                      </div>
                      <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
                         <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--success-color)' }}>{viewProgressData.completedTasks}</h3>
                         <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Completed</div>
                      </div>
                      <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
                         <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--warning-color)' }}>{viewProgressData.pendingTasks}</h3>
                         <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pending Active</div>
                      </div>
                      <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
                         <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--danger-color)' }}>{viewProgressData.testsFailed}</h3>
                         <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Test Failures</div>
                      </div>
                   </div>

                   {/* Sub-Progress Module */}
                   <div className="glass-card" style={{ marginBottom: '24px', padding: '24px' }}>
                      <h4 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen size={20}/> Subject Completion Mapping</h4>
                      {Object.keys(viewProgressData.subjectProgress).length === 0 ? (
                         <div style={{ color: 'var(--text-muted)' }}>No topics recorded yet.</div>
                      ) : (
                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
                            {Object.keys(viewProgressData.subjectProgress).map((sub, idx) => (
                                <div key={idx}>
                                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                      <span style={{ fontWeight: 500 }}>{sub}</span>
                                      <span style={{ color: 'var(--primary-color)' }}>{viewProgressData.subjectProgress[sub]}%</span>
                                   </div>
                                   <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                      <div style={{ width: `${viewProgressData.subjectProgress[sub]}%`, height: '100%', background: 'var(--primary-color)', borderRadius: '4px' }} />
                                   </div>
                                </div>
                            ))}
                         </div>
                      )}
                   </div>

                   {/* Test Performance Graphical Array */}
                   <div className="glass-card" style={{ height: '350px', padding: '24px' }}>
                      <h4 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}><Target size={20}/> Evaluation Metrics</h4>
                      <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={[
                           { name: 'Total Attempted', val: viewProgressData.totalTestsTaken },
                           { name: 'Tests Passed', val: viewProgressData.testsPassed },
                           { name: 'Tests Failed', val: viewProgressData.testsFailed }
                        ]}>
                          <XAxis dataKey="name" stroke="#94a3b8" />
                          <YAxis stroke="#94a3b8" />
                          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ background: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: 'white' }}/>
                          <Bar dataKey="val" fill="var(--primary-color)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                   </div>
                </div>

                {/* RIGHT: COMMUNICATIONS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                   
                   <div className="glass-card" style={{ padding: '24px' }}>
                      <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                         <Mail size={22} color="var(--primary-color)" /> Direct Communications
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                         Send a standard notification instantly to the student's dashboard terminal. 
                      </p>
                      
                      <textarea 
                        className="form-input" 
                        rows="5" 
                        placeholder="Type your message explicitly here..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        style={{ marginBottom: '16px' }}
                      />
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                         <button className="btn btn-primary" onClick={() => handleSendMessage('message')} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <Mail size={18}/> Send Standard Message
                         </button>
                         <button className="btn btn-outline" onClick={() => handleSendMessage('reminder')} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: 'var(--warning-color)', borderColor: 'var(--warning-color)' }}>
                            <AlertTriangle size={18}/> Send Priority Reminder
                         </button>
                      </div>
                   </div>

                   {/* System Logs Placeholder */}
                   <div className="glass-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.01)' }}>
                      <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                         <Activity size={20}/> Recent System Diagnostics
                      </h4>
                      <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
                         <li>User registered: {new Date(viewProgressData.student.createdAt).toLocaleDateString()}</li>
                         <li>Active Plan Configurations: {viewProgressData.plans.length}</li>
                         <li>Total Logged Metrics: {viewProgressData.totalTasks} tasks evaluated.</li>
                      </ul>
                   </div>
                </div>

             </div>
          )}
        </div>
      ) : (

        // ==============================================
        // VIEW: ALL STUDENTS HUB
        // ==============================================
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Mentor Dashboard</h1>
              <p style={{ color: 'var(--text-muted)' }}>Globally monitor active students and dynamically flag incomplete task workflows.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <button 
              className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveTab('all')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Layers size={18}/> Connected Students ({studentsData.length})
            </button>
            <button 
              className={`btn ${activeTab === 'incomplete' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveTab('incomplete')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', borderColor: activeTab === 'incomplete' ? '' : 'var(--danger-color)', color: activeTab === 'incomplete' ? '' : 'var(--danger-color)' }}
            >
              <AlertTriangle size={18}/> Incomplete Work ({incompleteData.length})
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '16px', overflowX: 'auto', borderRadius: '16px' }}>
            {displayedList.length === 0 ? (
               <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                  {activeTab === 'all' ? 'No students are structurally bound to your Mentor profile.' : 'Zero flagged incomplete tasks detected across your active students! Excellent work.'}
               </div>
            ) : (
              <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left' }}>
                    <th style={{ padding: '16px', color: 'var(--text-muted)' }}>Student Configuration</th>
                    <th style={{ padding: '16px', color: 'var(--text-muted)' }}>Target Exam / Status</th>
                    <th style={{ padding: '16px', color: 'var(--text-muted)' }}>Registered Time Locale</th>
                    <th style={{ padding: '16px', color: 'var(--text-muted)', textAlign: 'right' }}>Execution Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedList.map(s => (
                    <tr key={s._id} style={{ borderBottom: '1px solid var(--panel-border)' }}>
                      <td style={{ padding: '16px' }}>
                         <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{s.name}</div>
                         <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{s.email}</div>
                      </td>
                      <td style={{ padding: '16px' }}>
                         <span style={{ 
                            background: activeTab === 'incomplete' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
                            color: activeTab === 'incomplete' ? 'var(--danger-color)' : 'var(--success-color)', 
                            padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' 
                         }}>
                            {activeTab === 'incomplete' ? 'Tasks Pending' : (s.targetExam || 'Generic Tracker')}
                         </span>
                      </td>
                      <td style={{ padding: '16px', color: 'var(--text-muted)' }}>
                         {new Date(s.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                         <button className="btn btn-primary" style={{ padding: '8px 24px' }} onClick={() => loadProgress(s)}>
                           View Analytics Panel
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
}
