import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/Footer3.js";
import ContactUs3 from "components/contact-us/ContactUs3.js";

const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#444444",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100,
              },
              {
                lightness: 45,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#C5CBF5",
              },
              {
                visibility: "on",
              },
            ],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs() {
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [lastNameFocus, setLastNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        <ContactUs3 />
        <div className="main">
          <Container fluid>
            <Row className="mt-5 mb-4 pt-5">
              <Col className="ml-auto mr-auto text-center mt-5" md="8">
                <Badge color="info">Leave a message</Badge>
                <h1 className="title">
                  Tell us more about <b>yourself</b>
                </h1>
                <h4 className="desc">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto" md="6">
                <Card
                  className="bg-secondary p-3"
                  id="contact-form"
                  method="post"
                  role="form"
                  tag="form"
                >
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <FormGroup className={firstNameFocus}>
                          <label>First name</label>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={() => setFirstNameFocus("focused")}
                              onBlur={() => setFirstNameFocus("")}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className={lastNameFocus}>
                          <label>Last name</label>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-tag"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              onFocus={() => setLastNameFocus("focused")}
                              onBlur={() => setLastNameFocus("")}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup className={emailFocus}>
                      <label>Email address</label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          onFocus={() => setEmailFocus("focused")}
                          onBlur={() => setEmailFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        className="form-control-alternative"
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <Row className="justify-content-end">
                      <Col className="text-right" md="6">
                        <Button color="primary" type="submit">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBspp4zh1cbU7jKihTkhFjo4rPkTYNlxAM"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              className="map skew-separator skew-top"
              id="map-contactus-3"
              style={{
                height: "500px",
                position: "relative",
                overflow: "hidden",
              }}
            />
          }
          mapElement={<div />}
        /> */}

<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900479.4260303846!2d-83.51405382615067!3d27.40805671871131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c337e69db2c22b%3A0xe335341d1d5715d9!2sSarasota%2C%20FL!5e0!3m2!1sen!2sus!4v1609108906889!5m2!1sen!2sus"
              height="300vh"
              width="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
        <DemoFooter />
      </div>
    </>
  );
}

export default ContactUs;
