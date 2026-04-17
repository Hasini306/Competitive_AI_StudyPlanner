import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, CartesianGrid 
} from 'recharts';

export default function ProgressAnalytics() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
         const { data } = await axios.get('http://localhost:5000/api/tasks/progress', {
           headers: { Authorization: `Bearer ${user.token}` }
         });
         setStats(data);
      } catch (err) {
         console.error(err);
      }
    };
    fetchStats();
  }, [user.token]);

  if (!stats) return <div style={{ padding: '40px', textAlign:'center', color: 'var(--text-muted)' }}>Loading Analytics...</div>;

  const pieData = [
    { name: 'Completed', value: stats.completedUniqueTasks || 0 },
    { name: 'Pending', value: stats.pendingUniqueTasks || 0 },
    { name: 'Locked', value: stats.lockedUniqueTasks || 0 }
  ].filter(d => d.value > 0);
  
  const PIE_COLORS = ['#10b981', '#f59e0b', '#475569'];

  const testsSummaryData = [
    { name: 'Tests Taken', value: stats.testSummary?.testsTaken || 0, fill: '#3b82f6' },
    { name: 'Passed', value: stats.testSummary?.testsPassed || 0, fill: '#10b981' },
    { name: 'Failed', value: stats.testSummary?.testsFailed || 0, fill: '#ef4444' },
    { name: 'Reattempts', value: stats.testSummary?.reattempts || 0, fill: '#f59e0b' }
  ];

  const subjectData = Object.keys(stats.subjectProgress || {}).map(sub => ({
     name: sub,
     Completion: stats.subjectProgress[sub]
  }));

  return (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: '24px' }}>Detailed Progress Analytics</h2>
      
      {/* Top Value Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', marginBottom: '32px' }}>
         <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary-color)' }}>{stats.totalUniqueTasks || 0}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Total Unique Topics</div>
         </div>
         <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--success-color)' }}>{stats.completedUniqueTasks || 0}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Completed Topics</div>
         </div>
         <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--warning-color)' }}>{stats.pendingUniqueTasks || 0}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Pending Topics</div>
         </div>
         <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', margin: 0, color: '#475569' }}>{stats.lockedUniqueTasks || 0}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Locked Topics</div>
         </div>
         <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--warning-color)' }}>{stats.totalReattempts || 0}</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Reattempts</div>
         </div>
         <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary-color)' }}>{stats.avgScore || 0}/10</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Average Score</div>
         </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', marginBottom: '32px' }}>
         {/* Completion Overview */}
         <div className="glass-card" style={{ height: '380px', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ marginBottom: '16px' }}>Topic Completion Overview</h4>
            {pieData.length === 0 ? (
               <div style={{ margin: 'auto', color: 'var(--text-muted)' }}>No topic data available.</div>
            ) : (
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={pieData}
                        cx="50%"
                        cy="45%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                     >
                        {pieData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                     </Pie>
                     <Tooltip contentStyle={{ background: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: '#fff' }} />
                     <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
               </ResponsiveContainer>
            )}
         </div>

         {/* Tests & Reattempts Analysis */}
         <div className="glass-card" style={{ height: '380px', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ marginBottom: '16px' }}>Tests Summary & Reattempts</h4>
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={testsSummaryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" axisLine={false} tickLine={false} />
                  <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} allowDecimals={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }} 
                    contentStyle={{ background: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                     {testsSummaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                     ))}
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>

      {/* Subject Wise Progress Bar Chart */}
      <div className="glass-card" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ marginBottom: '16px' }}>Subject-wise Topic Completion (%)</h4>
          {subjectData.length === 0 ? (
             <div style={{ margin: 'auto', color: 'var(--text-muted)' }}>No subjects active.</div>
          ) : (
             <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={subjectData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" tickFormatter={tick => `${tick}%`} />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} />
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ background: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }} />
                    <Bar dataKey="Completion" fill="var(--primary-color)" radius={[0, 4, 4, 0]} barSize={30} label={{ position: 'right', fill: '#fff', formatter: val => `${val}%` }} />
                 </BarChart>
             </ResponsiveContainer>
          )}
      </div>

    </div>
  );
}
