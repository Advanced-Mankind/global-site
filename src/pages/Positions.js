import { Link } from "gatsby";
import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import Layout from "../components/layout";
import CandidateCard from "../components/Positions/candidateCard";
import ContainerPopup from "../components/PositionsPopup/containerPopup";
import styles from "../theme/index.module.css";

const positionsList = [
  {
    "area": "UI/UX Designer",
    "description": "We are looking for a dynamic UI/UX Designer who will be responsible for the user experience (UX) and user interface (UI) design of our various digital assets. You will ensure that all elements of the online user experience are optimized for improved usability, usefulness, and exceptional visual design. The successful candidate will evidence a passion for delivering adaptive and creative solutions to UI/UX design problems by staying up to date with best practices and emerging trends in user experience design and user interface technology.",
    "responsibilities": [
      "Investigating user experience design requirements for our suite of digital assets.",
      "Developing and conceptualizing a comprehensive UI/UX design strategies.",
      "Producing high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.",
      "Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.",
      "Testing UI elements such as CTAs, banners, page layouts, page designs, page flows, and target links for landing pages.",
      "Collaborating with the design and development team to ensure the creation and delivery of tailored experiences for the digital user.",
      "Providing advice and guidance on the implementation of UX research methodologies and testing activities in order to analyze and predict user behavior.",
      "Adhering to style standards on typography and graphic design."
    ],
    "requirements": [
      "4+ years of user experience and visual design work for desktop and touch devices.",
      "Ability to communicate design concepts, proposals and solutions through sketches, wireframes, high-fidelity mockups, interactive prototypes, and detailed specs.",
      "Demonstrates strong command of visual design, communication design and/or UX design principles.",
      "Experience in Sketch/InVision",
      "Full understanding in building design frameworks using components/symbols.",
      " Knowledge of HTML and CSS",
      "Self-motivated, focused on learning and staying up to date with the latest UI trends and technologies.",
      "Can be liaison to technical and engineering functions.",
      "Enthusiasm for an iterative design process.",
      "Excellent written, verbal and presentation skills.",
      "Ability to manage multiple projects and to create work with minimal supervision."
    ]
  },
  {
    "area": "Mobile Developer",
    "description": "We are seeking a creative digital product developer that can work with our eam to achieve our business' digital goals. The ideal candidate for this position is a hands-on professional with strong knowledge of content management platforms, and an ability to translate business needs into client-friendly functions that will expand the influence of our digital products. A Developer will be responsible for updating our current digital products, as well as developing and implementing new products.",
    "responsibilities": [
      "Website/Mobile digital product building, or maintaining.",
      "Using scripting or authoring languages, management tools, content creation tools, applications, and digital media.",
      "Conferring with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions.",
      "Directing or performing updates.",
      "Developing or validating test routines and schedules to ensure that test cases mimic external interfaces and address all browser and device types.",
      "Editing, writing, or designing digital content according to the designs given.",
      "Maintaining an understanding of the latest Web applications and programming practices through education, study, and participation in conferences, workshops, and groups.",
      "Identifying problems uncovered by customer feedback and testing, and correcting or referring problems to appropriate personnel for correction.",
      "Evaluating code to ensure it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems.",
      "Determining user needs by analyzing technical requirements."
    ],
    "requirements": [
      "Kotlin",
      "Swift",
      "Flutter (Dart)",
      "React-native",
      "Docker",
      "CI/CD"
    ]
  },
  {
    "area": "Web Developer",
    "description": "We are seeking a creative digital product developer that can work with our eam to achieve our business' digital goals. The ideal candidate for this position is a hands-on professional with strong knowledge of content management platforms, and an ability to translate business needs into client-friendly functions that will expand the influence of our digital products. A Developer will be responsible for updating our current digital products, as well as developing and implementing new products.",
    "responsibilities": [
      " Website/Mobile digital product building, or maintaining.",
      "Using scripting or authoring languages, management tools, content creation tools, applications, and digital media.",
      "Conferring with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions.",
      " Directing or performing updates.",
      "Developing or validating test routines and schedules to ensure that test cases mimic external interfaces and address all browser and device types.",
      "Editing, writing, or designing digital content according to the designs given.",
      "Maintaining an understanding of the latest Web applications and programming practices through education, study, and participation in conferences, workshops, and groups.",
      "Identifying problems uncovered by customer feedback and testing, and correcting or referring problems to appropriate personnel for correction.",
      "Evaluating code to ensure it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems.",
      "Determining user needs by analyzing technical requirements."
    ],
    "requirements": [
      "Node.JS",
      "Java SE",
      "MongoDB",
      "MySQL DB/PostgreSQL",
      "Serverless/Microservices Architecture",
      "React.js/Vue.js/Angular/Ionic",
      "MEAN/MERN/LAMP Stack",
      "Docker",
      "CI/CD"
    ]
  }
]

export default function Positions() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Layout>
      <div
        className="row align-items-center m-0"
        style={{
          paddingTop: "90px",
        }}
      >
        <div className="col col-sm-6 p-0">
          <div className={`${styles.leftContent}`}>
            <div style={{marginTop:"20px"
              }}>
            <Link
              to="/Careers/"
              style={{
                color: "#222b45",
                fontFamily: "Open Sans",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0",
                lineHeight: "16px",
                marginTop:"10px"
              }}
            >
              Back to Careers
            </Link>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <h1 className={styles.title}>
                  We are looking for our next team members!{" "}
                </h1>
              </div>
              <div className="col-12">
                <p className={`${styles.subTitle} mb-0`}>
                  If you see a position that you are interested in please email
                  us your resume and we will get back to you to start the
                  interview process. We take onboarding very seriously so please
                  only apply in your serious about the position.
                </p>
              </div>
              <div
                className="col-12"
                style={{ marginTop: "26px", marginLeft: "-12px" }}
              >
                <ul id={styles.positionsUl} className="ulPositions">
                  <li>Work from anywhere</li>
                  <li>Unique benefits</li>
                  <li>Competetive salary</li>
                  <li>$1000 annual tech bonus</li>
                </ul>
              </div>
              <Col xs="12" sm="6">
                <Button
                  onClick={() => setModalShow(true)}
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    color: "#FFFFFF",
                    marginTop: "28px",
                    marginBottom: "30px",
                    width: "100%",
                    padding: "13px",
                    alignItems: "center",
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: "24px",
                  }}
                >
                  APPLY TODAY
                </Button>
              </Col>
            </div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 p-0">
          <img
            src={require("../../static/positionsMobile.png")}
            className={styles.background_tablet}
            alt=""
          />
        </div>
        <Col className={"mt-5"} sm="8" md="12" lg="12">
          <p className={styles.title} style={{ textAlign: "center" }}>
            Available Positions
          </p>
        </Col>
        <Container>
          {positionsList.map((position) =>{
            return( <>
            <Col sm="12" md="12" lg="12" className="cardDesktop">
            <div className="textCard">
              <CandidateCard info={position} setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardTablet">
            <div className="textCard">
              <CandidateCard info={position} setShow={setModalShow} />
            </div>
          </Col>
          <Col sm="12" md="12" lg="12" className="cardMobile p-0">
            <div className="textCard">
              <CandidateCard info={position} setShow={setModalShow} />
            </div>
          </Col>  
            </>)
          })}
        </Container>
        <ContainerPopup
          show={modalShow}
          setShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </Layout>
  );
}
