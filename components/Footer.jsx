import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-end bg-black py-5">
      <Container className=''>
        {/* Top Section */}
        <Row className=" mb-4">
          <Col md={8} className="mx-auto">
            <h5 className='mb-4 text-white display-6 fw-bold' >Get started with Eversoft</h5>
            <p className='fs-5 text-white' >We’re here to help you revolutionize your security and development practices with pioneering technology.</p>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Button variant="outline-secondary text-white" className='fs-4'>Contact us</Button>
          </Col>
        </Row>

        {/* Divider */}
        <hr className='mt-5 mb-5'  />

        {/* Bottom Section */}
        <Row className="text-start m-auto">
          <Col md={4}>
            <h4 className='text-white'>Company</h4>
            <ul className="list-unstyled ">
              <Link className="unstyled-link" to='/About'><li className='text-white unstyled-link fs-5 ms-1' >About</li></Link>
              <Link className="unstyled-link" to='/ContactUs'><li className='unstyled-link fs-5 ms-1' >Contact</li></Link>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className='text-white'>Solutions</h4>
            <ul className="list-unstyled">
            <Link className="unstyled-link" to="/Solutions"><li className=' text-white unstyled-link fs-5 ms-1 ' >Jane AI</li></Link>
            <Link className="unstyled-link" to="/Solutions"><li className=' text-white unstyled-link fs-5 ms-1 ' >QuickScan Engine</li></Link>
            <Link className="unstyled-link" to="/Solutions"><li className=' text-white unstyled-link fs-5 ms-1 ' >Animate</li></Link>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className='text-white'>Legal</h4>
            <ul className="list-unstyled">
            <Link className="unstyled-link" to="/PrivacyPolicy"><li className='text-white unstyled-link fs-5 ms-1 ' >Privacy Policy</li></Link>
            <Link className="unstyled-link" to="/TermsOfUse"><li className='text-white unstyled-link fs-5 ms-1 ' >Terms of Use</li></Link>
            <Link className="unstyled-link" to="/IntellectualProperty"><li className='text-white unstyled-link fs-5 ms-1 ' >Intellectual Property</li></Link>
            </ul>
          </Col>
          
        </Row>

        {/* Divider */}
        <hr className='mt-5 mb-5' />

        {/* Copyright */}
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">© 2024 Eversoft, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
