import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../theme/useDarkMode";
import { lightTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import styles from "../theme/index.module.css";
import Footer from "../components/footer";
function MessageError() {
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
                <img
                  className={styles.logoOops}
                  src={require("../../static/oops.png")}
                  alt=""
                />
                <div className="col-12">
                  <h1 className={styles.titleError}>That's no good! </h1>
                </div>
                <div className="col-10">
                  <p className={`${styles.subTitle}`}>
                    We are going to send you back to a safe space where things
                    don't wilt or die.
                  </p>
                </div>
                <button
                  className={styles.buttonError}
                  onClick={() => {
                    console.log("onClick en el button");
                  }}
                >
                  <span className={styles.buttonTitle}>GO BACK HOME </span>
                </button>
              </div>
            </div>
            <img
              className={styles.background_mobile}
              src={require("../../static/messageError.png")}
              alt=""
            />
          </div>

          <div className="d-none d-sm-block col-sm-12 p-0 align-self-end">
            <img
              src={require("../../static/messageError.png")}
              className={styles.background_tablet}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default MessageError;
