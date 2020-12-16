import React from 'react';
import './styles.css'

const CircleImage = ({img}) => {
    return (
        <div className="iconStyle">
            <img src={img} alt={img} />
        </div>
    )
}

export default CircleImage
