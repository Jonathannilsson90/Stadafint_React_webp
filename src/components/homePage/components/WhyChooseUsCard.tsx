import { useState } from 'react'
import '../css/WhyChooseUs.css'
import { IWhyChooseUsCard } from '../interfaces';

/* interface IWhyChooseUsCard {
    text    : string
    title   : string
    icon    : string
    //display :boolean
} */

const WhyChooseUsCard = (props : IWhyChooseUsCard) => {

    const [display, setDisplay] = useState(true);


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