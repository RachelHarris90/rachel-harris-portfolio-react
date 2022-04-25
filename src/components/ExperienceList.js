import React from 'react';
import Accordion from './Accordion';

const ExperienceList = () => {
  const accordionData = [
    {
      title: 'Delivery lead',
      content: `Achievments...`
    },
    {
      title: 'Small business owner',
      content: `Achievments...`
    },
    {
      title: 'Product manager',
      content: `Achievments...`
    },
    {
      title: 'Development lead',
      content: `Achievments...`
    },
    {
      title: 'Senior consultant',
      content: `Achievments...`
    },
    {
      title: 'Delivery manager',
      content: `Achievments...`
    },
    {
      title: 'Delivery manager',
      content: `Achievments...`
    },
  ];

const containerStyle = { 'background-color': '#ffffff' };

  return (
    <div className="experience-list" style={containerStyle}>
      <h1>Experience</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;