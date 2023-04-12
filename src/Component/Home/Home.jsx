
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Features from '../Features/Features';

const Home = () => {

    const categoryData = useLoaderData();
    const [features, setFeatures] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('jobDb.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    const featuresToShow = showAll ? features : features.slice(0, 4);

    return (
        <div className='' >
            <div className='' style={{ background: ' linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <div className="container">
                    <div className="row md:py-5" >
                        <div className="col-12 col-md-6  sm-12 ,md:mt-5 " >
                            <h1 className='fw-bold display-3 mt-5'>One Step <br /> Closer To Your <br /> <span className='' style={{
                                color: '  #7E90FE '
                            }}>Dream Job</span> </h1>

                            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                            <button className='px-4 py-3 fs-4 border-0 rounded-3 text-white' style={{
                                background: ` linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)`
                            }}>Get Started</button>
                        </div>
                        <div className="col-12 col-md-6 sm-12 ms-6"><img className='img-fluid ' src="../../../assets/All Images/P3OLGJ1 copy 1.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='container ' >

                {/* job category */}
                <div className='category-container text-center my-5'>
                    <h4 className='fw-bold fs-2'>Job Category List</h4>
                    <p className='mb-5 opacity-75'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='row ' >

                        {
                            categoryData.map(category => <Category
                                key={category.id}
                                category={category}
                            ></Category>)
                        }
                    </div>



                </div>

                {/* features data */}
                <div className='text-center'>
                    <h4 className='fw-bold fs-2'>Featured Jobs</h4>
                    <p className='mb-5 opacity-75'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='row'>
                    {featuresToShow.map(feature => (
                        <Features key={feature.id} feature={feature} />
                    ))}
                </div>
                <div className='text-center my-3'>
                    {showAll ? null : (
                        <button
                            className='px-4 py-2 fs-5 border-0 rounded-3 text-white'
                            style={{ background: `linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)` }}
                            onClick={() => setShowAll(true)}
                        >
                            See All Jobs
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
