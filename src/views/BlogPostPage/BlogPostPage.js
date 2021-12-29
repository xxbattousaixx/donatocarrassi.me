/*eslint-disable*/ 

import React, { useState, useEffect, useRef } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ButtonS from "components/ButtonS/ButtonS.js"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SectionSimilarStories from "./Sections/SectionSimilarStories.js";
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
            
            <GridItem sm={11} md={11} lg={11} className={classes.textCenter}>
              <h2 className={classes.title}>
                Donato Carrassi
              </h2>
              
              <h4 className={classes.subtitle}>
               Web & App Development
              </h4>
            </GridItem>
            <br/>
<GridItem sm={10} md={10} lg={10} className={classes.textCenter}>
  <ButtonS/>
</GridItem>


       
          </GridContainer>

        </div>
        <br/>
        <br/>
        <br/>

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
