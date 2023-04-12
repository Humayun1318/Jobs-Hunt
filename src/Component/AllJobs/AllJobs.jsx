import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faSackDollar, faVoicemail, faPhone, faCrosshairs } from '@fortawesome/free-solid-svg-icons'

const AllJobs = ({ cart }) => {
    const { company_logo, company_name, remote_or_onsite, location, salary, job_title, fulltime_or_parttime, id } = cart;
    const navigate = useNavigate();
   
    return (

        <div>
            <div className='border my-3 p-3 d-flex flex-column flex-md-row'>
                <div className='d-flex align-items-center mb-3 mb-md-0'>
                    <div className='me-3'>
                        <img className='border py-5 px-3 rounded-3'
                            style={{ background: '#F4F4F4', maxWidth: '120px' }} src={company_logo} 
                             alt='' />
                    </div>

                    <div className=''>
                        <h3 className='mb-1'>{job_title}</h3>
                        <h5 className='mb-2'>{company_name}</h5>
                        <div className='d-flex'>
                            <button className='bg-white  me-4 p-2 fs-6 rounded-1 fw-bold  ' style={{
                                color: "#7E90FE ",
                                border: '1px solid #7E90FE'


                            }}>{remote_or_onsite}</button>
                            <button className='bg-white  me-4 p-2 fs-6 rounded-1 fw-bold  ' style={{
                                color: "#7E90FE ",
                                border: '1px solid #7E90FE'

                            }}>{fulltime_or_parttime}</button>
                        </div>
                        <p className='mb-0'><FontAwesomeIcon icon={faLocation} />{location} 
                            <span className='me-4'>{salary}</span></p>
                    </div>
                </div>

                <div className='text-end ms-md-auto my-auto'>
                    <button onClick={() => navigate(`../jobDetails/${id}`)}
                        className='px-4 py-2 fs-6 md:py-3 border-0 rounded-3 text-white fw-bold' 
                        style={{ background: `linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)` }}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;
