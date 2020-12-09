import React from 'react'

const OurPerkSecondQuote = () => {
    return (
        <div className='ourPerkQuoteContainer'>
            <img src={require('../../../static/certificate.png')} alt='certificate'/>
            <h1 className='secondTitle'>
                Our trust committment
            </h1>
            <p className='secondParagraph'>
                We ask a lot of candidates up front because we want to be able to trust our employees 100%. We’ll leave the micromanaging to other companies.
                Our team is built of self-starters who have the skills,
                motivation and work ethic to get the job done.
            </p>
        </div>
    )
}

export default OurPerkSecondQuote
