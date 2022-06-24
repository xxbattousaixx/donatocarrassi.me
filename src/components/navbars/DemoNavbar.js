import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>

      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >

        <Container>
          
          <NavbarBrand className="mr-lg-5" to="/index" tag={Link}>
            <img alt="..." src="https://tinyimg.io/i/wjywBtH.png"></img>
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src="https://tinyimg.io/i/wjywBtH.png"
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
               <DropdownToggle
                  data-toggle="dropdown"
                  href="/presentation"
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">HOME</span>
                </DropdownToggle>
              <UncontrolledDropdown nav>
             
                <DropdownToggle
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">ABOUT</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      to="/about-us"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-spaceship"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          About Document Essentials
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how we came to be and what we strive for.
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      to="/blog-posts"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-palette"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Our Blog
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          For  up-to-date information regarding our products and services.
                        </p>
                      </Media>
                    </Media>
                  </div>
                  <div className="dropdown-menu-footer">
                    <DropdownItem href="/blog-post">
                      <i className="ni ni-atom"></i> Docuware Products News Blog
                    </DropdownItem>
                    <DropdownItem href="error-500">
                      <i className="ni ni-ui-04"></i> Social 
                    </DropdownItem>
                    
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
             
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-app d-lg-none"></i>
                  <span className="nav-link-inner--text">PRODUCTS</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem tag={Link} to="/error-500">
                    <i className="ni ni-album-2 text-info"></i>
                    Copiers and Printers
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/error-500">
                    <i className="ni ni-settings text-danger"></i>
                    Copier and Printer Supplies
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/error-500">
                    <i className="ni ni-align-left-2 text-primary"></i>
                    MICR Toner Cartridges
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-tablet-button d-lg-none"></i>
                  <span className="nav-link-inner--text">SOLUTIONS</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/account-settings" tag={Link}>
                    <i className="ni ni-lock-circle-open text-muted"></i>
                    Copier & Printer Repairs and Service
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="ni ni-tv-2 text-danger"></i>
                    Toner Cartridge Delivery Service
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="ni ni-air-baloon text-pink"></i>
                    Service Contracts / Extended Warranties
                  </DropdownItem>
                  <DropdownItem to="/reset-page" tag={Link}>
                    <i className="ni ni-atom text-info"></i>
                    Document Management
                  </DropdownItem>
                  <DropdownItem to="/invoice-page" tag={Link}>
                    <i className="ni ni-bullet-list-67 text-success"></i>
                  Print Management
                  </DropdownItem>
                
                </DropdownMenu>
              </UncontrolledDropdown>
              <DropdownToggle
                  data-toggle="dropdown"
                  href="http://order.documentessentials.com/Forms/Client/Common/HomePage.aspx"
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">ORDER SUPPLIES</span>
                </DropdownToggle>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-single-copy-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">CONTACT US</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="ni ni-tie-bow text-warning"></i>
                    Service Request
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="ni ni-box-2 text-info"></i>
                    Request a quote
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
           
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "white",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
