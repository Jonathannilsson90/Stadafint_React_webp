import './HomePage.css'
import ContactUsSection from './ContactUsSection'
import Footer from './Footer'
import HeaderSection from './HeaderSection'
import NavigationMenu from './NavigationMenu'
import ServiceSection from './ServiceSection'
import ChooseUsSection from './WhyChooseUs'
import HowItWorks from './HowItWorks'


const HomePage = () => {
    return (
        <div>
            <NavigationMenu></NavigationMenu>
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <ServiceSection></ServiceSection>
            <ChooseUsSection></ChooseUsSection>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </div>
    )
}
export default HomePage