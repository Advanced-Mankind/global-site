import React from 'react';
import { Col } from 'react-bootstrap';

const ContentLeft = () => {
    return (
        <div>
            <Col>
                <img src={require('../../../static/illustrationMobile.png')} alt='Ilustration' className="imageMobile"/>
            </Col>
            <Col>
                <img src={require('../../../static/illustrationTablet.png')} alt='Ilustration' className="imageTablet"/>
            </Col>
            <Col>
                <img src={require('../../../static/illustrationDesktop.png')} alt='Ilustration' className="imageDesktop"/>
            </Col>
        </div>
    )
}

export default ContentLeft
