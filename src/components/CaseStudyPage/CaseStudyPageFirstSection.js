import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const CaseStudyPageFirstSection = ({ imgs }) => {
    return (
        <div>
            <Container style={{ marginTop: '5%' }} className='containerDesktop'>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Col sm='12' md='8' lg='6' >
                        <h1 className='title'>Let’s build together.</h1>
                        <p>We don’t do band-aids but we don’t like to break the bank either. We value high quality and lasting relationships.</p>
                    </Col>
                    <Col className='imgDesktop'>
                        <img src={imgs[0]} alt="imgDesktop" />
                    </Col>
                    <Col sm='12' md='4'  lg='6'  className='imgTabMob'>
                        <img src={imgs[1]} alt="imgMT" className='imgTabMob' />
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '5%' }} className='containerMobile'>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Col sm='12' md='6' className='imgTabMob'>
                        <img src={imgs[1]} alt="imgMT" className='imgTabMob' />
                    </Col>
                    <Col sm='12' md='6' >
                        <h1 className='title'>Let’s build together.</h1>
                        <p>We don’t do band-aids but we don’t like to break the bank either. We value high quality and lasting relationships.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CaseStudyPageFirstSection
