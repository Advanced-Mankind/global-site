import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Process = () => {
    return (
        <div style={{marginTop: '5%', marginBottom:'5%'}}>
            <Step1 
            title={'Start From the Inside Out'}
            p1={'When others start with “what they do” we begin with “why we do what we do” and drive the value of the brand in every way the products interact with the users.'}
            subtitle={'Starts with why'}
            p2={'Think about the products that are memorable. They are not there because they only meet a need. They are memorable because they speak to a reason for us to use them… they talk to that intrinsic feeling of what is our purpose.'}
            />
            <Step2 
                title={'Leverage Brand Evangelists'}
                paragraph={'Through the law of diffusion of innovation we are able to create a higher ROI on your product by leveraging the power of brand evangelist rather than mass marketing efforts with low returns.'}
            />
            <Step3 
                title={'Problem Solving'}
                paragraph={'Design is about solving business problems with people-centered design.'}
                sub1={'Research'}
                p1={'Know the Customer'}
                sub2={'Identify Gaps'}
                p2={'Understand Business & Frame the Problems'}
                sub3={'Measure'}
                p3={'Test the Solution'}
                sub4={'Design'}
                p4={'Design a Solution for the Customer'}
            />
        </div>
    )
}

export default Process
