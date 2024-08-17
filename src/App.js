import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import InterviewExperiencesPage from './components/InterviewExperience';
import StudyGroupsPage from './components/StudyGroup';
import ResumeScorePage from './components/ResumeScore';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <header className="w-full p-5 flex justify-between items-center">
          <div className="text-4xl font-bold">
            <span className="text-orange-500">tapIn</span>
            <span className="text-white">.</span>
          </div>
          <nav className="space-x-10">
            <Link to="/" className="text-white hover:text-orange-500">Home</Link>
            <Link to="/about" className="text-white hover:text-orange-500">About</Link>
            <Link to="/interview-experiences" className="text-white hover:text-orange-500">Interview Experiences</Link>
            <Link to="/study-groups" className="text-white hover:text-orange-500">Study Groups</Link>
            <Link to="/resume-score" className="text-white hover:text-orange-500">Resume Score</Link>
          </nav>
          <a href="#" className="text-orange-500 hover:text-white">Login/Signup</a>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/interview-experiences" element={<InterviewExperiencesPage />} />
            <Route path="/study-groups" element={<StudyGroupsPage />} />
            <Route path="/resume-score" element={<ResumeScorePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
