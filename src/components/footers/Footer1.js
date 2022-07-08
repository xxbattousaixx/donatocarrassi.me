import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Footer1() {
  return (
    <>
      <div className="section section-shaped no-tilt">
        <div className="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="subscribe-line">
       
        </div>
        <footer className="footer bg-transparent">
          <Container>
            <Row>
              
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Products</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Payments</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Billing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Connect</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Sigma</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Issuing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span>Terminal</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Resources</h4>
                  <ul>
                    <NavItem>
                      <a href="/contact-us">
                        Contact Us
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="/about-us">About Us</a>
                    </NavItem>
                    <NavItem>
                      <a href="/blog-posts">Blog</a>
                    </NavItem>
                    <NavItem>
                      <a href="https://opensource.org/licenses/MIT">License</a>
                    </NavItem>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Company</h4>
                  <ul>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Support
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Jobs
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Guides
                      </a>
                    </NavItem>
                    <NavItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Pricing
                      </a>
                    </NavItem>
                  </ul>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="column">
                  <h4 className="mt-3">Follow us:</h4>
                  <div className="btn-wrapper profile text-left">
                    <Button
                      color="twitter"
                      href="https://twitter.com"
                      id="tooltip799285778"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip799285778">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      color="facebook"
                      href="https://www.facebook.com"
                      id="tooltip33856223"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip33856223">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      color="slack"
                      href="https://dribbble.com"
                      id="tooltip521847749"
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip521847749">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </div>
                <li className="copyrights">© Document Essentials</li>

              </Col>
              
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default Footer1;
