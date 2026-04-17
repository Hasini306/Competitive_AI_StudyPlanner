import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { BookOpen, ChevronRight, ArrowLeft, Lightbulb, PenTool, Hash, Activity, Clock, List, AlertCircle, HelpCircle, CheckCircle } from 'lucide-react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

export default function Materials() {
  const { user } = useContext(AuthContext);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial Fetch logic
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/planner', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setPlans(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, [user.token]);

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Loading Study Plans...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<PlansView plans={plans} />} />
      <Route path="/:planId/topics" element={<TopicsView plans={plans} />} />
      <Route path="/:planId/topics/:topicName" element={<TopicDetailView plans={plans} />} />
    </Routes>
  );
}

// ----- VIEW 1: All Plans -----
function PlansView({ plans }) {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: '24px' }}>Study Materials Hub</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
        Select a subject module to browse its precise topic-wise educational reading materials.
      </p>

      {plans.length === 0 ? (
        <div className="glass-card" style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)' }}>
          No plans available to fetch materials from. Let's create an AI study plan first!
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {plans.map(plan => {
            const uniqueTopicsSet = new Set();
            (plan.planDays || []).forEach(d => {
              d.tasks.forEach(t => {
                 if (t.topic) uniqueTopicsSet.add(t.topic);
              });
            });
            const uniqueTopics = Array.from(uniqueTopicsSet);

            return (
              <div key={plan._id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>{plan.examType}</div>
                      <h3 style={{ margin: '4px 0 8px 0', fontSize: '1.4rem' }}>{plan.subject || (plan.subjects && plan.subjects.join(', ')) || 'General'}</h3>
                    </div>
                    <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary-color)' }}>
                      <BookOpen size={24} />
                    </div>
                  </div>
                  
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Duration: {plan.totalDays} Days Module<br />
                    Containing {uniqueTopics.length} core topics
                  </div>
                  
                  {uniqueTopics.length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      {uniqueTopics.slice(0, 3).map((topic, i) => (
                         <li key={i} style={{ marginBottom: '4px' }}>{topic}</li>
                      ))}
                      {uniqueTopics.length > 3 && <li style={{ fontStyle: 'italic', listStyleType: 'none', marginLeft: '-20px', marginTop: '4px' }}>+ {uniqueTopics.length - 3} more topics</li>}
                    </ul>
                  )}
                </div>
                
                {/* Router explicit navigation */}
                <button onClick={() => navigate(plan._id + "/topics")} className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  Explore Topics <ChevronRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ----- VIEW 2: Sub-Topics Layout -----
function TopicsView({ plans }) {
  const { planId } = useParams();
  const navigate = useNavigate();

  const selectedPlan = plans.find(p => p._id === planId);
  if (!selectedPlan) return <div style={{ padding: '20px', color: 'var(--text-muted)' }}>Plan not found.</div>;

  const uniqueTopicsSet = new Set();
  (selectedPlan.planDays || []).forEach(d => {
      d.tasks.forEach(t => {
         if (t.topic) uniqueTopicsSet.add(t.topic);
      });
  });
  const currentPlanTopics = Array.from(uniqueTopicsSet);

  return (
    <div className="animate-fade-in">
      <button onClick={() => navigate('/student-dashboard/materials')} className="btn" style={{ background: 'transparent', color: 'var(--text-muted)', padding: '0', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
        <ArrowLeft size={18} /> Back to Hub
      </button>
      
      <h2 style={{ marginBottom: '8px', fontSize: '2rem' }}>{selectedPlan.examType} - {selectedPlan.subject} Topics</h2>
      <p style={{ color: 'var(--primary-color)', marginBottom: '32px', fontWeight: '500' }}>
         Select any explicitly mapped sub-topic to open its dedicated educational reading view securely. All materials are permanently unlocked.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {currentPlanTopics.map((topic, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ color: 'var(--primary-color)', flexShrink: 0 }}>
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', lineHeight: '1.4' }}>{topic}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Foundational Concepts</span>
                  </div>
              </div>
              
              <button 
                onClick={() => navigate(`/student-dashboard/materials/${planId}/topics/${encodeURIComponent(topic)}`)} 
                className="btn btn-outline" style={{ width: '100%' }}
              >
                  Open Notes
              </button>
            </div>
        ))}
        {currentPlanTopics.length === 0 && (
            <div style={{ color: 'var(--text-muted)' }}>No explicitly formatted topics exist in this specific plan structure.</div>
        )}
      </div>
    </div>
  );
}

// ----- VIEW 3: Dedicated Topic Reading Visualizer -----
function TopicDetailView({ plans }) {
  const { user } = useContext(AuthContext);
  const { planId, topicName } = useParams();
  const navigate = useNavigate();

  const [topicMaterialContent, setTopicMaterialContent] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);

  const selectedPlan = plans.find(p => p._id === planId);
  const decodedTopic = decodeURIComponent(topicName);

  useEffect(() => {
    let isMounted = true;
    const fetchMaterial = async () => {
      setLoadingContent(true);
      try {
         const { data } = await axios.get(`http://localhost:5000/api/tasks/materials/${encodeURIComponent(decodedTopic)}?examType=${encodeURIComponent(selectedPlan?.examType || '')}&subject=${encodeURIComponent(selectedPlan?.subject || '')}`, {
           headers: { Authorization: `Bearer ${user.token}` }
         });
         if (isMounted) setTopicMaterialContent(data);
      } catch (err) {
         console.error("No material found for topic:", err);
         if (isMounted) setTopicMaterialContent(null);
      } finally {
         if (isMounted) setLoadingContent(false);
      }
    };
    fetchMaterial();
    return () => { isMounted = false; };
  }, [decodedTopic, user.token]);

  if (!selectedPlan) return <div style={{ padding: '20px', color: 'var(--text-muted)' }}>Plan not found.</div>;

  return (
    <div className="animate-fade-in">
      {/* Explicit strict back mapping */}
      <button 
        onClick={() => navigate(`/student-dashboard/materials/${planId}/topics`)} 
        className="btn" 
        style={{ background: 'transparent', color: 'var(--text-muted)', padding: '0', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}
      >
        <ArrowLeft size={18} /> Back to Topic Selection
      </button>
      
      <h2 className="text-gradient" style={{ marginBottom: '8px', fontSize: '2.5rem' }}>{decodedTopic}</h2>
      <div style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1rem' }}>
        Intensive reading documentation directly targeting {decodedTopic} strictly inside {selectedPlan.subject}.
      </div>

      {loadingContent ? (
        <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>Searching database algorithms...</div>
      ) : !topicMaterialContent ? (
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--warning-color)' }}>
          No hardcoded detailed materials are yet configured on our server strictly for "{decodedTopic}". Please wait while your professors upload it!
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Theory & Definitions */}
          {topicMaterialContent.content?.theory?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--primary-color)' }}>
                  <BookOpen size={24} /> Core Theory & Definition
              </h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-primary)', lineHeight: '1.8' }}>
                  {topicMaterialContent.content.theory.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                  ))}
              </ul>
            </div>
          )}

          {/* Formulas */}
          {topicMaterialContent.content?.formulas?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px', borderLeft: '4px solid var(--primary-color)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Hash size={24} style={{ color: 'var(--primary-color)' }} /> Essential Formulas
              </h3>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                  {topicMaterialContent.content.formulas.map((item, idx) => (
                    <div key={idx} style={{ padding: '8px 0', borderBottom: idx !== topicMaterialContent.content.formulas.length - 1 ? '1px solid var(--panel-border)' : 'none' }}>
                        {item}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Key Concepts */}
          {topicMaterialContent.content?.keyConcepts?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--success-color)' }}>
                  <Lightbulb size={24} /> Key Concepts
              </h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  {topicMaterialContent.content.keyConcepts.map((concept, idx) => (
                    <li key={idx} style={{ marginBottom: '12px' }}>{concept}</li>
                  ))}
              </ul>
            </div>
          )}

          {/* Important Notes & Shortcuts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {topicMaterialContent.content?.importantNotes?.length > 0 && (
              <div className="glass-card" style={{ padding: '24px', background: 'rgba(239, 68, 68, 0.05)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--danger-color)' }}>
                    <Activity size={20} /> Watch Out & Important Notes
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {topicMaterialContent.content.importantNotes.map((note, idx) => (
                        <li key={idx} style={{ marginBottom: '8px' }}>{note}</li>
                    ))}
                  </ul>
              </div>
            )}

            {topicMaterialContent.content?.shortcuts?.length > 0 && (
              <div className="glass-card" style={{ padding: '24px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--warning-color)' }}>
                    <PenTool size={20} /> Workarounds & Shortcuts
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {topicMaterialContent.content.shortcuts.map((sc, idx) => (
                        <li key={idx} style={{ marginBottom: '8px' }}>{sc}</li>
                    ))}
                  </ul>
              </div>
            )}
          </div>

          {/* Examples */}
          {topicMaterialContent.content?.examples?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px', marginTop: '10px', borderLeft: '4px solid var(--success-color)' }}>
              <h3 style={{ marginBottom: '20px' }}>Worked Examples</h3>
              {topicMaterialContent.content.examples.map((ex, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginBottom: '12px', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                    {ex}
                  </div>
              ))}
            </div>
          )}

          {/* Theory / Non-Formula Based Dynamic Fields */}
          {topicMaterialContent.content?.topicExplanation?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--primary-color)' }}>
                  <BookOpen size={24} /> Topic Explanation
              </h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-primary)', lineHeight: '1.8' }}>
                  {topicMaterialContent.content.topicExplanation.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                  ))}
              </ul>
            </div>
          )}

          {topicMaterialContent.content?.timeline?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px', borderLeft: '4px solid var(--primary-color)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Clock size={24} style={{ color: 'var(--primary-color)' }} /> Chronology & Timeline
              </h3>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '8px', fontSize: '1.05rem', letterSpacing: '0.2px' }}>
                  {topicMaterialContent.content.timeline.map((item, idx) => (
                    <div key={idx} style={{ padding: '8px 0', borderBottom: idx !== topicMaterialContent.content.timeline.length - 1 ? '1px solid var(--panel-border)' : 'none' }}>
                        <span style={{ color: 'var(--primary-color)', marginRight: '8px' }}>•</span> {item}
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
             {topicMaterialContent.content?.importantFacts?.length > 0 && (
               <div className="glass-card" style={{ padding: '24px' }}>
                   <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--success-color)' }}>
                     <List size={20} /> Important Facts
                   </h4>
                   <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                     {topicMaterialContent.content.importantFacts.map((fact, idx) => (
                         <li key={idx} style={{ marginBottom: '8px' }}>{fact}</li>
                     ))}
                   </ul>
               </div>
             )}

             {topicMaterialContent.content?.causesAndEffects?.length > 0 && (
               <div className="glass-card" style={{ padding: '24px' }}>
                   <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--warning-color)' }}>
                     <AlertCircle size={20} /> Causes & Effects
                   </h4>
                   <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                     {topicMaterialContent.content.causesAndEffects.map((item, idx) => (
                         <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                     ))}
                   </ul>
               </div>
             )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
             {topicMaterialContent.content?.importantTerms?.length > 0 && (
               <div className="glass-card" style={{ padding: '24px' }}>
                   <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--primary-color)' }}>
                     <Hash size={20} /> Important Terms
                   </h4>
                   <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                     {topicMaterialContent.content.importantTerms.map((term, idx) => (
                         <li key={idx} style={{ marginBottom: '8px' }}>{term}</li>
                     ))}
                   </ul>
               </div>
             )}

             {topicMaterialContent.content?.faq?.length > 0 && (
               <div className="glass-card" style={{ padding: '24px' }}>
                   <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: '#10b981' }}>
                     <HelpCircle size={20} /> FAQ
                   </h4>
                   <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                     {topicMaterialContent.content.faq.map((q, idx) => (
                         <li key={idx} style={{ marginBottom: '8px' }}>{q}</li>
                     ))}
                   </ul>
               </div>
             )}
          </div>

          {topicMaterialContent.content?.revisionBullets?.length > 0 && (
            <div className="glass-card" style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.05)', borderBottom: '4px solid #10b981' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: '#10b981' }}>
                  <CheckCircle size={24} /> Summary & Revision Bullets
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {topicMaterialContent.content.revisionBullets.map((rev, idx) => (
                    <div key={idx} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>
                        {rev}
                    </div>
                  ))}
                  {topicMaterialContent.content?.summaryNotes?.map((note, idx) => (
                    <div key={`sn-${idx}`} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>
                        {note}
                    </div>
                  ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
