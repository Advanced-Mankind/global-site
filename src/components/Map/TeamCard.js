import React from "react";
import { Col } from "react-bootstrap";
import "./styles.css";
const TeamCard = ({ title, name, imgDesktop, imgTablet, imgMobile }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className="cardMobile mt-4">
        <div>
          <div className="img-Team">
            <img src={imgDesktop} className="img-fluid" alt={imgDesktop} />
          </div>
          <div className=" mx-0 mt-3  containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name mw-100">{name}</p>
          </div>
        </div>
      </div>

      <div className="cardTablet">
        <div>
          <div className="img-Team">
            <img src={imgDesktop} className="img-fluid" alt={imgDesktop} />
          </div>
          <div className=" mx-0 mt-3  containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name mw-100">{name}</p>
          </div>
        </div>
      </div>

      <div className="cardDesktop ">
        <div>
          <div className="img-Team">
            <img src={imgDesktop} className="img-fluid" alt={imgDesktop} />
          </div>
          <div className=" mx-0 mt-3  containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name mw-100">{name}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default TeamCard;
