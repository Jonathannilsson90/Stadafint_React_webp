import './ContactUsSection.css'

const ContactUsSection = () => {
    return (
        <div className='contact-wrapper'>
            <div className='contact-card call-us'>
                <h2 className='contact-title'>Call us now!</h2>
                <div className="contact-content">
                <i className="fa-solid fa-phone-volume"></i>
                <p className='contact-text'>8-8000-123-00-00</p>
                </div>
            </div>

            <div className='contact-card open'>
                <h2 className='contact-title'>We are open 24/7!</h2>
                <div className="contact-content">
                <i className="fa-solid fa-clock"></i>
                <p className='contact-text'>8:00 - 21:00</p>
                </div>
            </div>

            <div className='contact-card address'>
                <h2 className='contact-title'>Our main office</h2>
                <div className="contact-content">
                <i className="fa-solid fa-location-dot"></i>
                <p className='contact-text'>Drottningsgatan 1, Stockholm</p>
                </div>
            </div>            
        </div>
    )
}
export default ContactUsSection