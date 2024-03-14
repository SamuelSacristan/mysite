import './Home.scss'
import WelcomeScreen from './WelcomeScreen'
import Skills from './Skills'

function Home() {
    return (
        <div className='home-wrapper'>
            <WelcomeScreen />
            <Skills />
        </div>
        
        )
  }
  
  export default Home