import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Header1() {
  return (
    <>

      <header>
     
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/black.jpg").default + ")",
            }}
          ></div>
          <Container>
            <Row>
              <Col
                className="mr-auto text-left d-flex justify-content-center flex-column"
                lg="5"
                md="7"
              >
                <h1 className="display-3 text-danger">Document Essentials</h1>
                <p className="mt-0 text-warning" style={{fontWeight:"bold", fontFamily:"monospace"}}>
                Since 1992, Document Essentials has been a leading supplier of copiers, facsimiles, and laser printers within the Baltimore Metropolitan Area.
                </p>
                <br></br>
                <div className="buttons">
                  <Button
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Reserve a Time Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header1;
