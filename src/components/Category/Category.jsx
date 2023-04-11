import React from 'react';
import './Category.css'

const Category = ({category}) => {
    // console.log(category)
    const { name, jobs_available, logo
    } = category
    return (
        <div className='ctg-individual'>
            <div className="">

                <img className='logo' src={logo} alt="" />

                <h4 className='ctg-name'>{name}</h4>

                <p className='jobs-available'>{jobs_available}</p>

            </div >

        </div>
    );
};

export default Category;