import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h2 className='header-logo'> Career Hub</h2>
            <nav >
                <Link className='nav' to='/'>Home</Link>
                <Link className='nav' to='/Statistics'>Statistics</Link>
                <Link className='nav' to='/AppliedJobs'>Applied Jobs</Link>
                <Link className='nav' to='/Blog'>Blog</Link>
            </nav>
            <div className='Header-btn-d'><button className='Header-btn'>Star Applying</button></div>
        </div>
        
    );
};

export default Header;