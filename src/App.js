import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CourseworkPage from './pages/CourseworkPage';
import ExperiencePage from './pages/ExperiencePage';
import FunPage from './pages/FunPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <SiteHeader
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
          )
        }
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/coursework" element={<CourseworkPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/art" element={<FunPage />} />
        <Route path="/fun" element={<FunPage />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}
