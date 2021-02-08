import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, GlobalStylesOverFlow } from "../theme/global";
import styles from "../theme/index.module.css";
import { lightTheme } from "../theme/theme";
import { useDarkMode } from "../theme/useDarkMode";
import { AuthContext } from "./Authprovider";
import Footer from "./Footer";
import Header from "./Header";
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
