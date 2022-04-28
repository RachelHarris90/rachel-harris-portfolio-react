import React from 'react';
import Project from '../components/Project';
import ArtJacent from '../assets/project-examples/artjacent.png';
import CodingQuiz from '../assets/project-examples/coding-quiz.png';
import EmployeeManagement from '../assets/project-examples/command-line-example.png';
import CoopedUpCooking from '../assets/project-examples/cooped-up-cooking.png';
import WeatherDashboard from '../assets/project-examples/weather-dashboard.png';
import WorkDaySchedule from '../assets/project-examples/work-day-schedular.png';
import TeamProfileGenerator
from '../assets/project-examples/team-profile-generator.png';


const Projects = () => {
  const projectData = [
    {
      projectName: 'artJacent',
      imageSrc: ArtJacent,
      siteLink: 'https://artjacent.herokuapp.com/',
      repoLink: 'https://github.com/jordanlrothwell/artJacent'
    },
    {
      projectName: 'Cooped up cooking',
      imageSrc: CoopedUpCooking,
      siteLink: 'https://oliverlkelly.github.io/cooped-up-cooking/',
      repoLink: 'https://github.com/oliverlkelly/cooped-up-cooking'
    },
    {
      projectName: 'Australian geography quiz',
      imageSrc: CodingQuiz,
      siteLink: 'https://rachelharris90.github.io/coding-quiz/',
      repoLink: 'https://github.com/RachelHarris90/coding-quiz'
    },
    {
      projectName: 'Employee tracker',
      imageSrc: EmployeeManagement,
      siteLink: 'https://github.com/RachelHarris90/employee-tracker',
      repoLink: 'https://github.com/RachelHarris90/employee-tracker'
    },
    {
      projectName: 'Day scheduler',
      imageSrc: WorkDaySchedule,
      siteLink: 'https://rachelharris90.github.io/calendar-app/',
      repoLink: 'https://github.com/RachelHarris90/calendar-app'
    },
    {
      projectName: 'Weather dashboard',
      imageSrc: WeatherDashboard,
      siteLink: 'https://rachelharris90.github.io/weather-dashboard/',
      repoLink: 'https://github.com/RachelHarris90/weather-dashboard'
    },
    {
      projectName: 'Team profile generator',
      imageSrc: TeamProfileGenerator,
      siteLink: 'https://github.com/RachelHarris90/team-profile-generator',
      repoLink: 'https://github.com/RachelHarris90/team-profile-generator'
    },
  ];

  return (
    <div className="project-container">
      <a name="projects"></a>
      
      <h1>Projects</h1>
      <div className="projects" >
        {projectData.map(({ projectName, imageSrc, siteLink, repoLink }) => (
          <Project projectName={projectName} imageSrc={imageSrc} siteLink={siteLink} repoLink={repoLink} />
        ))}
      </div>
    </div>
  );
};

export default Projects;