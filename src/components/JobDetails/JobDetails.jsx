import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useParams } from 'react-router-dom';


const JobDetails = () => {
    const { jobId } = useParams();
    console.log(jobId);
    const [data, setData] = useState(null);
    console.log(data)

    useEffect(() => {
        fetch('/JobDb.json')
            .then(response => response.json())
            .then(data => {
                const jobs = data.find(job => job.id == jobId);
                setData(jobs);
            })
    }, [jobId]);

    // const handleClick = () => {
    //     localStorage.setItem('data', JSON.stringify(data));
    // };
    return (
        <div>
            <h2>Job details</h2>

        </div>
    );
};

export default JobDetails;