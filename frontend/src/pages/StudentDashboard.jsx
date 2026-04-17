import { Routes, Route } from 'react-router-dom';
import DashboardOverview from './DashboardOverview';
import MyTasks from './MyTasks';
import Materials from './Materials';
import ProgressAnalytics from './ProgressAnalytics';

export default function StudentDashboard() {
  return (
    <div className="animate-fade-in" style={{ height: '100%' }}>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/tasks" element={<MyTasks />} />
        <Route path="/materials/*" element={<Materials />} />
        <Route path="/progress" element={<ProgressAnalytics />} />
      </Routes>
    </div>
  );
}
