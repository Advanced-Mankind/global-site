import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'

const FirsSection = () => {
    return (
        <Container>
            <Row>
                <Col sm="12" md="7" lg="6">
                    <h1 className="title">Simple Approach & Uncomplicated Process</h1>
                    <p className="paragraph">
                        The Advanced Mankind approach is no nonsense. We aim to understand our partners business, learn through research what it will take to get to the next level, and build tools and website features that go beyond today’s expectations.
                    </p>
                    <ul className="paragraph">
                        <li>Solve for the business</li>
                        <li>Design for the user </li>
                        <li>Deliver inspiring and informative work</li>
                    </ul>
                </Col>
                <Col sm="0" md="5" lg="6" className="imageContainer" >
                    <img src={require('../../../static/homeWorkspace.png')} alt="homeWorkspace" />
                </Col>
            </Row>
        </Container>
    )
}

export default FirsSection
