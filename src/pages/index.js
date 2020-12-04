// // App.js
// import React from "react";
// import { ThemeProvider } from "styled-components";
// import { useDarkMode } from "../theme/useDarkMode";
// import { lightTheme } from "../theme/theme";
// import { GlobalStyles } from "../theme/global";
// import Header from "../components/Header";
// import "bootstrap/dist/css/bootstrap.css";
// import "normalize.css";
// import Phone from "../svgs/phone";
// import Email from "../svgs/email";
// import styles from "../theme/index.module.css";
// import Footer from "../components/footer";
// function App() {
//   const [theme, componentMounted] = useDarkMode();

//   //const themeMode = theme === "dark" ? lightTheme : darkTheme;
//   const themeMode = theme === "dark" ? lightTheme : lightTheme;
//   if (!componentMounted) {
//     return <div />;
//   }

//   return (
//     <ThemeProvider theme={themeMode}>
//       <div className={`${styles.body} "container-fluid p-0"`}>
//         <GlobalStyles />
//         {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
//         <Header />
//         <div className="row align-items-center m-0">
//           <div className="col col-sm-6 p-0">
//             <div className={`${styles.leftContent}`}>
//               <div className="row">
//                 <div className="col-12 mt-3">
//                   <h1 className={styles.title}>
//                     Sit tight we are working on it!{" "}
//                   </h1>
//                 </div>
//                 <div className="col-12">
//                   <p className={`${styles.subTitle} mb-0`}>

//                     We can’ t wait to show you what we have created for our own
//                     website, but we need a little more time. If you would like
//                     to connect with us feel free to email or call and we will
//                     get back to you shortly Stay safe!
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-4 mb-4">
//                 <div className="row">
//                   <Email />
//                   <div className="col">
//                     <a href="mailto:hello@advancedmankind.com" className={styles.subTitle}>
//                       hello@advancedmankind.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <Phone />
//                 <div className="col">
//                 <a href="tel:617 996 1338" className={styles.subTitle}>
//                 (617) - 996 - 1338
//                     </a>

//                 </div>
//               </div>
//             </div>
//             <img
//               className={styles.background_mobile}
//               src={require("../../static/background_mobile.png")}
//               alt=""
//             />
//           </div>

//           <div className="d-none d-sm-block col-sm-6 p-0 align-self-end">
//             <img
//               src={require("../../static/background.png")}
//               className={styles.background_tablet}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default App;

// App.js
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
            <div className={`${styles.content}`}>
              <div className="row">
                <img
                  className={styles.logoOops}
                  src={require("../../static/oops.png")}
                  alt=""
                />
                <div className="col-12">
                  <h1 className={styles.titleError}>That's no good! </h1>
                </div>
                <div className="col-8 col-xl-10">
                  <p className={`${styles.subTitle}`}>
                    We are going to send you back to a safe space where things
                    don't wilt or die.
                  </p>
                </div>
                <div className="col-8 col-xl-10">
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
            </div>
            <img
              className={styles.img_mobile}
              src={require("../../static/messageError.png")}
              alt=""
            />
            <img
              className={styles.curva_mobile}
              src={require("../../static/curveBackground.png")}
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

export default App;
