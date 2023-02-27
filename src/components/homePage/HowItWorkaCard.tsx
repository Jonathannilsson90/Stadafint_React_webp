import { useState } from 'react';
import './HowItWorks.css'

interface IHowItWorksCard {
info : boolean
hText : string
pText : string
num : number
}

const HowItWorksCard = (props : IHowItWorksCard) => {
    const[info, setInfo]= useState(true);

    return (
        <div className="how-card">
            <div className="how-card-number">
            <button className='circle-btn' 
                    style={{fontSize : info ? 32 : 20 }}
                    onMouseOver={() => setInfo(false)} 
                    onMouseLeave={() => setInfo(true)}>
                        <span className='circle' style={{paddingTop : info ? 40 : 50}}>{info ? props.num : "More info"}</span>
                </button>
            </div>

            <div className="how-card-content">
                <h4>{props.hText}</h4>
                <p>{props.pText}</p>
            </div>
        </div>
    )
}

export default HowItWorksCard

