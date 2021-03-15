import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GetStarted from "../../components/GetStarted/GetStarted";
import Layout from "../../components/layout";
import styles from "../../theme/index.module.css";

export default function Guidex() {
  const challengesList = [
    "Established a strong and recognizable brand identity, including an exclusive logo for GuideX.",
    "Design effective user flows for two different user types.",
  ];
  const challengesItems = challengesList.map((item) => <li>{item}</li>);
  return (
    <Layout>
      <Container
        style={{
          paddingTop: "90px",
          marginBottom: "5%",
        }}
      >
        <h1 className={styles.title}>
          Bridging explorers to memorable adventures
        </h1>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>The Challenge</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              GuideX is the leading marketplace for outdoor expeditions,
              empowering clients with detailed information to best suit their
              passions and connecting them with objectively reviewed
              professionals to maximize their lifelong outdoor experience. We
              were tasked to create a digital solution that would connect
              hunters/fishers to exploration guides by providing visibility to
              all necessary information, exploration options and direct
              messaging.
            </p>
            <p className={styles.subtitle15}>Challenges</p>
            <ul className="paragraph mb-5">{challengesItems}</ul>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className="">
            <img
              className="img-fluid"
              src={require("../../../static/heroGuidex.png")}
              alt={require("../../../static/heroGuidex.png")}
              key={require("../../../static/heroGuidex.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Discovery</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              We commenced this project with a research phase. It was important
              to us to learn who our users were, what were their habits,
              where/when they were going to be using the product, and how they
              were accessing the product.
              <br></br>
              <br></br>
              After gathering multiple sources of data we succeeded to target
              two main user groups: the guides and the explorers.
            </p>
            <Row>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../../static/GuideIcon.svg")}
                  alt={require("../../../static/GuideIcon.svg")}
                  key={require("../../../static/GuideIcon.svg")}
                />
                <p className={styles.discovery}>Guide User Group</p>
              </Col>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../../static/ExplorerIcon.svg")}
                  alt={require("../../../static/ExplorerIcon.svg")}
                  key={require("../../../static/ExplorerIcon.svg")}
                />
                <p className={styles.discovery}>Hunter User Group</p>
              </Col>
            </Row>
            <div className={styles.containerBackground}>
              <p className={styles.title}>
                I been fishing for about 2 years but sometimes I wish I knew
                about some new destinations to fish
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Ideation</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Knowing the business goals and the pain points of our users we
              established 3 layers of architecture that would meet those needs.
              <br></br>
              <br></br>
              Those layers included a staff backend portal to manage the site
              and a guide portal to upload information about their expeditions.
              Additionally we developed a front face of the site for the
              customers to book or interact with guides and finally a native app
              for fishers to discover fishing trips and guides.
            </p>
            <img
              className="img-fluid"
              src={require("../../../static/ExpeditionsGuidex.png")}
              alt={require("../../../static/ExpeditionsGuidex.png")}
              key={require("../../../static/ExpeditionsGuidex.png")}
            />
            <Row className="my-5">
              <Col sm="1" md="1" lg="1" className="">
                <img
                  src={require("../../../static/ExplorerIcon60.svg")}
                  alt={require("../../../static/ExplorerIcon60.svg")}
                  key={require("../../../static/ExplorerIcon60.svg")}
                />
              </Col>
              <Col sm="11" md="11" lg="11" className="">
                <p className="paragraph">
                  The search bar went through some iterations that improved the
                  experience of our user. By adding a tab for fishing and
                  hunting, we reduced the amount of time of the user’s check out
                  flow.{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className={styles.imgContainer}>
            <img
              className="img-fluid"
              src={require("../../../static/iPadGuidex.png")}
              alt={require("../../../static/iPadGuidex.png")}
              key={require("../../../static/iPadGuidex.png")}
            />
          </Col>
        </Row>
        <Row className="">
          <Col xs="6" sm="6" md="6" lg="6" className="p-15">
            <img
              className="img-fluid"
              src={require("../../../static/WhiteboardGuidex.png")}
              alt={require("../../../static/WhiteboardGuidex.png")}
              key={require("../../../static/WhiteboardGuidex.png")}
            />
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" className="p-15">
            <img
              className="img-fluid"
              src={require("../../../static/PCGuidex.png")}
              alt={require("../../../static/PCGuidex.png")}
              key={require("../../../static/PCGuidex.png")}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h2 className={styles.subtitle22px}>Implementation</h2>
          </Col>
          <Col xs={12} md={8}>
            <p className="paragraph mb-5">
              Following multiple rounds of iterations in the user interface,
              task flows as well as polishing up the backend/frontend of their
              system, we are proud and confident to deliver this digital
              solution that will facilitate the experience for many passionate
              hunters and guides.
            </p>
            <p className={styles.subtitle15}>Performance</p>
            <p>
              GuideX web and native app are still going through usability
              testing at this time. Some of the key perfomace indicators we are
              tracking are conversion, engagement and retention rate.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col>
            <img
              className="img-fluid"
              src={require("../../../static/dotBlue.png")}
              alt=""
            />
              <img
                 src={require("../../../static/CartIcon.svg")}
                 alt=""
              />
            <p className={styles.discovery}>Conversion Rate</p>
          </Col>
          <Col>
            <img
              className="img-fluid"
              src={require("../../../static/dotBlue.png")}
              alt=""
            />
            <p className={styles.discovery}>Engagement Rate</p>
          </Col>
          <Col>
            <img
              className="img-fluid"
              src={require("../../../static/dotBlue.png")}
              alt=""
            />
            <p className={styles.discovery}>Retention Rate</p>
          </Col>
        </Row>
        <Row className="">
          <Col sm="12" md="12" lg="12" className={styles.imgContainer}>
            <img
              className="img-fluid"
              src={require("../../../static/WoodenHand.png")}
              alt={require("../../../static/WoodenHand.png")}
              key={require("../../../static/WoodenHand.png")}
            />
          </Col>
        </Row>
        <Row className="">
          <Col xs="6" sm="6" md="6" lg="6" className="p-15">
            <img
              className="img-fluid"
              src={require("../../../static/IpadOnDesk.png")}
              alt={require("../../../static/IpadOnDesk.png")}
              key={require("../../../static/IpadOnDesk.png")}
            />
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" className="p-15">
            <img
              className="img-fluid"
              src={require("../../../static/Scene.png")}
              alt={require("../../../static/Scene.png")}
              key={require("../../../static/Scene.png")}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <GetStarted />
      </Container>
      <div className={styles.backgroundGuidex}></div>
    </Layout>
  );
}
