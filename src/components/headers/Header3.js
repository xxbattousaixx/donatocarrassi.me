import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// Core Components

function Header3() {
  React.useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();
  }, []);
  return (
    <>
      <header className="header-3 bg-dark">
        
        <div className="page-header header-filter">
          <div className="content-center">
            <Row>
          
              <Col md="12">
                <div className="glide">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/sections/broofoac.jpg").default}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/sections/austin.jpg").default}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/sections/unsplashs.jpg").default}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/sections/twk-tt.jpg").default}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/sections/pawel-nolbert.jpg").default}
                          width="450"
                        ></img>
                      </li>
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    <button
                      className="glide__arrow glide__arrow--left"
                      data-glide-dir="<"
                    >
                      <i className="ni ni-bold-left"></i>
                    </button>
                    <button
                      className="glide__arrow glide__arrow--right"
                      data-glide-dir=">"
                    >
                      <i className="ni ni-bold-right"></i>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header3;
