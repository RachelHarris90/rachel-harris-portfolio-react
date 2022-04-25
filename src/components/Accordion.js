import React, { useState } from 'react';

const Accordion = ({ title, company, duration, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title-row">
          <div>{title}</div>
          <div>{duration}</div>
        </div>
        <div className="accordion-company">{company}</div>
        <div className="accordion-control">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
        <div className="accordion-content">   {content}
        </div>}
    </div>
  );
};

export default Accordion;