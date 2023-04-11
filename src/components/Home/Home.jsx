import React, { useEffect, useState } from 'react';
import './Home.css'
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categoryData = useLoaderData()
    // console.log(categoryData);
    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetch('jobDb.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div>
            <div className='banner-clr'>
                <div className='banner-section'>
                    <div className='banner-title'>
                        <h1>One Step Closer To Your <br /><span className='dream'>Dream Job</span></h1>
                        <p className='banner-des'>Explore thousands of job opportunities with all the
                            information
                            you need. Its your future. Come find it. Manage all your job application from
                            start to
                            finish.</p>
                        <button className='banner-btn'>Get Started</button>
                    </div>
                    <div className='banner-img'>
                        <img src="../../../src/assets/All Images/bannerPerson.png" alt="" />

                    </div>
                </div>
            </div>
            {/* job category */}
            <div className='ctg-container'>
                <h1 className='ctg-title'>Job Category List</h1>
                <p className='ctg-des'>Explore thousands of job opportunities with all the information you
                    need. Its your future</p>
                <div className=' ' >

                    {
                        categoryData.map(category => <Category
                            key={category.id}
                            category={category}>
                            
                            </Category>
                            
                       )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;