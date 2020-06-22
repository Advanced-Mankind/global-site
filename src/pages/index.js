// App.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../theme/useDarkMode";
import { lightTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import Phone from "../svgs/phone";
import Email from "../svgs/email";
import styles from "../theme/index.module.css";
import Footer from "../components/footer";
function App() {
  const [theme, componentMounted] = useDarkMode();

  //const themeMode = theme === "dark" ? lightTheme : darkTheme;
  const themeMode = theme === "dark" ? lightTheme : lightTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div className="container p-0">
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Header> </Header>
        <div className="row">
          <div className="col-12 col-sm-6">
            
            <div className='px-3'>
            <div className="row">
              <div className="col-12 mt-5">
                <h1 className={styles.title}>
                  Sit tight we are working on it!{" "}
                </h1>
              </div>
              <div className="col-12">
                <p className={(styles.subTitle, "mb-0")}>
                  We can’ t wait to show you what we have created for our own
                  website, but we need a little more time.If you would like to
                  connect with us feel free to email or call and we will get
                  back to you shortly!Stay safe!
                </p>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div className="row">
                <Phone />
                <div className="col">
                  <span className={styles.subTitle}>
                    hello @advancedmankind.com{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <Email />
              <div className="col">
                <span className={styles.subTitle}>
                  (617) - 996 - 1338 x 0001
                </span>
              </div>
            </div>
            </div>
            <img className={styles.background_mobile} src={require('../../static/background_mobile.png')} alt='' />
          </div>

          <div className="d-none d-sm-block col-6">
            <img src={require("../../static/background.png")} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
