// App.js
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GlobalStyles } from "../theme/global";
import styles from "../theme/index.module.css";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";
import GetStarted from "./GetStarted/GetStarted";
import HaveAChallenge from "./HaveAChallenge/HaveAChallenge";
import StartsWithWhy from "./StartsWithWhy/StartsWithWhy";
import YourDreamCards from "./YourDreamCard/YourDreamsCard";
// import Partners from "../components/Partners/Partners";
// import WereHiring from "../components/WereHiring/WereHiring";

// Esta es la linea que hay que copiar en la parte de los partners linea 134
// <Partners imgs={[require('../../static/Hyundai.png'), require('../../static/Canon.png'), require('../../static/Motorola.png'), require('../../static/ACS.png'),
//           require('../../static/E.png'), require('../../static/coreLogic.png'), require('../../static/coxmedia.png'), require('../../static/chedrahui.png')]} />

export default function Home() {
  return (
    <div className={`${styles.body} "container-fluid p-0"`}>
      <GlobalStyles />
      {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      <div className="row align-items-center m-0 ">
        <div className="col col-sm-6 p-0">
          <div className={`${styles.leftContent}`}>
            <div className={styles.titleContainer}>
              <div className="col-12 mt-3">
                <h1 className={styles.title}>
                  We deliver tranformative interfaces{" "}
                </h1>
              </div>
              <div className="col-12">
                <p className={`${styles.subTitle} mb-0`}>
                  We harness UX design principles with imaginative problem
                  solving to deliver tomorrow's digital experiences. We inspire,
                  innovate, and inform, leaving mediocre and boring behind.
                </p>
              </div>
            </div>
          </div>
          <img
            className={styles.background_mobile}
            src={require("../../static/background_mobile.png")}
            alt="backgroundImage"
          />
        </div>
        <div className="d-none d-sm-block col-sm-6 p-0 align-self-end">
          <img
            src={require("../../static/background.png")}
            className={styles.background_tablet}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className={styles.curveBackground}>
          <Container>
            <div>
              <h1 className={styles.title40px} style={{ textAlign: "center" }}>
                Solving Your Digital Needs One Pixel at a Time
              </h1>
              <p className={styles.subTitle} style={{ textAlign: "center" }}>
                We are unique, like you. Here's how we deliver.
              </p>
            </div>
            <Row className="justify-content-between">
              <Col sm="12" md="4" lg="4" /*className={styles.backgroundred}*/>
                <YourDreamCards
                  title="LOOK SHARP"
                  subtitle="Web Design & E-Commerce"
                  imgDesktop={require("../../static/shoppingBasketDesktop.png")}
                  imgTablet={require("../../static/shoppingBasketTablet.png")}
                  info="Driven by simplicity and creative problem solving, we desgin to align businesses and users."
                />
              </Col>
              <Col sm="12" md="4" lg="4" /*className={styles.backgroundblue}*/>
                <YourDreamCards
                  title="WORK SMART"
                  subtitle="AI, VR, & BOTS"
                  imgDesktop={require("../../static/webBrowserDesktop.png")}
                  imgTablet={require("../../static/webBrowserTablet.png")}
                  info="We push boundaries. It's how we're building AI products helping businesses of all sizes reach enterprise-level performance."
                />
              </Col>
              <Col sm="12" md="4" lg="4" /*className={styles.backgroundgreen}*/>
                <YourDreamCards
                  title="GROW FAST"
                  subtitle="Marketing & Branding"
                  imgDesktop={require("../../static/increaseArrowDesktop.png")}
                  imgTablet={require("../../static/increaseArrowTablet.png")}
                  info="Digital search, illustrations, ad creative-our growth tools create your's brand digital framework for performance."
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Container>
            <Row className="justify-content-evenly">
              <Col sm="12" md="6" lg="6">
                <CaseStudyCard
                  imgsDesktop={[
                    require("../../static/ImageChedrahuiDesktop.png"),
                  ]}
                  imgsTablet={[
                    require("../../static/imageChedrahuiTablet.png"),
                  ]}
                />
              </Col>
              <Col sm="12" md="6" lg="6" className="justify-content-center">
                <Row className="justify-content-center">
                  <Col sm="12" md="6" lg="12">
                    <CaseStudyCard
                      imgsDesktop={[require("../../static/motoDesktop.png")]}
                      imgsTablet={[require("../../static/motoTablet.png")]}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col sm="12" md="6" lg="12">
                    <CaseStudyCard
                      imgsDesktop={[
                        require("../../static/phone1.png"),
                        require("../../static/phone2.png"),
                        require("../../static/laptopImageDesktop.png"),
                      ]}
                      imgsTablet={[
                        require("../../static/phone1Tablet.png"),
                        require("../../static/phone2Tablet.png"),
                        require("../../static/laptopImageTablet.png"),
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: "5%" }}>
          <StartsWithWhy />
        </div>
        <div style={{ marginTop: "5%" }}>
          <Container>
            <Row className="justify-content-center">
              <h1 className={styles.title32px}>Simple, smart, stellar work.</h1>
              <p className={styles.subTitle}>
                Our formula isn’t complicated. Design Sprints + Lean Startup
                Methodology = Making Digital Dreams a Reality.
              </p>
            </Row>
            <Row>
              <Col sm="12" md="4" lg="4">
                <HaveAChallenge
                  icon={require("../../static/people.png")}
                  caption={"Emotional"}
                  headline={"Audience Connection"}
                  paragraph={
                    "We know the critical importance of tapping into your own brand ambassadors. Let’s focus on the intrinsic values that make people care about your brand."
                  }
                />
              </Col>
              <Col sm="12" md="4" lg="4">
                <HaveAChallenge
                  icon={require("../../static/browser.png")}
                  caption={"Adaptable"}
                  headline={"Tomorrow’s Tech"}
                  paragraph={
                    "We are passionate about leveraging future-ready technology stacks for adaptable, agile e-commerce capabilities."
                  }
                />
              </Col>
              <Col sm="12" md="4" lg="4">
                <HaveAChallenge
                  icon={require("../../static/award.png")}
                  caption={"Exceptional"}
                  headline={"Game-changing Results"}
                  paragraph={
                    "We are driven by the goal of building new experiences that users care about and that create brand value for our partners."
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: "5%" }}>
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
