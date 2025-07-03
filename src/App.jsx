import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import JobList from './components/JobList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <JobList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
// This App component serves as the main entry point for the GetAJob application.
// It initializes AOS for animations, manages dark mode state, and renders the main components of the application including Navbar, Hero, Features, JobList, Testimonials, and Footer.
// The dark mode functionality allows users to toggle between light and dark themes, enhancing user experience based on personal preference.
// The useEffect hooks are used to initialize AOS and apply the dark mode class to the body element when the darkMode state changes.