import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OurPerkQuote from './OurPerkQuote';
import OurPerksCard from './OurPerksCard';
import OurPerkSecondQuote from './OurPerkSecondQuote';

const OurPerks = () => {
    return (
        <Container>
            <Row style={{ marginTop: '5%' }}>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/globe-2.png')}
                        headline={'Work From Anywhere'}
                        paragraph={'When we say remote we mean it. We trust our employees and know they can and will deliver exceptional work from wherever they choose.'}
                    />
                </Col>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/shield.png')}
                        headline={'Benefits & Perks'}
                        paragraph={'We make our team and their families a priority, from affordable Health, Dental and Vision benefits to vacation and technology bonuses.'}
                    />
                </Col>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/book-open.png')}
                        headline={'Continuing Education'}
                        paragraph={'Being sharp and on top of our game is key. To stay in the know in our industry means providing continuing education opportunities to our team.'}
                    />
                </Col>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/weight.png')}
                        headline={'Wellness Programs'}
                        paragraph={' Healthy means mind, body, and soul. Our health benefits are accompanied by Plush Care, Classpass, Maven, Calm, and Ginger for overall wellness.'}
                    />
                </Col>
            </Row>
            <Row>
                <OurPerkQuote />
            </Row>
            <Row style={{ marginTop: '5%' }}>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/pie-chart.png')}
                        headline={'401K'}
                        paragraph={'We are invested in our employees and offer a 401(k) because when you feel your future is secure, you are more at ease to focus on your work.'}
                    />
                </Col>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/monitor.png')}
                        headline={'Sweet Tech'}
                        paragraph={'We offer all the tools and programs to get the job done, and on top of that we give a $1,000 tech allowance every 12 months.'}
                    />
                </Col>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/briefcase.png')}
                        headline={'Unlimited Vacation'}
                        paragraph={'We need our team to be happy, imaginative, rested and recharged to meet high expectations. To do that, take the time you need to decompress and relax.'}
                    />
                </Col>
                <Col sm="12" md="6" lg="6">
                    <OurPerksCard
                        icon={require('../../../static/calendar.png')}
                        headline={'Yearly Retreats'}
                        paragraph={'We get together to connect outside of our remote offices and plan our year. We’re in this as a team, and want to hear the team’s voice.'}
                    />
                </Col>
            </Row>
            <Row>
                <OurPerkSecondQuote />
            </Row>
        </Container>
    )
}

export default OurPerks
