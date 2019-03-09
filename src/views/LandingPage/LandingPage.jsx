import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import AboutSection from "./Sections/AboutSection.jsx";
//import ProductSection from "./Sections/ProductSection.jsx";
//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";
/*
<ProductSection />
<TeamSection />
<WorkSection />
*/
const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="primary"
          routes={dashboardRoutes}
          brand="Hope Mediation, LLC"
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />
        <Parallax filter image={require("assets/img/0119_Logo_HopeMediation.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                  <h1 className={classes.title}>Hope Mediation</h1>
                  <h3 className={classes.subtitle}>
                    Under Construction, Call 217-414-1503 or <a mailto="hopemediationllc@gmail.com">email Leigh</a> for more information.
                  </h3>
              </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
