import './Skills.scss'
import jsLogo from '../../../images/Unofficial_JavaScript_logo_2.svg.png'
import reactLogo from '../../../images/React-icon.svg.png'
import nodeLogo from '../../../images/nodejs-icon.svg'
import expressLogo from '../../../images/expressjs_logo_icon_169185.png'
import mongodbLogo from '../../../images/mongodb.svg'
import sassLogo from '../../../images/2560px-Sass_Logo_Color.svg.png'
import githubLogo from '../../../images/Octicons-mark-github.svg'
import gitLogo from '../../../images/Git_icon.svg.png'
import ChapterTitle from '../ChapterTitle'

function Skills() {
    
    return (
        <div className='sk-wrapper'>
            <ChapterTitle number="02." name="Compétences" />
            <div className='skb-wrapper'>
                <div className='frontend'>
                    <img id="React logo" src={reactLogo} alt="React Logo" />
                    <img id="JS logo" src={jsLogo} alt="JavaScript Logo" />
                </div>
                <div className='backend'>
                    <img id="Node logo" src={nodeLogo} alt="Node.js Logo" />
                    <img id="Express logo" src={expressLogo} alt="Express.js Logo" />
                    <img id="MongoDB logo" src={mongodbLogo} alt="MongoDB Logo" />
                </div>
                <div className='tools'>
                    <img id="Git logo" src={gitLogo} alt="Git Logo" />
                    <img id="Github logo" src={githubLogo} alt="Github Logo" />
                    <img id="Sass logo" src={sassLogo} alt="Sass Logo" />
                </div>
            </div>    
        </div>
    );
}

export default Skills;
