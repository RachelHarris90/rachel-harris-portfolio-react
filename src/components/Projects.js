import React from 'react';
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectData = [
    {
      projectName: 'artJacent',
      imageSrc: `"./assets/project-examples/artjacent.png"`,
      siteLink: `https://artjacent.herokuapp.com/`,
      repoLink: `"https://github.com/jordanlrothwell/artJacent"`
    },
    {
      projectName: 'Cooped up cooking',
      imageSrc: `https://github.com/oliverlkelly/cooped-up-cooking/raw/main/assets/images/recipe-finder.png`,
      siteLink: `"https://oliverlkelly.github.io/cooped-up-cooking/"`,
      repoLink: `"https://github.com/oliverlkelly/cooped-up-cooking"`
    },
    {
      projectName: 'Team profile generator',
      imageSrc: `"./assets/images/webpage-example.png"`,
      siteLink: `"https://github.com/RachelHarris90/team-profile-generator"`,
      repoLink: `"https://github.com/RachelHarris90/team-profile-generator"`
    },
    {
      projectName: 'Australian geography quiz',
      imageSrc: `"./assets/images/coding-quiz.png" alt="Coding quiz site"`,
      siteLink: `"https://rachelharris90.github.io/coding-quiz/"`,
      repoLink: `"https://github.com/RachelHarris90/coding-quiz"`
    },
    {
      projectName: 'Employee tracker',
      imageSrc: `"./assets/images/initial-prompts.png"`,
      siteLink: `"https://github.com/RachelHarris90/employee-tracker"`,
      repoLink: `"https://github.com/RachelHarris90/employee-tracker"`
    },
    {
      projectName: 'Day scheduler',
      imageSrc: `"./assets/images/work-day-scheduler.png"`,
      siteLink: `"https://rachelharris90.github.io/calendar-app/"`,
      repoLink: `"https://github.com/RachelHarris90/calendar-app"`,
    },
    {
      projectName: 'Weather dashboard',
      imageSrc: `"./assets/images/weather-dashboard.png"`,
      siteLink: `"https://rachelharris90.github.io/weather-dashboard/`,
      repoLink: `"https://github.com/RachelHarris90/weather-dashboard"`
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects" >
        {projectData.map(({ projectName, imageSrc, siteLink, repoLink }) => (
          <ProjectCard projectName={projectName} imageSrc={imageSrc} siteLink={siteLink} repoLink={repoLink} />
        ))}
      </div>
    </div>
  );
};

export default Projects;