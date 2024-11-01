import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="d-flex justify-content-center align-items-end bg-black pt-5 pb-4">
      <Container>
        {/* Top Section */}
        <Row className="mb-4">
          <Col md={8} className="mx-auto">
            <h5 className="mb-4 text-white display-6 fw-bold">Get started with Eversoft</h5>
            <p className="fs-5 text-white">
              We’re here to help you revolutionize your security and development practices with pioneering technology.
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Button onClick={() => navigate("/ContactUs")} variant="outline-secondary text-white" className="fs-4">
              Contact us
            </Button>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ color: "white" }} className="mt-5 mb-5" />

        {/* Bottom Section */}
        <Row className="text-start m-auto">
          <Col md={10}>
            <h4 className="text-white">Solutions</h4>
            <ul className="list-unstyled">
              <Link className="unstyled-link" to="/Solutions"><li className="text-white unstyled-link fs-5 ms-1">Jane AI</li></Link>
              <Link className="unstyled-link" to="/Solutions"><li className="text-white unstyled-link fs-5 ms-1">QuickScan Engine</li></Link>
              <Link className="unstyled-link" to="/Solutions"><li className="text-white unstyled-link fs-5 ms-1">Animate</li></Link>
            </ul>
          </Col>
          <Col md={1}>
            <h4 className="text-white">Company</h4>
            <ul className="list-unstyled">
              <Link className="unstyled-link" to='/About'><li className="text-white unstyled-link fs-5 ms-1">About</li></Link>
              <Link className="unstyled-link" to='/ContactUs'><li className="text-white unstyled-link fs-5 ms-1">Contact</li></Link>
            </ul>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ color: "white" }} className="mt-5 " />

        {/* Logo and Copyright */}
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={2} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <Link to="/"><img src="../images/header_logo.svg" alt="Eversoft Logo" className="footer-logo" style={{ maxHeight: "100px" }} /></Link>
          </Col>
          <Col xs={12} md={8} className="d-flex justify-content-center justify-content-md-center">
            <p className="mb-0 text-white">© 2024 Eversoft, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
