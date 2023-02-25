import './HeaderSection.css'
const HeaderSection = () => {

    return (
        <div className='header-section-wrapper'>
            <div className="header-section-content-wrapper">

                <div className='header-section-content'>

                    <h1 className='header-section-title'>Stockholm's premier home cleaning service</h1>
                    <p className='header-section-text'>Hire us! Geet your home cleaned. We are a professional cleaning company offering all types od cleaning services.</p>
                </div>

                <div>
                    <button className='header-section-button'>More info</button>
                </div>
            </div>

        </div>
    )
}

export default HeaderSection