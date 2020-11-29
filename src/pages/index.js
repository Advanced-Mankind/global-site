// App.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../theme/useDarkMode";
import { lightTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";
import Header from "../components/Header";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import Phone from "../svgs/phone";
import Email from "../svgs/email";
import styles from "../theme/index.module.css";
import Footer from "../components/footer";
import YourDreamCards from "../components/YourDreamCard/YourDreamsCard";
function App() {
  const [theme, componentMounted] = useDarkMode();

  //const themeMode = theme === "dark" ? lightTheme : darkTheme;
  const themeMode = theme === "dark" ? lightTheme : lightTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div className={`${styles.body} "container-fluid p-0"`}>
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Header />
        <div className="row align-items-center m-0">
          <div className="col col-sm-6 p-0">
            <div className={`${styles.leftContent}`}>
              <div className="row">
                <div className="col-12 mt-3">
                  <h1 className={styles.title}>
                    Sit tight we are working on it!{" "}
                  </h1>
                </div>
                <div className="col-12">
                  <p className={`${styles.subTitle} mb-0`}>

                    We can’ t wait to show you what we have created for our own
                    website, but we need a little more time. If you would like
                    to connect with us feel free to email or call and we will
                    get back to you shortly Stay safe!
                  </p>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <div className="row">
                  <Email />
                  <div className="col">
                    <a href="mailto:hello@advancedmankind.com" className={styles.subTitle}>
                      hello@advancedmankind.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <Phone />
                <div className="col">
                  <a href="tel:617 996 1338" className={styles.subTitle}>
                    (617) - 996 - 1338
                    </a>

                </div>
              </div>
            </div>
            <img
              className={styles.background_mobile}
              src={require("../../static/background_mobile.png")}
              alt=""
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
                <h1 className={styles.title40px} style={{ textAlign: "center" }}>Solving Your Digital Needs One Pixel at a Time</h1>
                <p className={styles.subTitle} style={{ textAlign: "center" }}>We are unique, like you. Here's how we deliver.</p>
              </div>
              <Row className="justify-content-between">
                <Col sm="12" md="4" lg="4" /*className={styles.backgroundred}*/>
                  <YourDreamCards
                    title="LOOK SHARP"
                    subtitle="Web Design & E-Commerce"
                    imgDesktop={require('../../static/shoppingBasketDesktop.png')}
                    imgTablet={require('../../static/shoppingBasketTablet.png')}
                    info="Driven by simplicity and creative problem solving, we desgin to align businesses and users."
                  />
                </Col>
                <Col sm="12" md="4" lg="4" /*className={styles.backgroundblue}*/>
                  <YourDreamCards
                    title="WORK SMART"
                    subtitle="AI, VR, & BOTS"
                    imgDesktop={require('../../static/webBrowserDesktop.png')}
                    imgTablet={require('../../static/webBrowserTablet.png')}
                    info="We push boundaries. It's how we're building AI products helping businesses of all sizes reach enterprise-level performance."
                  />
                </Col>
                <Col sm="12" md="4" lg="4" /*className={styles.backgroundgreen}*/>
                  <YourDreamCards
                    title="GROW FAST"
                    subtitle="Marketing & Branding"
                    imgDesktop={require('../../static/increaseArrowDesktop.png')}
                    imgTablet={require('../../static/increaseArrowTablet.png')}
                    info="Digital search, illustrations, ad creative-our growth tools create your's brand digital framework for performance."
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
