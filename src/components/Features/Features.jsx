import React from 'react';
import './Features.css'

const Features = ({feature}) => {
    console.log(feature)
    const { company_logo, company_name, remote_or_onsite, location, salary, job_title, 
        fulltime_or_parttime, job_description, id } = feature;
    
    return (
        <div className='feature-individual'>
            <img className='' src={company_logo} alt="" />
            <h3 className='job-title'>{job_title}</h3>
            <h5 className='company-name'>{company_name}</h5>
            <div className=''>
                <button className='btn-remote'>{remote_or_onsite}</button>
                <button className='btn-full-or-part-time'> {fulltime_or_parttime}</button>
            </div>
            <p>{location}     {salary}   </p>
            <button onClick={() => navigate(`jobDetails/${id}`)} className=''>View Details</button>
        </div>
    );
};

export default Features;