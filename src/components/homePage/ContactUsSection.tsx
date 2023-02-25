import './ContactUsSection.css'

const ContactUsSection = () => {
    return (
        <div className='contact-wrapper'>
            <div className='contact-card call-us'>
            <i className="fa-solid fa-phone-volume"></i>

                <p className='contact-title'>Call us now!</p>
                <div className="contact-content">
                
                <p className='contact-text'>8-8000-123-00-00</p>
                </div>
            </div>

            <div className='contact-card open'>
            <i className="fa-solid fa-clock"></i>
            
                <p className='contact-title'>We are open every day</p>
                <div className="contact-content">
                
                <p className='contact-text'>8:00 - 21:00</p>
                </div>
            </div>

            <div className='contact-card address'>
            <i className="fa-solid fa-location-dot"></i>

                <p className='contact-title'>Our main office</p>
                <div className="contact-content">
                
                <p className='contact-text'>Drottningsgatan 1, Stockholm</p>
                </div>
            </div>            
        </div>
    )
}
export default ContactUsSection