import React, { useState } from 'react';
import './JobList.css';

const allJobs = [
  { title: "Frontend Developer", company: "Google", location: "Remote" },
  { title: "UI/UX Designer", company: "Flutterwave", location: "Lagos" },
  { title: "Backend Developer", company: "Paystack", location: "Remote" },
  { title: "Mobile Engineer", company: "Andela", location: "Abuja" },
  { title: "Data Analyst", company: "Moniepoint", location: "Lagos" },
];

function JobList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="job-list" data-aos="fade-up">
      <h2 className="job-title">Latest Job Listings</h2>

      <input
        type="text"
        placeholder="Search job title, company, or location..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="job-cards">
        {filteredJobs.length === 0 ? (
          <p>No jobs found 😢</p>
        ) : (
          filteredJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p>{job.company} – {job.location}</p>
              <button className="apply-btn">Apply</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default JobList;
