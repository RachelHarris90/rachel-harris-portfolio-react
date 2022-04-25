import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>artJacent</h3>
        {/* <img class="site-images" src="./assets/images/artJacent.png" alt="artJacent web application"/> */}
        <a class="button" href="https://artjacent.herokuapp.com/">Site</a>
        <a class="button" href="https://github.com/jordanlrothwell/artJacent">Repo</a>
    </div>
  );
}

export default ProjectCard;
