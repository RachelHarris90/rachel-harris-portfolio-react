import React from 'react';

const ProjectCard = ({ projectName, imageSrc, imageAlt, siteLink, repoLink }) => {
    return (
        <div className="project-card">
          <h3>{projectName}</h3>
            <img className="project-examples" src={imageSrc}/>
            <a className="button" href={siteLink}>Site</a>
            <a className="button" href={repoLink}>Repo</a>
        </div>
      )
};

export default ProjectCard;
