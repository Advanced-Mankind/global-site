import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css';

const OpenPosition = () => {
    return (
        <div className='openPositionContainer'>
            <Container>
                <Row className="justify-content-between" style={{ display: 'flex', alignItems: 'center' }} >
                    <Col sm="8" md="8" lg="8">
                        <h1 className='title'>Get to Work</h1>
                        <p className='mainParagraph'>Our culture is relentlessly positive, with autonomy. It’s uncomplicated, with passion for building the future of digital products. Get started with the application process today if you are a fit for Advanced Mankind.</p>
                    </Col>
                    <Col sm="4" md="3" lg="2">
                        <Button style={{ borderRadius: '34px', backgroundColor: '#DEE2E8', color: '#222B45', fontSize: '18px' }} >
                            See Positions
                        </Button>
                    </Col>
                </Row>
                <Row style={{marginTop:'5%'}}>
                    <Col lg="12">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div className='circle'>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <p className='quote'>“Would love to have a quote here from a staff memeber talking about how great it was to work with us. Lorem upsum dolor un met lorem ipsum dolor un met.”</p>
                                <h3 className='caption'>Shaun Davis, Senior UI Designer</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OpenPosition
