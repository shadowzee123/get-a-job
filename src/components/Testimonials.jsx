import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"GetAJob made it super easy for me to find a remote job. The process was smooth and fast!"</p>
          <h4>- Amina Bello</h4>
        </div>
        <div className="testimonial-card">
          <p>"I applied to 3 companies and got 2 interviews within a week. Highly recommend it!"</p>
          <h4>- David Okoye</h4>
        </div>
        <div className="testimonial-card">
          <p>"This platform connected me with a great tech startup. The UI is clean and easy to use."</p>
          <h4>- Chinedu M.</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
// File: src/components/Testimonials.jsx
// --- a/file:///c%3A/Users/S%20APPLETECH/get-a-job/src/components/Testimonials.jsx
// +++ b/file:///c%3A/Users/S%20APPLETECH/get-a-job/src/components/Testimonials.jsx
// @@ -1,4 +1,6 @@
