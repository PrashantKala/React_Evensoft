import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navabar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar bg-black p-0">
            <Container className="p-0">
                <Navbar.Brand className="me-0 p-0" href="/">
                    <img
                        src='../images/header_logo.svg'
                        width="100"
                        height="auto" // Set a fixed height if needed, e.g., height="50"
                        className="d-inline-block align-top me-100 logo"
                        alt="Evensoft logo"
                        style={{ width: "100px", height: "auto" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="unstyled-link nav-item text-white  ms-5 fw-bold">Home</NavLink>
                        <NavLink to="/Solutions" className="unstyled-link nav-item text-white  ms-5 fw-bold">Solutions</NavLink>
                        <NavLink to="/About" className="unstyled-link nav-item text-white  ms-5 fw-bold">About</NavLink>
                        <NavLink to="/ContactUs" className="unstyled-link nav-item text-white ms-5 fw-bold">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navabar;
