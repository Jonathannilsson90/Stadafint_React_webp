import './css/HomePage.css'

import ContactUsSection from './components/ContactUsSection'
import HeaderSection    from './components/HeaderSection'
import ServiceSection   from './components/ServiceSection'
import ChooseUsSection  from './components/WhyChooseUs'
import HowItWorks       from './components/HowItWorks'
import NewsLetter       from './components/NewsLetterSection'

import { IHomePage } from './interfaces'


const HomePage = (props :IHomePage) => {

/*     const location = useLocation();
    const data = location.state;
    console.log('data in customer account')
    console.log(data);
  
    console.log('Data');
    console.log(data);   */
    
/*      const  onScrollToElementClickHandler =(el : string) =>{
        let element = document.querySelector('.' + el);
        console.log(element);
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }  */

    props.onLogOutClickHandler()

    //-------------------------------------------------------------------
    return (
        <div>
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <ServiceSection></ServiceSection>
            <ChooseUsSection></ChooseUsSection>
            <HowItWorks></HowItWorks>
            <NewsLetter></NewsLetter>
        </div>
    )
}
export default HomePage