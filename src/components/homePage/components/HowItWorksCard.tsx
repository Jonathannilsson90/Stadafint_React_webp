import '../css/HowItWorks.css'

import { useState }        from 'react';
import { Link }            from 'react-router-dom';
import { IHowItWorksCard } from '../interfaces';


const HowItWorksCard = (props : IHowItWorksCard) => {
    
    //---------------------  UseStates ----------------------------------
    const[info, setInfo]= useState(true);

    let el = document.querySelector('.how-card');
    el?.classList.add('how-card' + props.num);

    //-------------------------------------------------------------------
    const onScrollToTopHandler = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
    }

    //-------------------------------------------------------------------
    return (
        <>
            <div className= 'how-card' style={{marginTop : (props.num===1 || props.num===3) ? 100 : 10 }}>
            <div className="how-card-number">

            <Link to= {"/login"} onClick={onScrollToTopHandler}>
                <button className='circle-btn' 
                    style={{fontSize : info ? 32 : 20 }}
                    onMouseOver={() => setInfo(false)} 
                    onMouseLeave={() => setInfo(true)}>
                        <span className='circle' 
                        style={{paddingTop : info ? 40 : 50}}>
                        {info ? props.num : props.circleText}</span></button></Link>
                        
            </div>

            <div className="how-card-content">
                <h4>{props.hText}</h4>
                <p>{props.pText}</p>
            </div>
        </div>
        </>

    )
}

export default HowItWorksCard

