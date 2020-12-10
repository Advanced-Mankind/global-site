import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const CareersHero = () => {
    return (
        <div>
            <Container fluid className='curveBackground'>
                <Row>
                    <Col className='imgMobile'>
                        <img src={require('../../../static/confirmMobile.png')} alt="imgMobile" />
                    </Col>
                    <Col className='imgTablet'>
                        <img src={require('../../../static/confirmTablet.png')} alt="imgTablet" />
                    </Col>
                    <Col className='imgDesktop'>
                        <img src={require('../../../static/confirmDesktop.png')} alt="imgDesktop" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CareersHero
