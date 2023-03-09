import './css/HomePage.css'
import ContactUsSection from './components/ContactUsSection'
import HeaderSection from './components/HeaderSection'
import ServiceSection from './components/ServiceSection'
import ChooseUsSection from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import NewsLetter from './components/NewsLetterSection'


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
            {/* <NavigationMenu onScrollToElementClickHandler={onScrollToElementClickHandler}></NavigationMenu>  */}
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <ServiceSection></ServiceSection>
            <ChooseUsSection></ChooseUsSection>
            <HowItWorks></HowItWorks>
            <NewsLetter></NewsLetter>
            {/* <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer> */}
        </div>
    )
}
export default HomePage