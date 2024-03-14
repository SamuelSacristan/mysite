import './Skills.scss'
import jsLogo from '../../../images/Unofficial_JavaScript_logo_2.svg.png'
import reactLogo from '../../../images/React-icon.svg.png'
import nodeLogo from '../../../images/nodejs-icon.svg'
import expressLogo from '../../../images/expressjs_logo_icon_169185.png'
import mongodbLogo from '../../../images/mongodb.svg'

function Skills() {
    
    return (
        <div className='sk-wrapper'>
            <h2>Mes compétences</h2>
            <div className='frontend'>
                <div className='background-rectangle'></div> {/* Add the background rectangle for frontend */}
                <img id="JS logo" src={jsLogo} alt="JavaScript Logo" />
                <img id="React logo" src={reactLogo} alt="React Logo" />
            </div>
            <p>Front-end</p>
            <p>Back-end</p>
            <div className='backend'>
                <div className='background-rectangle'></div> {/* Add the background rectangle for backend */}
                <img id="Node logo" src={nodeLogo} alt="Node.js Logo" />
                <img id="Express logo" src={expressLogo} alt="Express.js Logo" />
                <img id="MongoDB logo" src={mongodbLogo} alt="MongoDB Logo" />
            </div>
        </div>
    );
}

export default Skills;
