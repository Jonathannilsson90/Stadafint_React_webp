import './ServiceSection.css'
import BasicCleaning from '../images/basic-cleaning.png'
import TopCleaning from '../images/top-cleaning.png'
import DiamondCleaning from '../images/dimond-cleaning.png'
import WindowCleaning from '../images/window-cleaning.png'

const ServiceSection = () => {
    const props = [
        {
            title: "What we do",
            text: 'Basic Cleaning is professional service on a budget.'
                + 'Like the name suggests, this service doesn’t include'
                + 'everything, just the things that are essential to maintaining'
                + 'a clean, comfortable home.',
            image: BasicCleaning
        },
        {
            title: 'Top cleaning',
            text: 'Basic Cleaning is professional service on a budget. Like the'
                + 'name suggests, this service doesn’t include everything, just the'
                + 'things that are essential to maintaining a clean, comfortable home.',
            image: TopCleaning
        },
        {
            title: 'Dimond Cleaning',
            text: 'Diamond Cleaning is a servise exclusively delivered by our company.'
                + ' Our Dimond option includes not only all of Top Cleaning, but'
                + ' also an expanded list of chores to be done every time.',
            image: DiamondCleaning
        },
        {
            title: 'Window cleaning',
            text: 'We deliver professional window cleaning at fixed prices and'
                + 'with a quality guarantee, so'
                + 'that you can spend your time and energy on things that are warmer'
                + 'around your heart.',
            image: WindowCleaning
        }
    ]

    return (
        <section className='offered-services-section-wrapper'>
            <div className='offered-services-section'>
                <div className='offered-services-section-title'>
                    <h2>What we do</h2>
                    <h1>Offering high quality cleaning services <br /><strong>at affordable prices</strong></h1>
                </div>
                <hr />

                <div className='offered-services-section-content'>
                    {props.map((card) =>
                    (
                        <div className='offered-services-card'>
                            <div className='offered-services-image'>
                                <img className='servise-image' src={card.image} />
                            </div>
                            <div className='offered-services-text'>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                            <button className='more-info'>More info</button>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )

}
export default ServiceSection