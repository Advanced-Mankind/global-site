import React from 'react'

const Content = () => {
    return (
        <div style={{ height: '100%', marginTop: '30%', marginBottom:'50%' }}>
            <p className="QuoteCaption">We’re Hiring!</p>
            <h1 className="Title">Work with us!</h1>
            <ul>
                <li className="listItem">Work from anywhere</li>
                <li className="listItem">Unique benefits</li>
                <li className="listItem">Competetive salary</li>
                <li className="listItem">$1000 annual tech bonus</li>
            </ul>
            <button style={{marginBottom:'20%'}} className="Button">LEARN MORE</button>
            <div>
                <p className="Autor">“Would love to have a quote here from a staff memeber talking about how great it was to work with us. Lorem upsum dolor un met lorem ipsum dolor un met.”</p>
            </div>
            <div>
                <p className="QuoteCaption">Shaun Davis, Senior UI Designer</p>
            </div>
        </div>
    )
}

export default Content
