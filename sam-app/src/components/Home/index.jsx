import './Home.scss'
import WelcomeScreen from './WelcomeScreen'
import Skills from './Skills'
import AboutMe from './AboutMe'
import FixedMenu from './FixedMenu'
import FixedMail from './FixedMail'
import MyProjects from './MyProjects'

function Home() {
    return (
        <div className='home-wrapper'>
            <WelcomeScreen />
            <FixedMenu />
            <FixedMail />
            <AboutMe />
            <Skills />
            <MyProjects />
        </div>
        )
  }
  
  export default Home