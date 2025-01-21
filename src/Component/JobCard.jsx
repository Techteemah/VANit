import React from 'react';
import driver from '../assets/male.png'


const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-details">
        <img src={driver} alt={job.name} />
        <div className="job-info">
          <h3>{job.name}</h3>
          <p><i className="las la-phone-volume"></i> {job.phone}</p>
          <p><i className="las la-map"></i> {job.from} ➡️ {job.to}</p>
        </div>
      </div>
      <div>
        <button className="accept-btn">Accept</button>
        <div className="las la-certificate">
          <button><i className="las la-info"></i></button>
          <button><i className="las la-times-circle"></i></button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
