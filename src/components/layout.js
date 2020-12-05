import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/global";
import { lightTheme } from "../theme/theme";
import { useDarkMode } from "../theme/useDarkMode";
import { AuthContext } from "../utils/AuthProvider";
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
        <GlobalStyles />
        <Header></Header>
        {children}
      </ThemeProvider>
    </AuthContext>
  );
}
