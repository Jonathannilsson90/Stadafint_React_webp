import { useState } from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
    const[info1, setInfo1]= useState(true);
    const[info2, setInfo2]= useState(true);
    const[info3, setInfo3]= useState(true);

    let text1= info1 ? '1' : "More info";
    let text2= info2 ? '2' : "More info";
    let text3= info3 ? '3' : "More info";


    
    return (
        <div className="how-section-wrapper">
            <div className="how-section">
                <div className='how-section-title'>
                    <h2>Work process</h2>
                    <h1>How it works</h1>
                </div>
                <hr className='how-hr' />
                <div className="how-cards">

                    <div className="how-card">
                        <div className="how-card-number">      
                            <button className='circle-btn' 
                                style={{fontSize : info1 ? 32 : 20 }}
                                onMouseOver={() => setInfo1(false)} 
                                onMouseLeave={() => setInfo1(true)}>
                                    <span className='circle' style={{paddingTop : info1 ? 40 : 50}} >{info1 ? '1' : "More info"}</span>
                            </button>
                        </div>

                        <div className="how-card-content">
                            <h4 className="how-card-title">Log in or Sign up</h4>
                            <p>Become our customer and get a goog deal</p>
                        </div>
                    </div>

                    <div className='how-card-arrow'><i className="fa-solid fa-chevron-right fa-2xl"></i></div>

                    <div className="how-card">
                        <div className="how-card-number">
                        <button className='circle-btn' 
                                style={{fontSize : info2 ? 32 : 20 }}
                                onMouseOver={() => setInfo2(false)} 
                                onMouseLeave={() => setInfo2(true)}>
                                    <span className='circle' style={{paddingTop : info2 ? 40 : 50}} >{info2 ? '2' : "More info"}</span>
                            </button>
                        </div>

                        <div className="how-card-content">
                            <h4>Bok cleaning</h4>
                            <p>We're available every day of the week with cleans beginning as early as 8am.</p>
                        </div>
                    </div>

                    <div className='how-card-arrow'><i className="fa-solid fa-chevron-right fa-2xl"></i></div>

                    <div className="how-card">
                        <div className="how-card-number">
                        <button className='circle-btn' 
                                style={{fontSize : info3 ? 32 : 20 }}
                                onMouseOver={() => setInfo3(false)} 
                                onMouseLeave={() => setInfo3(true)}>
                                    <span className='circle' style={{paddingTop : info3 ? 40 : 50}} >{info3 ? '3' : "More info"}</span>
                            </button>
                        </div>
                        <div className="how-card-content">
                            <h4>Enjoy Cleaniness</h4>
                            <p>Keep your place always healthy, clean, and fresh.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks