import '../css/ServiceSection.css'

import BasicCleaning   from '../../../assets/basic-cleaning.png'
import TopCleaning     from '../../../assets/top-cleaning.png'
import DiamondCleaning from '../../../assets/diamond-cleaning.png'
import WindowCleaning  from '../../../assets/window-cleaning.png'

const ServiceSection = () => {
    
    const props = [
        {
            id: 1,
            title: "Basic Cleaning",
            text: 'Basic Cleaning is professional service on a budget.'
                + ' Like the name suggests, this service doesn’t include'
                + ' everything, just the things that are essential to maintaining'
                + ' a clean, comfortable home.',
            image: BasicCleaning,
        },
        {
            id: 2,
            title: 'Top Cleaning',
            text: 'Our company delivers a Top Cleaning service that covers '
                + ' all the areas that are traditionally covered by Basic Cleaning'
                + ' and some additional areas, inside and outside. ',
            image: TopCleaning
        },
        {
            id: 3,
            title: 'Diamond Cleaning',
            text: 'Diamond Cleaning is a servise exclusively delivered by our company.'
                + ' Our Dimond option includes not only all of Top Cleaning, but'
                + ' also an expanded list of chores to be done every time.',
            image: DiamondCleaning
        },
        {
            id: 4,
            title: 'Window Cleaning',
            text: 'We deliver professional window cleaning at fixed prices and'
                + 'with a quality guarantee, so'
                + ' that you can spend your time and energy on things that are warmer'
                + ' around your heart.',
            image: WindowCleaning
        }
    ]
    
    //-------------------------------------------------------------------   
    const oneCard = props.map((card) =>
    (
        <div key={card.id} className='offered-services-card'>
            <div className='offered-services-image'>
                <img className='servise-image' src={card.image} alt='service'/>
            </div>
            <div className='offered-services-text'>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
            </div>
            <button className='more-info'>More info</button>
        </div>
    ))

    //-------------------------------------------------------------------  
    return (
        <section className='offered-services-section-wrapper'>
            <div className='offered-services-section'>
                <div className='offered-services-section-title'>
                    <h2>What we do</h2>
                    <h1>Offering high quality cleaning services <br /><strong>at affordable prices</strong></h1>
                </div>
                <hr className='service-hr'/>

                <div className='offered-services-section-content'>
                    {oneCard}
                </div>
            </div>

        </section>
    )

}
export default ServiceSection