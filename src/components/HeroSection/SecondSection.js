import React from 'react';
import Card from './Card';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'

const SecondSection = () => {
    return (
        <Container style={{marginTop:'2%'}} >
            <Row className="justify-content-between">
                <Col sm="12" md="3" lg="3">
                    <Card icon={require('../../../static/compassDesktop.png')} headline={'Innovation'} paragraph={'Always be one step ahead. We imagine like crazy, promote freedom of expression, and inspire each other.'} />
                </Col>
                <Col sm="12" md="3" lg="3">
                    <Card icon={require('../../../static/flashDesktop.png')} headline={'Power'} paragraph={'Be confident and have what you want. Our goal is to develop a vision, live by it, and transform reality.'} />
                </Col>
                <Col sm="12" md="3" lg="3">
                    <Card icon={require('../../../static/bulbDesktop.png')} headline={'Understanding'} paragraph={'The world is understood through the analysis of information and intelligent research. Our focus is sharing that knowledge.'} />
                </Col>
                <Col sm="12" md="3" lg="3">
                    <Card icon={require('../../../static/heartDesktop.png')} headline={'Joy'} paragraph={'You only live once so enjoy the moment to the fullest. We are spontaneous, friendly, and positive.'} />
                </Col>
            </Row>
        </Container>
    )
}

export default SecondSection
