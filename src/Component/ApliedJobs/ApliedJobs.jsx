import React from "react";
import { useNavigate } from "react-router-dom";
import AllJobs from "../AllJobs/AllJobs";

function ApliedJobs() {
    const cartItems = JSON.parse(localStorage.getItem("jobData")) || [];
    console.log(cartItems.remote_or_onsite);

    const { remote_or_onsite, fulltime_or_parttime } = cartItems


    return (
        <div className='container'>
            <div className=''>
                <h4 className='text-center py-5 p-4' >Applied Jobs
                </h4>
            </div>
            <div className="text-end">
                <button className='bg-white  me-2 p-2 fs-6 rounded-1 fw-bold  ' style={{
                    color: "#7E90FE ",
                    border: '1px solid #7E90FE'


                }}>Show Remote Jobs </button>
                <button className='bg-white  me-4 p-2 fs-6 rounded-1 fw-bold  ' style={{
                    color: "#7E90FE ",
                    border: '1px solid #7E90FE'

                }}>Show Onside Jobs</button>
            </div>


            <div>
                {

                    cartItems.map((cart, index) => <AllJobs key={index} cart={cart}></AllJobs>)

                }
            </div>


        </div>
    );
}


export default ApliedJobs;