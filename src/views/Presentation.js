import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";
import BannerExample from "components/BannerExample";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/Footer1.js";
import Header1 from "components/headers/Header1.js";
// Sections for this page
import Info from "components/presentation-page/Info.js";
import { Container, Button, Link } from "react-floating-action-button";

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  });
  return (
    <>
      <DemoNavbar type="white" />
      <div className="wrapper">
      
        <Header1 />
        <Info/>
        <BannerExample/>
        <Container>
          <Link
            href="/contact-us"
            tooltip="Book online"
            icon="far fa-sticky-note"
          />
          <Link href="/contact-us" tooltip="Request Service" icon="fas fa-user-plus" />
          <Button
            tooltip="Get in Touch!"
            icon="fas fa-plus"
            rotate={true}
            onClick={() => alert("Call Us or Book Online")}
          />
        </Container>
        <DemoFooter />
      </div>
    </>
  );
}

export default Presentation;
