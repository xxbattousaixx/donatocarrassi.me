/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";

import blog6 from "assets/img/solafide.png";
import blog8 from "assets/img/dc7notes.png";
import blog7 from "assets/img/presto.png";
import blog1 from "assets/img/vanlife.png";
import blog2 from "assets/img/reclique.png";
import blog3 from "assets/img/dj.png";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

export default function SectionSimilarStories() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              PORTFOLIO WEBSITES
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://solafide-services.com">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>SOLAFIDE-SERVICES</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="https://solafide-services.com">
                        solafide-services.com
                      </a>
                    </h4>
                    <p className={classes.description}>
                      This website is built with a React.js and serves as
                      referral hub for Tampa Bay company.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://dc7-notes.netlify.app">
                      <img src={blog8} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog8 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>DC7-NOTES</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="https://dc7-notes.netlify.app">dc7-notes</a>
                    </h4>
                    <p className={classes.description}>
                      Simple web app built using AWS that allows authentication
                      and stores user notes.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://dc7project.xyz">
                      <img src={blog7} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog7 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Danger>
                      <h6>
                        <TrendingUp /> PRESTO.IT
                      </h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a href="https://dc7project.xyz">dc7project.xyz</a>
                    </h4>
                    <p className={classes.description}>
                      Classifieds website built with Laravel -- functions in
                      three languages.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://myvanmyworld.netlify.app">
                      <img src={blog1} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Warning>
                      <h6>My Van My World</h6>
                    </Warning>
                    <h4 className={classes.cardTitle}>
                      <a href="https://myvanmyworld.netlify.app">
                        myvanmyworld
                      </a>
                    </h4>
                    <p className={classes.description}>
                      This website is built with a React.js and serves as
                      referral hub for a couple that remodels vans into living
                      spaces.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://dc7-test.netlify.app">
                      <img src={blog2} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog8 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Primary>
                      <h6>Testing Assignment</h6>
                    </Primary>
                    <h4 className={classes.cardTitle}>
                      <a href="https://dc7-test.netlify.app">dc7-test</a>
                    </h4>
                    <p className={classes.description}>
                      {/* Web app built using VUE and TailwindCC */}
                      Web app built using React that allows for a user to take
                      an accounting assesment. The questions are hosted
                      elsewhere in JSON format, and the app cross-references
                      your input to possible answers.{" "}
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://dc-dj.netlify.app">
                      <img src={blog3} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog7 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Muted>
                      <h6>Template Project</h6>
                    </Muted>
                    <h4 className={classes.cardTitle}>
                      <a href="https://dc-dj.netlify.app">dc-dj</a>
                    </h4>
                    <p className={classes.description}>
                      Sample showing authentication, storage, and page structure
                      for simple projects
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
