import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PositionsPopup from "./PositionsPopup";
import Modal from "react-bootstrap/Modal";

import "./stylesPopup.css";
const ContainerPopup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="formContainerModal"
      backdropClassName="popContainer"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="title-form mb-0 ml-3">Apply.</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{margin:" 15px 0px"}}>
        {/* <Container
          fluid
          className="popContainer"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          
        </Container> */}
        <div>
          <Row>
            <Col sm="12" md="12" lg="12"></Col>
            <Col
              sm="12"
              md="12"
              lg="12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin:"0px"
              }}
            >
              <PositionsPopup setShow={props.setShow} />
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContainerPopup;
