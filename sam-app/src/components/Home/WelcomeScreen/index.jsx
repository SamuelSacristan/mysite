import './WelcomeScreen.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function WelcomeScreen() {
    
    return (
        <div className='ws-wrapper'>
            <p>Bonjour ! Je suis</p>
            <h1>Samuel Sacristan</h1>
            <div className='text-wrapper'>
                <h2>Développeur web</h2>
                <p>Bienvenue sur mon site ! Développeur web passionné basé sur Bordeaux, je suis là pour vous offrir des solutions web sur mesure, alliant passion, expertise et créativité. Explorez mon site pour découvrir ce que je peux faire pour vous.</p>
            </div>
            <FontAwesomeIcon className='plus1' icon={faPlus} />
            <FontAwesomeIcon className='plus2' icon={faPlus} />
            <FontAwesomeIcon className='plus3' icon={faPlus} />
            <FontAwesomeIcon className='plus4' icon={faPlus} />
        </div>
        )
  }
  
  export default WelcomeScreen