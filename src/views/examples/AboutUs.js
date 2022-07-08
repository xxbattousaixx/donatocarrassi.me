import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import Header5 from "components/headers/Header5.js";
import Blogs6 from "components/blogs/Blogs6.js";

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <DemoNavbar type="primary" />
      <div className="wrapper">
        <Header5 />
        <Blogs6 />
        <DemoFooter />
      </div>
    </>
  );
}

export default AboutUs;
