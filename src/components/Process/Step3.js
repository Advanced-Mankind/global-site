import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'

const Step3 = ({ title, paragraph, sub1, sub2, sub3, sub4, p1, p2, p3, p4 }) => {
    return (
        <>
            <Container style={{ marginTop: '5%' }} className='step3Desktop'>
                <Row>
                    <Col className='imgStyle'>
                        <img src={require('../../../static/03Desktop.png')} alt='imgDesktop' />
                    </Col>
                    <Col>
                        <h1 className='title' > {title} </h1>
                        <p className='paragraph' > {paragraph} </p>
                        <Row className="justify-content-between">
                            <Col lg="4" className='leftContentStep3'>
                                <div>
                                    <h6 className='subtitle'> {sub1} </h6>
                                    <p className='paragraph'> {p1} </p>
                                </div>
                                <div>
                                    <h6 className='subtitle'> {sub2} </h6>
                                    <p className='paragraph'> {p2} </p>
                                </div>
                            </Col>
                            <Col lg="4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                                <img src={require('../../../static/circleGraphDesktop.png')} alt='imgDesktop'/>
                            </Col>
                            <Col lg="4" className='rightContentStep3'>
                                <div>
                                    <h6 className='subtitle'> {sub3} </h6>
                                    <p className='paragraph'> {p3} </p>
                                </div>
                                <div>
                                    <h6 className='subtitle'> {sub4} </h6>
                                    <p className='paragraph'> {p4} </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '5%' }} className='step3Tablet'>
                <Row>
                    <Col className='imgStyle' md='3'>
                        <img src={require('../../../static/03MobileTablet.png')} alt='imgDesktop' />
                    </Col>
                    <Col md='9'>
                        <h1 className='titleTabletMobile' > {title} </h1>
                        <p className='paragraph' > {paragraph} </p>
                        <Row className="justify-content-between">
                            <Col md='4' className='leftContentStep3'>
                                <div>
                                    <h6 className='subtitle'> {sub1} </h6>
                                    <p className='paragraph'> {p1} </p>
                                </div>
                                <div>
                                    <h6 className='subtitle'> {sub2} </h6>
                                    <p className='paragraph'> {p2} </p>
                                </div>
                            </Col>
                            <Col md='4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                                <img src={require('../../../static/circleGraphTablet.png')} alt='imgDesktop'/>
                            </Col>
                            <Col md='4' className='rightContentStep3'>
                                <div>
                                    <h6 className='subtitle'> {sub3} </h6>
                                    <p className='paragraph'> {p3} </p>
                                </div>
                                <div>
                                    <h6 className='subtitle'> {sub4} </h6>
                                    <p className='paragraph'> {p4} </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '5%' }} className='step3Mobile'>
                <Row>
                    <Col className='imgStyle' sm='12'>
                        <img src={require('../../../static/03MobileTablet.png')} alt='imgDesktop' />
                    </Col>
                    <Col sm='12'>
                        <div>
                            <h1 className='titleTabletMobile' > {title} </h1>
                            <p className='paragraph'> {paragraph} </p>
                        </div>
                        <Row className="justify-content-between" style={{marginTop: '5%'}}>
                            <Col className='leftContentStep3'>
                                <div>
                                    <h6 className='subtitleMobile'> {sub1} </h6>
                                    <p className='paragraphMobile'> {p1} </p>
                                </div>
                                <div>
                                    <h6 className='subtitleMobile'> {sub2} </h6>
                                    <p className='paragraphMobile'> {p2} </p>
                                </div>
                            </Col>
                            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                                <img src={require('../../../static/circleGraphMobile.png')} alt='imgDesktop'/>
                            </Col>
                            <Col className='rightContentStep3'>
                                <div>
                                    <h6 className='subtitleMobile'> {sub3} </h6>
                                    <p className='paragraphMobile'> {p3} </p>
                                </div>
                                <div>
                                    <h6 className='subtitleMobile'> {sub4} </h6>
                                    <p className='paragraphMobile'> {p4} </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Step3
