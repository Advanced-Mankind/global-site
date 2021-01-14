import "@immfly/flights-map";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Layout from "../components/layout";
import "../components/Map/FlightsMapContainer.css";
import OneSizeDoesNotFill from "../components/OneSizeDoesNotFit/OneSizeDoesNotFill";
import WereHirin from "../components/WereHiring/WereHiring";
import styles from "../theme/index.module.css";
export default function WhoWeAre() {
  const flights = [
    {
      name: "V131", // Flight name
      origin: {
        city: "Paris", // Origin city name
        latitude: 48.8567, // Origin city latitude
        longitude: 2.351, // Origin city longitude
      },
      destination: {
        city: "Toronto", // Destination city name
        latitude: 43.8163, // Destination city latitude
        longitude: -79.4287, // Destination city longitude
      },
      state: 1, // * Optional. Flight state: 0 means pending to start, 1 means in progress, and 2 means completed. If there is no state, the position of the aircraft on the flight will be on the middle
      //color: "#F60", // * Optional. Color to be painted on the map, including aircraft, cities and line flight,
    },
  ];
  const config = {
    // mapContainerId: "mapa", // The id of the map container on the custom element.
    //globalFlightsState: 0.5, // The value of this can be between 0 and 1. It specifies the position of the aircraft on the line flight. For example, 0 will be at the begining of the line and 1 at the end.
    colors: {
      land: "#D9E4FF",
      background: "#504F6400",
      aircrafts: "#000000",
      lines: "#00000000",
      cities: "#D9E4FF",
    },
    zoomedContinent: null, // Specifies default bounding boxes to initialize the map. You can use 'europe', 'asia', 'oceania', 'africa', 'north_america' or 'south_america'.
    forceUpdate: true, // In react applications, you have to forceUpdate to render the flights, when the component that wraps the flights-map already has been mounted.,
    showMarkers: true, // Specifies if the default markers have to be shown.
    dataToShowOnMarkers: [
      { id: "name", text: "Flight" },
      { id: "origin.city", text: "Origin" },
      { id: "destination.city", text: "Destination" },
    ], // Specifies the data to be shown on markers. 'id' is key on the object and 'text' is the name that will be showed on the marker.
    animation: {
      enabled: true, // If it is false, any aircraft will be animate altough its state is 'in progress'.
      flip: true, // Specifies if the aircrafts will move throug both directions.
      loop: true, // Specifies if the aircrafts will move constantly on its line flight.
      duration: 8.5, // Specifies the duration of the aircrafts animation.
      shouldAnimateFlyingState: true, // * Optional. If it setted to true, the aircrafts and the airports with flights in state FLYING will be animated with a glow effect.
    },
    zoom: {
      initialLevel: 1, // Specifies initial zoom level.
      minLevel: 1, // Specifies minimum zoom level.
      maxLevel: 7, // Specifies maximum zoom level.
      initialCenter: {
        // Specifies initial zoom position of the map. If you have set the attribute zoomedContinent, this one has one effect.
        latitude: null, // Specifies the initial zoom latitude.
        longitude: null, // Specifies the initial zoom longitude.
        level: null, // Specifies the initial zoom level.
      },
      homeButtonEnabled: true, // Specifies if the home button must be shown.
      buttonFillAlpha: 0.7, // Specifies the alpha value of the buttons background.
      buttonFillColor: "#E6E6E6", // Specifies the background color of the buttons.
      controlsPosition: {
        top: 20,
        right: 20,
      }, // Specifies the position of the map control (home, zomm in, zoom out). You can add left, bottom, top and right.
    },
    texts: {
      labelsFontSize: 8, // Specifies labels font size of the map.
      markersFontSize: 14, // Specifies font size on flights markers.
    },
  };
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    let map = document
      .getElementsByTagName("flights-map")[0]
      .shadowRoot.getElementById("map");
    map.style.backgroundColor = "#ffffff00";
  });
  return (
    <Layout>
      <div className={styles.containerMap}>
        <flights-map
          ref={(el) => {
            el && (el.flights = flights) && (el.config = config);
          }}
        ></flights-map>
      </div>
      <Container fluid className="mx-sm-5 my-5 mx-2 w-auto bg-blue ">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col xs="12" sm="6">
              <Row className="align-items-center">
                <Col xs="auto">
                  <img
                    src={require("../../static/slack.png")}
                    alt="Ilustration"
                  ></img>
                </Col>
                <Col>
                  <h2 className="slack-title">Want to Slack?</h2>
                </Col>
              </Row>
              <p className="slack-p mt-2">
                We have a public slack channel where you can ask questions in a
                casual setting. Please give us time to get back with you, and we
                look forward to getting to know you better!
              </p>
            </Col>
            <Col xs="12" sm="6">
              <Button className="d-flex btn-slack mx-0 mx-sm-auto">
                Slack with us
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="my-5">
        <Row className="img-Container d-block d-md-none mx-auto">
          <img
            className="img-1"
            src={require("../../static/Image right.png")}
            alt="Ilustrations1"
          />
          <img
            className="img-2"
            src={require("../../static/Image right-1.png")}
            alt="Ilustrations2"
          />
          <img
            className="img-3"
            src={require("../../static/Image right-2.png")}
            alt="Ilustrations3"
          />
        </Row>
        <Row>
          <Col lg={5}>
            {" "}
            <h2 className="know-us-title">Get to know us.</h2>
            <p className="know-us-p">
              Advanced Mankind is lit. And, we think you’ll think so, too. We’ve
              built a team of friendly people who do great work. We’re versatile
              and evolved, with the right mix of kick ass tools, smarts, and
              likability.
            </p>
            <p className="know-us-p">
              Our team has creators, magicians, sages, and jesters wrapped
              together to expand the possibilities, set benchmarks, and transmit
              optimism while working hard for our partners.
            </p>
            <p className="border-dashed"></p>
            <p className="know-us-subTitle">Why choose Advanced Mankind?</p>
            <p className="know-us-small">
              “We decided to go with Advanced Mankind because of the speed,
              customer support, and fast turnaround. Lorem upsum dolor un met
              lorem ipsum dolor un met.”
            </p>
            <p className="chose-p">
              Charlie Mann,{" "}
              <span className="chose-small">Social VP of Marketing</span>
            </p>
            <div className="w-100"></div>
            <p>
              <img
                className="avatar mr-2"
                src={require("../../static/people.png")}
                alt="Ilustration"
              />
              <img
                className="avatar mr-2"
                src={require("../../static/people.png")}
                alt="Ilustration"
              />
              <img
                className="avatar mr-2"
                src={require("../../static/people.png")}
                alt="Ilustration"
              />
              <img
                className="avatar mr-2"
                src={require("../../static/people.png")}
                alt="Ilustration"
              />
            </p>
          </Col>
          <Col className="d-none d-md-block d-lg-none">
            <Row className="img-Container mx-auto">
              <img
                className="img-1"
                src={require("../../static/Image right.png")}
                alt="Ilustrations1"
              />
              <img
                className="img-2"
                src={require("../../static/Image right-1.png")}
                alt="Ilustrations2"
              />
              <img
                className="img-3"
                src={require("../../static/Image right-2.png")}
                alt="Ilustrations3"
              />
            </Row>
          </Col>
          <Col className="d-none d-md-none d-lg-block">
            <Row className="img-Container mx-auto">
              <img
                className="img-1"
                src={require("../../static/Image right-5.png")}
                alt="Ilustrations1"
              />
              <img
                className="img-2"
                src={require("../../static/Image right-3.png")}
                alt="Ilustrations2"
              />
              <img
                className="img-3"
                src={require("../../static/Image right-4.png")}
                alt="Ilustrations3"
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Carousel className="d-block d-md-none">
        <Carousel.Item className="mb-5">
          <Col sm="12" md="4" lg="4">
            <div className="cardContainerChallenge">
              <div className="iconStyleChallenge slider-icon">
                <img
                  src={require("../../static/browser.png")}
                  alt={require("../../static/browser.png")}
                />
              </div>
              <h3 className="captionChallenge slider-ppl">UI Designer</h3>
              <h1 className="headlineChallenge slider-ppls">Emily Allamon</h1>
              <p className="paragraphChallenge">
                Nam posuere est imperdiet pulvinar dignissim. Duis commodo
                tincidunt pharetra. Cras sagittis ullamcorper tortor aliquam
                scelerisque.
              </p>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item className="mb-5">
          <Col sm="12" md="4" lg="4">
            <div className="cardContainerChallenge">
              <div className="iconStyleChallenge slider-icon">
                <img
                  src={require("../../static/browser.png")}
                  alt={require("../../static/browser.png")}
                />
              </div>
              <h3 className="captionChallenge slider-ppl">UI Designer</h3>
              <h1 className="headlineChallenge slider-ppls">Emily Allamon</h1>
              <p className="paragraphChallenge">
                Nam posuere est imperdiet pulvinar dignissim. Duis commodo
                tincidunt pharetra. Cras sagittis ullamcorper tortor aliquam
                scelerisque.
              </p>
            </div>
          </Col>
        </Carousel.Item>{" "}
        <Carousel.Item className="mb-5">
          <Col sm="12" md="4" lg="4">
            <div className="cardContainerChallenge">
              <div className="iconStyleChallenge slider-icon">
                <img
                  src={require("../../static/browser.png")}
                  alt={require("../../static/browser.png")}
                />
              </div>
              <h3 className="captionChallenge slider-ppl">UI Designer</h3>
              <h1 className="headlineChallenge slider-ppls">Emily Allamon</h1>
              <p className="paragraphChallenge">
                Nam posuere est imperdiet pulvinar dignissim. Duis commodo
                tincidunt pharetra. Cras sagittis ullamcorper tortor aliquam
                scelerisque.
              </p>
            </div>
          </Col>
        </Carousel.Item>
      </Carousel>{" "}
      <Container fluid>
        <Carousel className="d-none d-md-block">
          <Carousel.Item className="mb-5">
            <Row>
              <Col>
                <div className="cardContainerChallenge">
                  <div className="iconStyleChallenge slider-icon">
                    <img
                      src={require("../../static/fernando.png")}
                      alt={require("../../static/fernando.png")}
                    />
                  </div>
                  <h3 className="captionChallenge slider-ppl">UI Designer</h3>
                  <h1 className="headlineChallenge slider-ppls">
                    Fernando Higuera
                  </h1>
                  <p className="paragraphChallenge">
                    A true visionary, Fernando is our fearless leader into all
                    things new and inventive. Never takeing no as an answer he
                    pushes the team to think beyond today in look to the future!
                  </p>
                </div>
              </Col>
              <Col>
                <div className="cardContainerChallenge">
                  <div className="iconStyleChallenge slider-icon">
                    <img
                      src={require("../../static/scot.png")}
                      alt={require("../../static/scot.png")}
                    />
                  </div>
                  <h3 className="captionChallenge slider-ppl">UI Designer</h3>
                  <h1 className="headlineChallenge slider-ppls">
                    Scott Prather
                  </h1>
                  <p className="paragraphChallenge">
                    Being a seasoned designer influences everything that Scott
                    does. He helps guide and direct all projects that AM takes
                    on. His years of experience is a huge asset to leading this
                    amazing team of designers.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="cardContainerChallenge">
                  <div className="iconStyleChallenge slider-icon">
                    <img
                      src={require("../../static/shaun.png")}
                      alt={require("../../static/shaun.png")}
                    />
                  </div>
                  <h3 className="captionChallenge slider-ppl">UI Designer</h3>
                  <h1 className="headlineChallenge slider-ppls">Shaun Davis</h1>
                  <p className="paragraphChallenge">
                    Choosing an unconventional path through the world of design,
                    Shaun brings a unique, and refreshing approach towards
                    enhancing the image, performance, and user experience for
                    companies online.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="cardContainerChallenge">
                  <div className="iconStyleChallenge slider-icon">
                    <img
                      src={require("../../static/emily.png")}
                      alt={require("../../static/emily.png")}
                    />
                  </div>
                  <h3 className="captionChallenge slider-ppl">UI Designer</h3>
                  <h1 className="headlineChallenge slider-ppls">
                    Emily Allamon
                  </h1>
                  <p className="paragraphChallenge">
                    Emily wears many hats and is the glue that holds advanced
                    mankind together. She is a naturely born learder and is a
                    self motivator.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      <OneSizeDoesNotFill
        firstTitle={"One Size Does Not Fit All"}
        secondTitle={"It’s Time for Tomorrow’s Technology"}
        firstParagraph={
          "Your business is unique, with its own set of values and ace-in-the-hole products and features important to your brand. We’re dedicated to understanding the values of your brand and the motivation and mindset of your customers. We connect the dots to build digital solutions fit specifically for you."
        }
        secondParagraph={
          "Your business needs evolve. We create adaptable, future-proof products ready to evolve with you. We use a technology stack ahead of its time to execute product releases that are fast and flexible. It’s about time your site is ready for tomorrow’s customers, today. "
        }
      />
      <WereHirin />
    </Layout>
  );
}
