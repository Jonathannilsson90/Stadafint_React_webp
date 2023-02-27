import './HomePage.css'
import ContactUsSection from './ContactUsSection'
import Footer from './Footer'
import HeaderSection from './HeaderSection'
import NavigationMenu from './NavigationMenu'
import ServiceSection from './ServiceSection'
import ChooseUsSection from './WhyChooseUs'
import HowItWorks from './HowItWorks'


const HomePage = () => {

    const  onScrollToElementClickHandler =(el : string) =>{
        let element = document.querySelector('.' + el);
        console.log(element);
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }

    return (
        <div>
            <NavigationMenu onScrollToElementClickHandler={onScrollToElementClickHandler}></NavigationMenu>
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <ServiceSection></ServiceSection>
            <ChooseUsSection></ChooseUsSection>
            <HowItWorks></HowItWorks>
            <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer>
        </div>
    )
}
export default HomePage