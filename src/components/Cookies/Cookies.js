import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CookieConsent from "react-cookie-consent";
import "./Cookies.css";

const Cookies = () => {
  return (
  
    <Container className="cookiesContainer">
      <Row>
        <Col sm="12" md="12" lg="12" style={{}}>
          <p className="titleCookies">Cookies</p>
          <p className="subtitleCookies">
            We use cookies to make your experience better. Please accept cookies
            for optimal performance.
          </p>
         <Col sm="12" md="5" lg="3">
         <Button
            style={{
              borderRadius: "34px",
              backgroundColor: "#3333FF",
              borderColor: "#3333FF",
              color: "#FFFFFF",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "24px",
              textAlign: "center",
              padding: "15px 20px",
              marginTop: "24px",
              width:"100%"
            }}
            buttonStyle={{
                background: "linear-gradient(to left, orange , yellow, green, cyan, blue, violet)",
                color: "white",
                fontWeight: "bolder",
                textShadow: "2px 2px black",
              }}  
          >
            ACCEPT COOKIES
          </Button>
          </Col>
        </Col>
      </Row>
    </Container>
   
  );
};

export default Cookies;
