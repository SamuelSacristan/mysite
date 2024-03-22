import './Home.scss'
import WelcomeScreen from './WelcomeScreen'
import Skills from './Skills'
import AboutMe from './AboutMe'
import FixedMenu from './FixedMenu'

function Home() {
    return (
        <div className='home-wrapper'>
            <WelcomeScreen />
            <FixedMenu />
            <AboutMe />
            <Skills />
        </div>
        
        )
  }
  
  export default Home