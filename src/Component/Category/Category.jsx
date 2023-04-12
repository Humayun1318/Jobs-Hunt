import React from 'react';
import Card from 'react-bootstrap/Card';

const Category = ({ category }) => {
    const { name, jobs_available, logo
    } = category
    // console.log(category);
    return (
        <div className="col-12 col-md-6 col-lg-3   rounded text-start p-4  " >
            <Card className='p-4 border-0 rounded' style={{
                background: ` linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)`, width: '18rem'
            }}  >

                <img className='m-auto ms-0 img-fluid p-4 rounded-4' style={{
                    background: ` linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)`
                }} src={logo} alt="" />

                <h4 className='mt-3'>{name}</h4>

                <p>{jobs_available}</p>

            </Card>



        </div >

    );
};

export default Category;