import React from 'react';

const Partners = ({ imgs }) => {

    const PartnerContainer = {
        width: '90%',
        heeight: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    return (
        <div style={PartnerContainer}>
            {
                imgs.map((img, index) => (
                    <img src={img} alt={index} key={index}/>
                ))
            }
        </div>
    )
}

export default Partners;