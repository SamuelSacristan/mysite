import './Home.scss'
import WelcomeScreen from './WelcomeScreen'
import Skills from './Skills'
import AboutMe from './AboutMe'
import FixedMenu from './FixedMenu'
import FixedMail from './FixedMail'
import MyProjects from './MyProjects'
import ContactForm from './ContactForm'

function Home() {
    return (
        <div className='home-wrapper'>
            <WelcomeScreen />
            <FixedMenu />
            <FixedMail />
            <AboutMe />
            <Skills />
            <MyProjects />
            <ContactForm />
        </div>
        )
  }
  
  export default Home