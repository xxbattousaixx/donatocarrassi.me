/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Favorite from "@material-ui/icons/Favorite";

// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";

import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="DC7"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/splah.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} sm={8}>
              <h3 className={classNames(classes.main, classes.mainRaised)}>
                <br></br>
                &nbsp;&nbsp; Welcome to your Developer Hub &nbsp;-- &nbsp;&nbsp;
                a solution is waiting.
                <br></br>
                <br></br>
                <center>
                  <Button
                    target="_blank"
                    href="https://www.github.com/xxbattousaixx"
                    justIcon
                    round
                    color="github"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <Button
                    href="https://wa.me/19417302405"
                    justIcon
                    round
                    color="whatsapp"
                  >
                    <i className="fab fa-whatsapp" />
                  </Button>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <Button
                    target="_blank"
                    href="https://www.facebook.com/donato.a.carrassi"
                    justIcon
                    round
                    color="facebook"
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <Button
                    target="_blank"
                    href="https://www.instagram.com/donatoacarrassi/"
                    justIcon
                    round
                    color="instagram"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <br></br>
                  <br></br>
                </center>
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
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
