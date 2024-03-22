import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectBlock = ({ title, description, image, languages, link }) => {
    
    return (
        <div className='pjb-wrapper'>
            <h3>{title}</h3>
            <img src={image} />
            <p>{description}</p>
            <p>{languages}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
            </a>
        </div>
        )
  }
  
  export default ProjectBlock