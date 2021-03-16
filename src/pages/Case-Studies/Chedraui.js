import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GetStarted from "../../components/GetStarted/GetStarted";
import Layout from "../../components/layout";
import styles from "../../theme/index.module.css";

export default function Chedraui() {
  const goalsList = [
    "Design and deliver a MVP (minimum viable product) to reduce development time and encourage agile framework between teams.",
    "Strengthen Chedraui brand presence with a strong design system.",
  ];
  const goalsItems = goalsList.map((item) => <li>{item}</li>);
  return (
    <Layout>
      <Container
        style={{
          paddingTop: "90px",
          marginBottom: "5%",
          marginTop: "80px",
        }}
      >
        <h1 className={styles.title}>
          Reimagining the e-commerce experience of Chedraui
        </h1>
        <Row
          style={{
            marginTop: "80px",
          }}
        >
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Challenge</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Chedraui is a Latin American e-commerce site with a wide variety
              of products, ranging from pharmaceutical items, electronics and
              their own private label product line.
              <br></br> <br></br>
              We were tasked with reimagining their e-commerce experience on
              their mobile app. Some of the immediate problems Advanced Mankind
              product design team undertook were to structure an effective
              checkout flow and design an onboarding for new users that would be
              unobtrusive to their experience. This was of at most importance
              because data showed that most users were unable to finish their
              purchase successfully.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="d-none d-sm-block img-fluid"
              src={require("../../../static/chedraui1.png")}
              alt={require("../../../static/chedraui1.png")}
              key={require("../../../static/chedraui1.png")}
            />
            <img
              style={{
                borderRadius: "10px",
              }}
              className="d-block d-sm-none img-fluid w-100"
              src={require("../../../static/chedraui1Mobile.png")}
              alt={require("../../../static/chedraui1Mobile.png")}
              key={require("../../../static/chedraui1Mobile.png")}
            />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "80px",
          }}
        >
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Product Design</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              We worked diligently to renovate their app with up-to-date UX/UI
              best practices. It was important to us to fully empathize with
              both our client and their customers. Because of this we had to be
              careful to not push the design too far off from their current
              shopping experience. Learning where their customers’ shop and what
              kind of online experience they are familiar with; set the
              boundaries for what we would update and what we should leave to
              update at a later time.
              <br></br>
              <br></br>
              Goals Design and deliver a MVP (minimum viable product) to reduce
              development time and encourage agile framework between teams.
              Strengthen Chedraui brand presence with a strong design system.
            </p>
            <p className={styles.subtitle15}>Goals</p>
            <ul className="paragraph mb-5">{goalsItems}</ul>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui2.png")}
              alt={require("../../../static/chedraui2.png")}
              key={require("../../../static/chedraui2.png")}
            />
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui3.png")}
              alt={require("../../../static/chedraui3.png")}
              key={require("../../../static/chedraui3.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Product Development</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              From a development perspective, the new app had major upgrades in
              regards to tech stacks and architecture changes to improve the
              security, speed, and resource management of the product.
              <br></br>
              <br></br>
              Our team moved the legacy app from a Java Sprintboot app to a Web
              Progressive App (WPA) based on Google’s latest framework for
              mobile application development: Flutter. Our development team
              implemented a Peer-to-peer encryption model with dynamic keys
              changing every 15 seconds to enhance the security of the
              customer’s data transmission between the app and all other
              services connected with the product.
              <br></br>
              <br></br>
              Last, we revamped the backend services to be based on a
              microservices architecture to breakdown complex logic, reduce
              latency, and maximize the use of caching on the cloud. The results
              are advantageous scalability in critical times such as Black
              Friday (handling over 3,000 users per minute), a reduction in
              infrastructure costs, and separate backend infrastructure to
              manage updates to logic minimizing releases in the app store.
            </p>
          </Col>
          <p className={styles.description26}>
            Chedraui Mobile app, makes the first enterprise eCommerce app in
            Latin America built with Flutter, helping us position Chedraui as a
            tech leader and pioneer in digital innovation.
          </p>
        </Row>
        <Row className="">
          <Col xs="12" sm="12" md="6" lg="6">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui4.png")}
              alt={require("../../../static/chedraui4.png")}
              key={require("../../../static/chedraui4.png")}
            />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <img
              className="img-fluid"
              src={require("../../../static/chedraui5.png")}
              alt={require("../../../static/chedraui5.png")}
              key={require("../../../static/chedraui5.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Result</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Currently, our new app is helping chedraui handle 80% of all
              sales, which are mobile transactions. Chedraui is able to offer a
              high-quality customer experience to its customers even before the
              pandemic crisis arose worldwide enabling them to sustain their
              market share. We are still in close collaboration to keep adding
              new and useful features that sustain their leadership in the
              national market. Other close competitors have noticeably taken
              much longer to offer a similar level of service through their
              respective digital services.
            </p>
          </Col>
          <Col xs={12} className="my-5">
            <h2 className={styles.subtitle22px}>Performance</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="4" lg="4">
            <img
              className={styles.performanceImg}
              src={require("../../../static/Oval.svg")}
              alt=""
            />
            <p>+73%</p>
            <p className={styles.performance}>Daily Active Users</p>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <img
              className={styles.performanceImg}
              src={require("../../../static/Oval.svg")}
              alt=""
            />
            <p className={styles.performance}>Monthly Conversion Rate</p>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <img
              className={styles.performanceImg}
              src={require("../../../static/Oval.svg")}
              alt=""
            />
            <p className={styles.performance}>Daily User Engagement</p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              style={{
                borderRadius: "2%",
                margin: "80px 0px 40px 0px",
              }}
              className="img-fluid"
              src={require("../../../static/chedraui6.png")}
              alt={require("../../../static/chedraui6.png")}
              key={require("../../../static/chedraui6.png")}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <GetStarted />
      </Container>
    </Layout>
  );
}
