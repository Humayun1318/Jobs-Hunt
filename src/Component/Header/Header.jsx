import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../ActiveLink/ActiveLink';

// import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <Navbar className='' style={{ background: ' linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }} bg="" expand="lg">
            <Container className=''>
                <Navbar.Brand className='fs-2 fw-semi-bold' href="/">ChakriBazar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar mx-auto gap-4" style={{ color: 'black' }}>
                        <Link to="/" className="nav-link text-decoration-none text-dark">Home</Link>
                        <Link to="/statistics" className="nav-link text-decoration-none text-dark">Statistics</Link>
                        <Link to="/appliedJobs" className="nav-link text-decoration-none text-dark">Applied Jobs</Link>
                        <Link to="/blog" className="nav-link text-decoration-none text-dark">Blog</Link>
                    </Nav>

                    <button className='px-4 py-3 fs-6 border-0 rounded-3 text-white fw-bold' style={{
                        background: ` linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)`
                    }}>Star Applying</button>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    );
};

export default Header;