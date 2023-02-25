import ContactUsSection from './ContactUsSection'
import Footer from './Footer'
import HeaderSection from './HeaderSection'
import './HomePage.css'
import NavigationMenu from './NavigationMenu'


const HomePage = () => {
    return (
        <div>
            <NavigationMenu></NavigationMenu>
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <Footer></Footer>
        </div>
    )
}
export default HomePage