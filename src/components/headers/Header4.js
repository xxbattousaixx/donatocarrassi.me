import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";
import BannerExample from "components/BannerExample";
let src = require('../../assets/videos/Lights - 26607.mp4');
function Header4() {
  return (
    <>
      <header className="header-4 skew-separator">
        <div className="header-wrapper">
          
          <div className="page-header header-video">
            <div className="overlay"></div>
            <video
              autoPlay="autoPlay"
              loop="loop"
              muted="muted"
              playsInline="playsInline"
            >
              <source
                src={src.default}
                type="video/mp4"
              ></source>
            </video>

            <Container style={{width:'100%'}} className="text-center">
          <BannerExample/>

            </Container>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header4;
