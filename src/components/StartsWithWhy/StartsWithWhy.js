import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../theme/index.module.css";

const StartsWithWhy = () => {

    const StartsWithWhyContainer = {
        backgroundColor: '#3333FF',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'row',
        width: '70%'
    }

    const ContentRight = {
        display: 'flex',
        flexDirection: 'column',
    }

    const Title = {
        color: '#FFFFFF',
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: 0,
        lineWeight: '48px',
        fontFamily: 'Open Sans'
    }

    const Paragraph = {
        color: '#FFFFFF',
        fontFamily: "Open Sans",
        fontSize: '12px',
        letterSpacing: 0,
        lineHeight: '20px'
    }

    const Button = {
        height: '40px',
        width: '132px',
        borderRadius: '34px',
        backgroundColor: '#EDF1F7',
        fontSize: '14px',
    }

    const Quote = {
        color: '#FFFFFF',
        fontFamily: "Open Sans",
        fontSize: '12px',
        fontStyle: 'italic',
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '16px'
    }

    const Caption = {
        color: '#FFFFFF',
        fontFamily: "Open Sans",
        fontSize: '12px',
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '16px'
    }

    return (
        <Container  style={StartsWithWhyContainer}>
            <Row>
                <Col lg="8" className={styles.imageDesktop}>
                    <img src={require('../../static/Illustration.png')} alt='Ilustration' />
                </Col>
                <Col sm="12" md="3  " lg="7" className={styles.imageTablet}>
                    <img src={require('../../static/IllustrationTablet.png')} alt='Ilustration' />
                </Col>
                <Col lg="5" style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
                    <div>
                        <h2 style={Title}>We believe. We dream. We build.</h2>
                        <p style={Paragraph}>Why do we approach our work with gut feelings, efficient methods, and creative problem solving? We do it because we aim to harness tomorrow’s technology our business partners need and their users want.</p>
                        <button style={Button}>LEARN MORE</button>
                        <div>
                            <p style={Quote}>“Would love to have a quote here from a client for happy customer talking about how great it was to work with us. Lorem upsum dolor un met lorem ipsum dolor un met.”</p>
                        </div>
                        <div>
                            <p style={Caption}>Paul Demark, VP of Company Name</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StartsWithWhy;