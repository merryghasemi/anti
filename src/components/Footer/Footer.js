import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">About us</Nav.Link>
              <Nav.Link href="#" className="text-light">Careers</Nav.Link>
              <Nav.Link href="#" className="text-light">Press</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Community</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">Blog</Nav.Link>
              <Nav.Link href="#" className="text-light">Forum</Nav.Link>
              <Nav.Link href="#" className="text-light">Support</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Legal</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">Terms of use</Nav.Link>
              <Nav.Link href="#" className="text-light">Privacy policy</Nav.Link>
              <Nav.Link href="#" className="text-light">Cookie policy</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Follow us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-facebook-f me-2"></i>Facebook
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-twitter me-2"></i>Twitter
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-instagram me-2"></i>Instagram
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-linkedin-in me-2"></i>LinkedIn
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Freepik Company S.L. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-end">
              <Nav.Link href="#" className="text-light">Site Map</Nav.Link>
              <Nav.Link href="#" className="text-light">License</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
