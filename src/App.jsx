import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import LessonPage from './pages/LessonPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ProgressPage from './pages/ProgressPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { getCurrentUser } from './utils/auth.js';
import Metronome from './components/Metronome.jsx';
import './App.css';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const user = getCurrentUser();
  const location = useLocation();

  return (
    <div className="app-shell">
      {user && <Navbar />}
      <main className="app-main">
        <div className="page-transition" key={location.pathname}>
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
            <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/dashboard/:instrument" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
            <Route path="/lesson/:instrument/:tier/:lessonId" element={user ? <LessonPage /> : <Navigate to="/login" />} />
            <Route path="/quiz/:instrument/:tier/:lessonId" element={user ? <QuizPage /> : <Navigate to="/login" />} />
            <Route path="/progress" element={user ? <ProgressPage /> : <Navigate to="/login" />} />
            <Route path="/resources" element={user ? <ResourcesPage /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={user ? '/' : '/login'} />} />
          </Routes>
        </div>
      </main>
      {user && <Metronome />}
    </div>
  );
}
