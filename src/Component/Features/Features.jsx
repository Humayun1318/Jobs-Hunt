import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Features = ({ feature }) => {
    const { company_logo, company_name, remote_or_onsite, location, salary, job_title, fulltime_or_parttime, id } = feature;

    const navigate = useNavigate();


    return (





        <div className=' col-12 col-md-6   md: my-3    ' >
            <Card className=' rounded m-3 px-5 py-5 '  >

                <img className='img-fluid' style={{ width: '120px', height: '40px' }} src={company_logo} alt="" />
                <h3 className='md:my-1 fs-5'>{job_title}</h3>
                <h5 className='md:my-1 fs-6'>{company_name}</h5>
                <div className='md:my-2'>
                    <button className='bg-white  me-4 p-2 fs-6 rounded-1 fw-bold  ' style={{
                        color: "#7E90FE ",
                        border: '1px solid #7E90FE'


                    }}>{remote_or_onsite}</button>
                    <button className='bg-white  me-4 p-2 fs-6 rounded-1 fw-bold  ' style={{
                        color: "#7E90FE ",
                        border: '1px solid #7E90FE'

                    }}>{fulltime_or_parttime}</button>

                </div>
                <p className='fs-6'>{location}     {salary}   </p>
                <button onClick={() => navigate(`jobDetails/${id}`)} className='px py-2 fs-6 border-0 rounded-3 text-white fw-bold w-50 ' style={{
                    background: ` linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)`
                }}>View Details</button>

            </Card>











        </div>

    );
};

export default Features;