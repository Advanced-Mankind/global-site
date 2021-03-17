import React from "react";
import { Col } from "react-bootstrap";
import "./styles.css";
const TeamCard = ({ title, name, imgDesktop, imgTablet, imgMobile }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className="cardMobile mt-4">
        <div>
          <img src={imgMobile} className="img-fluid" alt={imgMobile} />
          <div className=" mx-4 mt-3  containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name w-100 mb-5">{name}</p>
          </div>
        </div>
      </div>

      <div className="cardTablet">
        <div>
          <img src={imgTablet} className="img-fluid" alt={imgTablet} />
          <div className=" mx-5 mt-3  containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name mw-100">{name}</p>
          </div>
        </div>
      </div>

      <div className="cardDesktop ">
        <div className="w-100 ">
          <img src={imgDesktop} className="img-fluid" alt={imgDesktop} />
          <div className=" mx-5 mt-3  containerName">
            <p className="title-Position mb-0">{title}</p>
            <p className="name mw-100">{name}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default TeamCard;
