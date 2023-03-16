import '../css/WhyChooseUs.css'

import { useState } from 'react'

import { IWhyChooseUsCard } from '../interfaces';


const WhyChooseUsCard = (props: IWhyChooseUsCard) => {

    //---------------------  UseStates ----------------------------------
    const [display, setDisplay] = useState(true);

    //-------------------------------------------------------------------
    return (
        <div className='choose-us-card'
            onMouseEnter={() => setDisplay(false)}
            onMouseLeave={() => setDisplay(true)}>

            <i className={props.icon}></i>
            <div className="choose-us-content">
                {display && <p className='choose-us-title'>{props.title}</p>}
            </div>
            <div className="choose-us-text">
                <p className='choose-us-p'>{props.text}</p>
            </div>
        </div>
    )
}

export default WhyChooseUsCard