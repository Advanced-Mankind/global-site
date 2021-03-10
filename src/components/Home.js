// App.js
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "gatsby";
import "normalize.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import Partners from "../components/Partners/Partners";
import styles from "../theme/index.module.css";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";
import GetStarted from "./GetStarted/GetStarted";
import HaveAChallenge from "./HaveAChallenge/HaveAChallenge";
import StartsWithWhy from "./StartsWithWhy/StartsWithWhy";
import WereHirin from "./WereHiring/WereHiring";
import YourDreamCards from "./YourDreamCard/YourDreamsCard";
// Esta es la linea que hay que copiar en la parte de los partners linea 134

export default function Home() {
  // const DesktopImg = ({ children }) => {
  //   const isDesktop = useMediaQuery({ minWidth: 992 });
  //   return isDesktop ? children : null;
  // };
  // const TabletImg = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  //   return isTablet ? children : null;
  // };
  // const MobileImg = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  //   return isMobile ? children : null;
  // };
  const messagesEndRef = React.useRef();
  const scrollToBottom = () => {
    console.log(messagesEndRef);
    messagesEndRef &&
      messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const data = [
    { img: require("../../static/computerHome.svg") },
    { img: require("../../static/iphone.svg") },
    { img: require("../../static/ipad.svg") },
    { img: require("../../static/apple-watch.svg") },
    { img: require("../../static/macbookPro.svg") },
  ];

  const CarouselImg = () => {
    data.map((item) => (
      <Carousel.Item interval={5000}>
        <img src={item.img} alt="" />
      </Carousel.Item>
    ));
  };
  return (
    <div
      style={{
        paddingTop: "90px",
      }}
    >
      <div className="row align-items-center">
        <div className="col col-sm-6 p-0">
          <div className={`${styles.leftContent}`}>
            <div className={styles.titleContainer}>
              <div className="col-12 mt-3">
                <div className={"row align-items-center"}>
                  <div className="col-10">
                    <h1 className={styles.title}>
                      We deliver transformative interfaces.
                    </h1>
                  </div>
                 <div  className={styles.carouselContainer}>
                 <Carousel>
                    <Carousel.Item interval={1000}>
                      <img
                        src={require("../../static/computerHome.svg")}
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img src={require("../../static/iphone.svg")} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img src={require("../../static/ipad.svg")} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        src={require("../../static/apple-watch.svg")}
                        alt=""
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        src={require("../../static/macbookPro.svg")}
                        alt=""
                      />
                    </Carousel.Item>
                    {/* <DesktopImg>
                      <img
                        style={{ marginLeft: "5px" }}
                        src={require("../../static/computerHome.svg")}
                        alt=""
                      />
                    </DesktopImg>
                    <MobileImg>
                      <img
                        style={{ marginLeft: "5px" }}
                        src={require("../../static/iphone.svg")}
                        alt=""
                      />
                    </MobileImg>
                    <TabletImg>
                      <img
                        style={{ marginLeft: "5px" }}
                        src={require("../../static/ipad.svg")}
                        alt=""
                      />
                    </TabletImg> */}
                  </Carousel>
                 </div>
                </div>
              </div>
              <div className="col-12">
                <p className={`${styles.subTitle} mb-0`}>
                  We harness UX design principles with imaginative problem
                  solving to deliver tomorrow's digital experiences. We inspire,
                  innovate, and inform, leaving mediocre and boring behind.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <img
              className={styles.background_mobile}
              src={require("../../static/background_mobile.png")}
              alt="backgroundImage"
            />
          </div>
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
          <div
            className="d-none d-sm-block text-center"
            style={{ position: "relative", top: "75px" }}
          >
            {/* <div className={styles.scrollIcon} onClick={() => scrollToBottom()}>
              <p className={styles.scroll}>SCROLL</p>
              <img src={require("../../static/arrowScroll.svg")} alt=""></img>
            </div> */}
          </div>
          <Container id="scroll">
            <div className="col-12">
              <h1 className={styles.title32px} style={{ textAlign: "center" }}>
                Solving Your Digital Needs One Pixel at a Time
              </h1>
              <p
                className={(styles.subTitle, "px-5")}
                style={{ textAlign: "center" }}
              >
                We are unique, like you. Here's how we deliver.
              </p>
            </div>
            <Carousel className="d-block d-md-none">
              <Carousel.Item className="mb-5">
                <Col sm="12" md="4" lg="4" /*className={styles.backgroundred}*/>
                  <YourDreamCards
                    title="LOOK SHARP"
                    subtitle="Web Design & E-Commerce"
                    imgDesktop={require("../../static/shoppingBasketDesktop.png")}
                    imgTablet={require("../../static/shoppingBasketTablet.png")}
                    info="Driven by simplicity and creative problem solving, we desgin to align businesses and users."
                  />
                </Col>
              </Carousel.Item>
              <Carousel.Item className="mb-5">
                <Col
                  sm="12"
                  md="4"
                  lg="4" /*className={styles.backgroundblue}*/
                >
                  <YourDreamCards
                    title="WORK SMART"
                    subtitle="AI, VR, & BOTS"
                    imgDesktop={require("../../static/webBrowserDesktop.png")}
                    imgTablet={require("../../static/webBrowserTablet.png")}
                    info="We push boundaries. It's how we're building AI products helping businesses of all sizes reach enterprise-level performance."
                  />
                </Col>
              </Carousel.Item>
              <Carousel.Item className="mb-5">
                <Col
                  sm="12"
                  md="4"
                  lg="4" /*className={styles.backgroundgreen}*/
                >
                  <YourDreamCards
                    title="GROW FAST"
                    subtitle="Marketing & Branding"
                    imgDesktop={require("../../static/increaseArrowDesktop.png")}
                    imgTablet={require("../../static/increaseArrowTablet.png")}
                    info="Digital search, illustrations, ad creative-our growth tools create your's brand digital framework for performance."
                  />
                </Col>
              </Carousel.Item>
            </Carousel>
            <Row className="justify-content-between d-none d-md-flex">
              <Col sm="12" md="4" lg="4" /*className={styles.backgroundred}*/>
                <YourDreamCards
                  title="LOOK SHARP"
                  subtitle="Web Design & E-Commerce"
                  imgDesktop={require("../../static/shoppingBasketDesktop.png")}
                  imgTablet={require("../../static/shoppingBasketTablet.png")}
                  info="Driven by simplicity and creative problem solving, we desgin to align businesses and users."
                />
              </Col>
              <Col sm="12" md="4" lg="4" /*className={styles.backgroundblue}*/>
                <YourDreamCards
                  title="WORK SMART"
                  subtitle="AI, VR, & BOTS"
                  imgDesktop={require("../../static/webBrowserDesktop.png")}
                  imgTablet={require("../../static/webBrowserTablet.png")}
                  info="We push boundaries. It's how we're building AI products helping businesses of all sizes reach enterprise-level performance."
                />
              </Col>
              <Col sm="12" md="4" lg="4" /*className={styles.backgroundgreen}*/>
                <YourDreamCards
                  title="GROW FAST"
                  subtitle="Marketing & Branding"
                  imgDesktop={require("../../static/increaseArrowDesktop.png")}
                  imgTablet={require("../../static/increaseArrowTablet.png")}
                  info="Digital search, illustrations, ad creative-our growth tools create your's brand digital framework for performance."
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Container className="col-12">
            <h1 className={styles.title32px} style={{ textAlign: "center" }}>
              Case Studies
            </h1>
          </Container>
          <Container>
            <Row className="justify-content-evenly ">
              <Col sm="12" md="6" lg="6" className="mb-3">
                <Link to="/Case-Studies/AnyClub/">
                  <CaseStudyCard
                    text="Anyclub App"
                    imgsDesktop={[require("../../static/phone1.png")]}
                    imgsTablet={[require("../../static/phone1Tablet.png")]}
                  />
                </Link>
              </Col>
              <Col sm="12" md="6" lg="6" className="justify-content-center">
                <Row className="justify-content-center mb-3">
                  <Col sm="12" md="12" lg="12" className="mb-3">
                    <Link to="/Case-Studies/Chedraui">
                      <CaseStudyCard
                        text="Chedraui E-commerce App"
                        imgsDesktop={[
                          require("../../static/ImageChedrauiDesktop.png"),
                        ]}
                        imgsTablet={[
                          require("../../static/imageChedrauiTablet.png"),
                        ]}
                      />
                    </Link>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col sm="12" md="12" lg="12">
                    <Link to="/Case-Studies/Logicalis/">
                      <CaseStudyCard
                        text="Logicalis Dashboard"
                        imgsDesktop={[require("../../static/motoDesktop.png")]}
                        imgsTablet={[require("../../static/motoTablet.png")]}
                      />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: "5%" }}>
          <StartsWithWhy />
        </div>
        <div style={{ marginTop: "5%" }}>
          <div>
            <h1 className={styles.title} style={{ textAlign: "center" }}>
              Partner up.
            </h1>
            <p
              className={(styles.subTitle, "px-2")}
              style={{ textAlign: "center" }}
            >
              We want to work with brands as cool and smart as we are, any size
              or type.
            </p>
          </div>
          <Partners
            imgs={[
              require("../../static/Hyundai.png"),
              require("../../static/Canon.png"),
              require("../../static/Motorola.png"),
              require("../../static/ACS.png"),
              require("../../static/E.png"),
              require("../../static/coreLogic.png"),
              require("../../static/coxmedia.png"),
              require("../../static/chedrahui.png"),
            ]}
          />
        </div>

        <div style={{ marginTop: "5%" }}>
          <WereHirin />
        </div>
        <div style={{ marginTop: "5%" }}>
          <Container>
            <div>
              <h1 className={styles.title} style={{ textAlign: "center" }}>
                Simple, smart, stellar work.
              </h1>
              <p
                className={(styles.subTitle, "px-3")}
                style={{ textAlign: "center" }}
              >
                Our formula isn’t complicated. Design Sprints + Lean Startup
                Methodology = Making Digital Dreams a Reality.
              </p>
            </div>
            <Carousel className="d-block d-md-none">
              <Carousel.Item className="mb-5">
                <Col sm="12" md="4" lg="4">
                  <HaveAChallenge
                    icon={require("../../static/people.png")}
                    caption={"Emotional"}
                    headline={"Audience Connection"}
                    paragraph={
                      "We know the critical importance of tapping into your own brand ambassadors. Let’s focus on the intrinsic values that make people care about your brand."
                    }
                  />
                </Col>
              </Carousel.Item>
              <Carousel.Item className="mb-5">
                <Col sm="12" md="4" lg="4">
                  <HaveAChallenge
                    icon={require("../../static/browser.png")}
                    caption={"Adaptable"}
                    headline={"Tomorrow’s Tech"}
                    paragraph={
                      "We are passionate about leveraging future-ready technology stacks for adaptable, agile e-commerce capabilities."
                    }
                  />
                </Col>
              </Carousel.Item>
              <Carousel.Item className="mb-5">
                <Col sm="12" md="4" lg="4">
                  <HaveAChallenge
                    icon={require("../../static/award.png")}
                    caption={"Exceptional"}
                    headline={"Game-changing Results"}
                    paragraph={
                      "We are driven by the goal of building new experiences that users care about and that create brand value for our partners."
                    }
                  />
                </Col>
              </Carousel.Item>
            </Carousel>
            <Row className="justify-content-between d-none d-md-flex">
              <Col sm="12" md="4" lg="4">
                <HaveAChallenge
                  icon={require("../../static/people.png")}
                  caption={"Emotional"}
                  headline={"Audience Connection"}
                  paragraph={
                    "We know the critical importance of tapping into your own brand ambassadors. Let’s focus on the intrinsic values that make people care about your brand."
                  }
                />
              </Col>
              <Col sm="12" md="4" lg="4">
                <HaveAChallenge
                  icon={require("../../static/browser.png")}
                  caption={"Adaptable"}
                  headline={"Tomorrow’s Tech"}
                  paragraph={
                    "We are passionate about leveraging future-ready technology stacks for adaptable, agile e-commerce capabilities."
                  }
                />
              </Col>
              <Col sm="12" md="4" lg="4">
                <HaveAChallenge
                  icon={require("../../static/award.png")}
                  caption={"Exceptional"}
                  headline={"Game-changing Results"}
                  paragraph={
                    "We are driven by the goal of building new experiences that users care about and that create brand value for our partners."
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div ref={messagesEndRef} style={{ marginTop: "5%" }}>
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
