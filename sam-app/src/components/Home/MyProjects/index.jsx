import React from 'react';
import './MyProjects.scss';
import ChapterTitle from '../ChapterTitle';
import projects from '../../../datas/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function MyProjects() {

    return (
        <div id='projects' className='pj-wrapper'>
            <ChapterTitle number="03." name="Projets" />
            {projects.map((project) => (
                <div className='pjb-wrapper' key={project.title}>
                    <h3>{project.title}</h3>
                    <img src={`/projectimages/${project.image}`} alt="Project" />
                    <div className='pjbd-wrapper'>
                        <div className="description">
                            <p>{project.description}</p>
                        </div>
                        <div className="languages">
                            {project.languages.map((language, index) => (
                                <React.Fragment key={index}>
                                    <span>{language}</span>
                                    {index !== project.languages.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyProjects;
