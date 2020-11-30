import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import './styles.css'

const StartsWithWhy = () => {
    return (
        <div>
            <Container fluid className="StartsWithWhyContainer">
                <Row>
                    <ContentLeft />
                    <Col sm="12" md="5" lg="4" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                        <ContentRight />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StartsWithWhy;