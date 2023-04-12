import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faSackDollar, faVoicemail, faPhone, faCrosshairs } from '@fortawesome/free-solid-svg-icons'


const jobDetails = () => {
  const { jobId } = useParams();

  const [jobData, setJobData] = useState(null);

 useEffect(() => {
    fetch('/jobDb.json')
      .then(response => response.json())
      .then(data => {
        const jobs = data.find(job => job.id == jobId);
        setJobData(jobs);
      })
  }, [jobId]);

  const handleAddData = () => {
    const existingData = JSON.parse(localStorage.getItem("jobData")) || [];
    const newData = [...existingData, jobData];
    localStorage.setItem("jobData", JSON.stringify(newData));
  };


  return (

    <div >
      <div className=''>
        <h4 className='text-center py-5 p-4'style={{ background: ' linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
          Job Details</h4>
      </div>
      <div className='container my-5'>
        <div className="row ">


          <div className="col-12 col-md-8">



            <p><span className='fw-bold'>Job Description:</span>  {jobData?.job_description}</p>

            <p><span className='fw-bold'>Job Responsibility:</span>  {jobData?.job_responsibility}</p>

            <p><span className='fw-bold'>Educational Requirements:
            </span> <br />  {jobData?.educational_requirements}</p>

            <p><span className='fw-bold'>Experiences: </span> <br />  {jobData?.experiences}</p>

          </div>
          <div className='col-12 col-md-4'>

            <div className="  border p-4 rounded" style={{
              background: `  linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)`
            }}>
              <p> <span className='fw-bold'>Job Details</span></p>
              <hr />
              <p> <span className='fw-bold '> <FontAwesomeIcon className='' icon={faSackDollar} />
               Salary :</span>
                <span className='' style={{ color: '#757575' }}>{jobData?.salary}</span></p>
              <p> <span className='fw-bold'> <FontAwesomeIcon icon={faCrosshairs} />
                Job Title:</span>  <span className=''
                style={{ color: '#757575' }}>{jobData?.job_title}</span></p>
              <p> <span className='fw-bold'>
                Contact Information </span>  </p>
              <hr />

              <p> <span className='fw-bold'><FontAwesomeIcon icon={faPhone} />
                   Phone :
              </span><span className='' style={{ color: '#757575' }}>{jobData?.contact_information.phone} 
               </span></p>
              <p><span className='fw-bold'><FontAwesomeIcon icon={faVoicemail} />
                Email : </span><span className=''
                style={{ color: '#757575' }}> {jobData?.contact_information.email}</span></p>
              <p> <span className='fw-bold'><FontAwesomeIcon icon={faLocation} />
                 Address </span>: <span className=''
                style={{ color: '#757575' }}>{jobData?.location}</span></p>

            </div>

            <button onClick={handleAddData}
              className='px-4 py-3 mt-3 fs-5 border-0 rounded-3 text-white fw-bold w-100' style={{
              background: ` linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)`
            }}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default jobDetails;