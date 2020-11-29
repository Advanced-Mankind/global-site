import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'
import Content from './Content';

const WereHiring = () => {
    return (
        <div>
            <Container className="wereHiringMobile">
                <Row>
                    <Col>
                        <Content />
                    </Col>
                </Row>
            </Container>
            <Container className="wereHiringTablet">
                <Content />
            </Container>
            <Container className="wereHiringTablet">
                <Content />
            </Container>
        </div>
    )
}

export default WereHiring
