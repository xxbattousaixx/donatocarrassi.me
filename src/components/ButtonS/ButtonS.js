/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line react/display-name */
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import React, { Component, useState } from "react";
import "./DemoBlock.css";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.js";
import ParticleEffectButton from "react-particle-effect-button";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import samplePDF from "../../assets/img/DAC2021CV.pdf";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  section: {
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document
    id="resume"
    file={samplePDF}
    options={{ workerSrc: "/public/pdf.worker.js" }}
  >
    <Page height={630} style={styles.page} pageNumber={1} />
  </Document>
);

export default class ButtonS extends Component {
  static propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonStyles: PropTypes.object.isRequired,
    buttonOptions: PropTypes.object.isRequired,
  };

  state = {
    hidden: false,
    animating: false,
    resume: false,
  };

  render() {
    const { background, buttonOptions } = this.props;

    const { hidden, animating, resume } = this.state;

    return (
      <>
        <div className="container fluid">
          <div className="buttons-div-container">
            <ParticleEffectButton
              hidden={hidden}
              onComplete={this._onAnimationComplete}
              {...buttonOptions}
            >
              <Button
                color="rose"
                size="lg"
                className="particle-effect-button"
                onClick={this._onToggle}
                round
              >
                WELCOME
              </Button>
            </ParticleEffectButton>
          </div>
          {resume && !animating && <MyDocument />}
        </div>
      </>
    );
  }

  _onToggle = () => {
    if (this.state.animating) return;

    this.setState({
      hidden: !this.state.hidden,
      animating: true,
    });
  };

  _onAnimationComplete = () => {
    this.setState({
      animating: false,
      hidden: true,
      resume: true,
    });
  };
}
