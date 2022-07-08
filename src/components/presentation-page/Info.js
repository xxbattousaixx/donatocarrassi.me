import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Info() {
  return (
    <>
      <section className="section-info">
        <Container>
          <Row>
            <Col lg="4" md="6">
              <div className="info text-left">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                  <i className="ni ni-user-run"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary pl-0">
                Copier & Printer Sales, Leases and Rentals
                </h6>
                <p className="description opacity-8">
                Document Essentials serves the Baltimore MD and Washington DC area. We are a licensed dealer of Copiers, Laser Printers, Fax Machines and Multi Functional office equipment.
                </p>
                <Link className="text-primary" to="/blog-post">
                  Read More{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="info text-left" style={{ marginTop: "-50px" }}>
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                  <i className="ni ni-atom"></i>
                </div>
                <h6 className="info-title text-uppercase text-success pl-0">
                Got Toner?
                </h6>
                <p className="description opacity-8">
                We offer a full inventory of new compatible toner cartridges for your HP, Brother, Canon, Dell and other brands . Each cartridge is backed with our 100% quality guarantee as well as a warranty backed by our LOCAL service technicians.
                </p>
                <Link className="text-primary" to="http://order.documentessentials.com/Forms/Client/Common/HomePage.aspx">
                  Shop Online!{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="info text-left">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                  <i className="ni ni-istanbul"></i>
                </div>
                <h6 className="info-title text-uppercase text-warning pl-0">
                Copier & Printer Repairs and Service
                </h6>
                <p className="description opacity-8">
                Servicing all major brands of Copiers, Laser Printers, and Fax machines. You can drop your machine off at our office or we can send a Technician out to your office.
                </p>
                <a
                  className="text-primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Read More{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Info;
