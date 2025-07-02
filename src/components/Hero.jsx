import React from 'react';
import './Hero.css';

function Hero() {
  return (
   <section className="hero" data-aos="fade-up">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Dream Job Today</h1>
        <p className="hero-subtitle">
          Discover thousands of jobs and connect with top companies in minutes.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
// This Hero component serves as the landing section of the application, providing a clear call to action for users to start their job search. The styling is handled in the Hero.css file, which ensures a responsive and visually appealing design. The button prompts users to take action, leading them further into the job search process.
// The Hero component is designed to be the first thing users see when they visit the site,
