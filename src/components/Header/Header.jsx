import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h2 className='header-logo'> Career Hub</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/AppliedJobs'>Applied Jobs</Link>
                <Link to='/Blog'>Blog</Link>
            </nav>
            <button className='Header-btn'>Star Applying</button>
        </div>
    );
};

export default Header;