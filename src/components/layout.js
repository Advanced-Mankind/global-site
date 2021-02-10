import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, GlobalStylesOverFlow } from "../theme/global";
import styles from "../theme/index.module.css";
import { lightTheme } from "../theme/theme";
import { useDarkMode } from "../theme/useDarkMode";
import { AuthContext } from "./Authprovider";
import Footer from "./Footer";
import Header from "./Header";
import CookieConsent from "react-cookie-consent";
import "./layout.css";
const Layout = ({ children }) => {
  const [theme] = useDarkMode();
  const [open, setOpen] = useState(false);
  const themeMode = theme === "dark" ? lightTheme : lightTheme;

  // useEffect(() => {
  //   if (isDesktopOrLaptop) setOpen(false);
  // }, [isDesktopOrLaptop]);
  return (
    <AuthContext>
      <ThemeProvider theme={themeMode}>
        <div className={`${styles.body} container-fluid p-0`}>
          <CookieConsent
            location="bottom"
            buttonText="ACCEPT COOKIES"
            cookieName="myAwesomeCookieName2"
            contentStyle={{
              flex: "unset",
              margin: "15px",
              color: "rgba(34,43,69,1)",
              fontFamily: "Open Sans",
              fontSize: "15px",
              letterSpacing: "0",
              lineHeight: "20px",
              width: "100%",
            }}
            style={{
              padding: "40px",
              zIndex: "50000",
              width: "90%",
              margin: "5vw",
              border: "1px solid rgba(251,251,251,1)",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,1)",
              boxShadow: " 0 10px 20px 0 rgba(35,35,35,0.08)",
            }}
            buttonStyle={{
              padding: " 16px 24px",
              borderRadius: "34px",
              backgroundColor: "rgba(51,51,255,1)",
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "0",
              lineHeight: "24px",
              textAlign: "center",
            }}
            expires={150}
          >
            <p
              style={{
                width: "100%",
                display: "block",
                color: "rgba(34,43,69,1)",
                fontFamily: "Open Sans",
                fontSize: "22px",
                fontWeight: "bold",
                letterSpacing: "0",
                lineHeight: "32px",
              }}
            >
              Cookies
            </p>
            We use cookies to make your experience better. Please accept cookies
            for optimal performance.
          </CookieConsent>
          {open ? <GlobalStylesOverFlow /> : <GlobalStyles />}
          <Header open={open} setOpen={setOpen}></Header>
          {children}
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </AuthContext>
  );
};

export default Layout;
