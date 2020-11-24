// App.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../theme/useDarkMode";
import { lightTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";
import MainHeader from "../components/MainHeader";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import styles from "../theme/index.module.css";
import MainPageCard from '../components/MainPageCard';
import Footer from "../components/footer";
import CaseStudyCard from "../components/CaseStudyCard";
import StartsWithWhy from "../components/StartsWithWhy";
import Partners from "../components/Partners";

const App = () => {
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
        <MainHeader />
        <div className="row align-items-center m-0">
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
                    We harness UX design principles with imaginative
                    problem solving to deliver tomorrow's digital
                    experiences. We inspire, innovate, and inform,
                    leaving mediocre and boring behind.
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
        <div className={styles.curveBackground}>
          <div className={styles.yourDreamContainer}>
            <h1>Solving Your Digital Needs One Pixel at a Time</h1>
            <p>We are unique, like you. Here's how we deliver.</p>
            <div className={styles.cardContainer}>
              <MainPageCard
                title="LOOK SHARP"
                subtitle="Web Design & E-Commerce"
                img={require('../../static/shopping_basket.png')}
                info="Driven by simplicity and creative problem solving, we desgin to align businesses and users."
              />
              <MainPageCard
                title="WORK SMART"
                subtitle="AI, VR, & BOTS"
                img={require('../../static/web_female.png')}
                info="We push boundaries. It's how we're building AI products helping businesses of all sizes reach enterprise-level performance."
              />
              <MainPageCard
                title="GROW FAST"
                subtitle="Marketing & Branding"
                img={require('../../static/increase_arrow.png')}
                info="Digital search, illustrations, ad creative-our growth tools create your's brand digital framework for performance."
              />
            </div>
          </div>
        </div>
        <div className={styles.caseStudiesSection}>
          <div className={styles.caseStudiesContainer}>
            <div>
              <CaseStudyCard width={555} height={631} imgs={[require('../../static/Image.png')]} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
              <CaseStudyCard width={555} height={303} imgs={[require('../../static/Moto_desktop.png')]} />
              <CaseStudyCard width={555} height={303} imgs={[require('../../static/Iphone 1.png'), require('../../static/Iphone 2.png'), require('../../static/Image_Laptop.png')]} />
            </div>
          </div>
        </div>
        <div className={styles.StartsWithWhySection}>
          <StartsWithWhy />
        </div>
        <div className={styles.PartnerSection}>
          <div className={styles.PartnerContainer}>
            <Partners imgs={[require('../../static/Hyundai.png'), require('../../static/Canon.png'), require('../../static/Motorola.png'), require('../../static/E.png'),
            require('../../static/ACS.png'),require('../../static/Core Logic.png'), require('../../static/Hyundai Copy.png'), require('../../static/Canon Copy.png')]} />
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;