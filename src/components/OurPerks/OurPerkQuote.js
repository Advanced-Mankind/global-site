import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const OurPerkQuote = () => {
  return (
    <div>
      <Container className="ourPerkQuoteContainer">
        <h1 className="quoteTitle">
          “Can’t ignore the great perks! We work hard every day so we can have a
          healthy work/life balance”
        </h1>
        <p className="quoteInfo">SCOTT PRATHER</p>
        <p className="quoteFoot">Creative Director</p>
      </Container>

      <Container  className="ourPerkQuoteContainer">
        <h1 className="quoteTitle">
          "I found a place with interesting challenges that allows me to be
          constantly growing. We have a lot of fun. I feel very lucky to work at
          AM”
        </h1>
        <p className="quoteInfo">FABIOLA RODRÍGUEZ</p>
        <p className="quoteFoot">Front End Developer</p>
      </Container>
    </div>
  );
};

export default OurPerkQuote;
