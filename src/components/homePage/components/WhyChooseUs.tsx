import '../css/WhyChooseUs.css'

import WhyChooseUsCard from './WhyChooseUsCard';

const ChooseUsSection = () => {

    //-------------------------------------------------------------------
    return (
        <div className='choose-us-section-wrapper'>

            <WhyChooseUsCard
                icon={"fa-solid fa-people-group fa-2xl"}
                title={'Expert Team'}
                text={'We have 15 years of cleaning experience serving residential and commercial customers nationwide.'}
            ></WhyChooseUsCard>

            <div
                className="why-vertical-line-1">
            </div>

            <WhyChooseUsCard
                icon={"fa-solid fa-thumbs-up fa-2xl"}
                title={'100% Satisfaction'}
                text={'We have cleaned all kinds of different types of flooring, carpets, counters and other materials.'}
            ></WhyChooseUsCard>

            <div
                className="why-vertical-line-2">
            </div>

            <WhyChooseUsCard
                icon={"fa-solid fa-leaf fa-2xl"}
                title={'Eco-friendly'}
                text={'We bring only eco-friendly, organic and none-toxic cleaning supplies.'}
            ></WhyChooseUsCard>

            <div
                className="why-vertical-line-3">
            </div>

            <WhyChooseUsCard
                icon={"fa-solid fa-piggy-bank fa-2xl"}
                title={'Competitive Prices'}
                text={'Our cleaning prices start at $104 for homes and $94 for apartments.'}
            ></WhyChooseUsCard>
        </div>
    )
}
export default ChooseUsSection