// global.js\
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
  scroll-behavior: smooth;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} ;
    transition: all 0.25s linear;
    padding: 0px;
    padding-bottom:13vh;
    min-height: 83vh;
    font-family: 'Open Sans', sans-serif;
    max-width: 100vw;
    overflow-x: hidden; 
    
  }
  .title {
    color: ${({ theme }) => theme.title} ;
}
  `;

export const GlobalStylesOverFlow = createGlobalStyle`
  html {
  scroll-behavior: smooth;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} ;
    transition: all 0.25s linear;
    padding: 0px;
    padding-bottom:13vh;
    min-height: 83vh;
    font-family: 'Open Sans', sans-serif;
    max-width: 100vw;
    overflow: hidden; 
  }
  .title {
    color: ${({ theme }) => theme.title} ;
}
  `;
