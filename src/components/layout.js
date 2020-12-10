import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/global";
import styles from "../theme/index.module.css";
import { lightTheme } from "../theme/theme";
import { useDarkMode } from "../theme/useDarkMode";
import { AuthContext } from "../utils/Authprovider";
import Header from "./Header";
export default function Layout({ children }) {
  const [theme, componentMounted] = useDarkMode();

  const themeMode = theme === "dark" ? lightTheme : lightTheme;
  console.log(theme);
  if (!componentMounted) {
    return <div />;
  }

  return (
    <AuthContext>
      <ThemeProvider theme={themeMode}>
        <div className={`${styles.body} "container-fluid p-0"`}>
          <GlobalStyles />
          <Header></Header>
          {children}
        </div>
      </ThemeProvider>
    </AuthContext>
  );
}
