import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Landing from './pages/Landing';
import StudentLogin from './pages/StudentLogin';
import MentorLogin from './pages/MentorLogin';
import StudentSignup from './pages/StudentSignup';
import StudentDashboard from './pages/StudentDashboard';
import MentorDashboard from './pages/MentorDashboard';
import Profile from './pages/Profile';
import Layout from './components/Layout';

const ProtectedRoute = ({ children, roleRequired }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" />;
  if (roleRequired && user.role !== roleRequired) {
    if (user.role === 'student') return <Navigate to="/student-dashboard" />;
    if (user.role === 'mentor') return <Navigate to="/mentor-dashboard" />;
    return <Navigate to="/" />; // Fallback if role is completely invalid
  }
  
  return <Layout>{children}</Layout>;
};

function AppRoutes() {
  const { user } = useContext(AuthContext);
  
  const getRedirect = () => {
    if (user?.role === 'mentor') return "/mentor-dashboard";
    if (user?.role === 'student') return "/student-dashboard";
    return "/";
  };

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/student/login" element={!user ? <StudentLogin /> : <Navigate to={getRedirect()} />} />
      <Route path="/mentor/login" element={!user ? <MentorLogin /> : <Navigate to={getRedirect()} />} />
      <Route path="/student/signup" element={!user ? <StudentSignup /> : <Navigate to={getRedirect()} />} />
      
      <Route path="/student-dashboard/*" element={
        <ProtectedRoute roleRequired="student"><StudentDashboard /></ProtectedRoute>
      } />
      <Route path="/mentor-dashboard/*" element={
        <ProtectedRoute roleRequired="mentor"><MentorDashboard /></ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute roleRequired={null}><Profile /></ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
