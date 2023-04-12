import React from 'react';

const Footer = () => {
    return (
        <div>


            <footer className="footer bg-black py-5 mt-5">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-12 col-md-3 py-5">
                            <h2 className="fs-5 ">ChakriBazar</h2>

                            <p className="py-2 opacity-50 ">There are many variations of passages of Lorem Ipsum available, but
                                the
                                majority have suffered
                                alteration in some form, by injected humour.</p>
                            <div>
                                <img src="../../../assets/Icons/Group 9969.png" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-3 py-5">
                            <div>
                                <h2 className="fs-5 ">Company</h2>
                                <ul className="list-unstyled my-4">
                                    <li className="py-2 opacity-50">About Us</li>
                                    <li className="py-2 opacity-50">Works</li>
                                    <li className="py-2 opacity-50">Latest News</li>
                                    <li className="py-2 opacity-50">Careers</li>

                                </ul>
                            </div>

                        </div>

                        <div className="col-12 col-md-3 py-5">
                            <div>
                                <h2 className="fs-5 ">Support</h2>
                                <ul className="list-unstyled my-4">
                                    <li className="py-2 opacity-50">Help Desk</li>
                                    <li className="py-2 opacity-50">Sales</li>
                                    <li className="py-2 opacity-50">Become a Partner</li>
                                    <li className="py-2 opacity-50">Developers</li>


                                </ul>
                            </div>

                        </div>
                        <div className="col-12 col-md-3 py-5">
                            <div>
                                <h2 className="fs-5 ">Contact</h2>
                                <ul className="list-unstyled my-4">
                                    <li className="py-2 opacity-50">524 Broadway , NYC</li>
                                    <li className="py-2 opacity-50">+1 777 - 978 - 5570</li>


                                </ul>
                            </div>

                        </div>


                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;