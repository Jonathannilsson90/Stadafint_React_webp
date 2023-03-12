import '../css/HeaderSection.css'

const HeaderSection = () => {

    //-------------------------------------------------------------------
    return (
        <div className='header-section-wrapper'>
            <div className="header-section-content-wrapper">
                <div className='header-section-content'>
                    <p className='header-section-welcome'> WELCOME TO OUR WEBSITE </p>
                    <h1 className='header-section-title'>Stockholm's premier home cleaning service</h1>
                    <p className='header-section-text'>Hire us! Get your home cleaned. We are a professional cleaning company offering all types of cleaning services.</p>
                </div>
                <div className='header-section-button-wrapper'>
                    <button className='header-section-button'>More info</button>
                </div>
            </div>

        </div>
    )
}

export default HeaderSection