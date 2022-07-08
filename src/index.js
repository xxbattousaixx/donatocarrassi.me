/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
require("path");

import React from "react";
import { render } from 'react-snapshot';

import { Router, Route, Switch } from "react-router";
import "./assets/scss/material-kit-pro-react.scss";

// pages for this product
import BlogPostPage from "./views/BlogPostPage/BlogPostPage.js";
import ContactUsPage from "./views/ContactUsPage/ContactUsPage.js";
import PresentationPage from "./views/PresentationPage/PresentationPage.js";
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

// import "main.scss";
render(
  <Router history={hist}>
    <Switch>
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
