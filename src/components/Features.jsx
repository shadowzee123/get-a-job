import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2 className="features-title" data-aos="fade-up">Why Choose GetAJob?</h2>
      <div className="features-cards">
        <div className="feature-card">
          <h3>Verified Listings</h3>
          <p>All jobs are manually verified for authenticity and quality.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Application</h3>
          <p>Apply for jobs with just a few clicks. No stress.</p>
        </div>
        <div className="feature-card">
          <h3>Top Companies</h3>
          <p>We partner with leading companies across multiple industries.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
// This component displays the features of the GetAJob platform.
// It includes a title and three feature cards with descriptions.
