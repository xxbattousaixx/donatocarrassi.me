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
import Particles from "components/Particles.js";

import nirvana from "assets/img/nirvana.png";
import bape from "assets/img/bape.png";
import topdown from "assets/img/topdown.png";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

export default function SectionSimilarStories() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Particles />

      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              PORTFOLIO WEBSITES
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
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
                      This website is built with React.js and serves as referral
                      hub for Tampa Bay company.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://docessentials.netlify.app">
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
                      <h6>Document Essentials</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="https://docessentials.netlify.app">
                        Document Essentials
                      </a>
                    </h4>
                    <p className={classes.description}>Website sample</p>
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
                    <a href="https://bandananirvana.com">
                      <img src={nirvana} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + nirvana + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Muted>
                      <h6>BANDANA NIRVANA</h6>
                    </Muted>
                    <h4 className={classes.cardTitle}>
                      <a href="https://bandananirvana.com">dc-dj</a>
                    </h4>
                    <p className={classes.description}>
                      Page showing authentication, storage, and page structure
                      for simple projects
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
                      <h6>Testing App sample</h6>
                    </Primary>
                    <h4 className={classes.cardTitle}>
                      <a href="https://dc7-test.netlify.app">dc7-test</a>
                    </h4>
                    <p className={classes.description}>
                      {/* Web app built using VUE and TailwindCC */}
                      Web app built using React that allows for a user to take
                      an accounting assessment given JSON input.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={4} md={4}>
            <Card blog>
              <CardHeader image>
                <a href="https://topdownrv.netlify.app">
                  <img src={topdown} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: "url(" + topdown + ")",
                    opacity: "1",
                  }}
                />
              </CardHeader>
              <CardBody>
                <Danger>
                  <h6>
                    <TrendingUp /> Top-Down RV
                  </h6>
                </Danger>
                <h4 className={classes.cardTitle}>
                  <a href="https://topdownrv.netlify.app">Top-Down RV</a>
                </h4>
                <p className={classes.description}>Sample site</p>
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
                  <h6>PRESTO.IT</h6>
                </Danger>
                <h4 className={classes.cardTitle}>
                  <a href="https://dc7project.xyz">dc7project.xyz</a>
                </h4>
                <p className={classes.description}>
                  Classifieds website built with Laravel as 3-month bootcamp
                  project -- currently down
                </p>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4}>
            <Card blog>
              <CardHeader image>
                <a href="https://hackademy-30.gitlab.io/directory-donato-carrassi/">
                  <img src={bape} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: "url(" + bape + ")",
                    opacity: "1",
                  }}
                />
              </CardHeader>
              <CardBody>
                <Danger>
                  <h6>
                    <TrendingUp /> Phone directory app (vanilla js)
                  </h6>
                </Danger>
                <h4 className={classes.cardTitle}>
                  <a href="https://hackademy-30.gitlab.io/directory-donato-carrassi/">
                    Phone directory
                  </a>
                </h4>
                <p className={classes.description}>
                  Sample app that could be implemented into any website.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
