import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              My name is Donato Carrassi and I am a developer -- your solution
              is just waiting to be created.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Web Design"
                description="Create websites with a range of functionalities. Design to your specification utlizing all new technologies. Available for support, maintenance, and upgrades to all services. Work from scratch or starting with a template specific to your needs -- once you have selected your starting point and basic requirements you will watch your site take shape. Comfortable with cloud services and have experience working with APIs. Laravel, React.js & Vue.js experience. "
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="App Development"
                description="Release a marketplace application for web or mobile platform. Visually impressive designs and UI/UX for different practical needs. Scalable architecture for growing enterprises for highly sustainable operations. Full stack development capacity. Most proficient with React Native, able to keep user up-to-date with their application on their own device."
                icon={ViewDay}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="IT technical support"
                description="Solving technology problems daily. Services from consultation to on-site services. Remote capabilities. CompTIA certified with A+, Network+, Security+, Cloud+"
                icon={ViewCarousel}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
