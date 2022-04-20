/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import { Form } from "reactstrap";
import contactUsStyle from "../../assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const CustomSkinMap = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "27.9772";
    let lng = "-82.5311";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 10,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            { hue: "#ff0000" },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }],
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "DC7",
    });

    const contentString =
      '<div class="info-window-content"><h2>Donato Carrassi</h2>' +
      "<p>Developer</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div
        style={{ height: `100%`, borderRadius: "6px", overflow: "hidden" }}
        ref={mapRef}
      ></div>
    </>
  );
};

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="DC7"
        links={<HeaderLinks dropdownHoverColor="primary" />}
        fixed
        color="primary"
      />
      <div className={classes.bigMap}>
        <CustomSkinMap />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send a message</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p>
                  Send your inquiries my way.
                  <br />
                  <br />I{"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <Form
                  action="https://postmail.invotes.com/send"
                  method="post"
                  id="email_form"
                >
                  <CustomInput
                    labelText="Your Name"
                    name="subject"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    name="text"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    name="extra_Phone"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    name="extra_Message"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                    }}
                  />
                  <div className={classes.textCenter}>
                    <input
                      type="hidden"
                      name="access_token"
                      value="63yiwt3vt3p7kwh8m7zcdmd0"
                    />

                    <input
                      type="hidden"
                      name="success_url"
                      value=".?message=Email+Successfully+Sent%21&isError=0"
                    />
                    <input
                      type="hidden"
                      name="error_url"
                      value=".?message=Email+could+not+be+sent.&isError=1"
                    />

                    <Button
                      id="submit_form"
                      type="submit"
                      value="Send"
                      color="primary"
                      round
                    >
                      Contact me
                    </Button>
                  </div>
                </Form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Find me online"
                  description={
                    <p>
                      dcarrassi@outlook.com <br /> Tampa Bay, Florida
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Give me a ring/text"
                  description={
                    <p>
                      Donato Carrassi <br /> +1 813 336 2514 <br /> Mon - Fri,
                      18:00-22:00
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.donatocarrassi.me"
                    target="_blank"
                    className={classes.block}
                  >
                    DC7 -- Donato Carrassi
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a href="https://www.donatocarrassi.me" target="_blank">
                DC7
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
