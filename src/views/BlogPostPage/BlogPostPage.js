/*eslint-disable*/ 
import React, { useState, useEffect, useRef } from 'react';
import { usePdf } from 'react-pdf-js';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionText from "./Sections/SectionText.js";
import SectionBlogInfo from "./Sections/SectionBlogInfo.js";
import SectionComments from "./Sections/SectionComments.js";
import SectionSimilarStories from "./Sections/SectionSimilarStories.js";
import file from '../../assets/img/DAC2021CV.pdf'
import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  return (
    <div>
      <Header
        brand="DC7"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "rose",
        }}
      />
      <Parallax image={require("assets/img/bg2.jpg").default} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                Donato Carrassi
              </h1>
              <h4 className={classes.subtitle}>
               Web & App Developer
              </h4>
              <br />
              <Button color="rose" size="lg" round>
                <FormatAlignLeft /> WELCOME
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>




        <div className={classes.container}>
          
        </div>
      </div>
      <SectionSimilarStories />
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
              <a
                href="https://www.donatocarrassi.me"
                target="_blank"
              >
                DC7
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
