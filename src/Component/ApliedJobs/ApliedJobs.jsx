import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AllJobs from "../AllJobs/AllJobs";

function ApliedJobs() {
    const cartItems = JSON.parse(localStorage.getItem("jobData")) || [];

    const [showRemoteJobs, setShowRemoteJobs] = useState(false);
    const [showOnsiteJobs, setShowOnsiteJobs] = useState(false);

    const handleShowRemoteJobs = () => {
        setShowRemoteJobs(true);
        setShowOnsiteJobs(false);
    };

    const handleShowOnsiteJobs = () => {
        setShowOnsiteJobs(true);
        setShowRemoteJobs(false);
    };

    const remoteJobs = cartItems.filter(
        (cart) => cart.remote_or_onsite === "Remote"
    );
    const onsiteJobs = cartItems.filter(
        (cart) => cart.remote_or_onsite === "Onsite"
    );

    return (
        <div className="container">
            <div className="">
                <h4 className="text-center py-5 p-4">Applied Jobs</h4>
            </div>
            <div className="text-end">
                <button
                    className="bg-white  me-2 p-2 fs-6 rounded-1 fw-bold"
                    style={{ color: "#7E90FE ", border: "1px solid #7E90FE" }}
                    onClick={handleShowRemoteJobs}
                >
                    Show Remote Jobs
                </button>
                <button
                    className="bg-white  me-4 p-2 fs-6 rounded-1 fw-bold"
                    style={{ color: "#7E90FE ", border: "1px solid #7E90FE" }}
                    onClick={handleShowOnsiteJobs}
                >
                    Show Onside Jobs
                </button>
            </div>

            <div>
                {showRemoteJobs &&
                    remoteJobs.map((cart, index) => (
                        <AllJobs key={index} cart={cart}></AllJobs>
                    ))}

                {showOnsiteJobs &&
                    onsiteJobs.map((cart, index) => (
                        <AllJobs key={index} cart={cart}></AllJobs>
                    ))}

                {!showRemoteJobs && !showOnsiteJobs &&
                    cartItems.map((cart, index) => (
                        <AllJobs key={index} cart={cart}></AllJobs>
                    ))}
            </div>
        </div>
    );
}

export default ApliedJobs;
