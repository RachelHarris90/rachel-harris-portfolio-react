import React from 'react';
import Accordion from './Accordion';

const ExperienceList = () => {
  const accordionData = [
    {
      title: 'Senior Delivery lead',
      company: 'Culture Amp',
      duration: '10 months',
      content: 'Leading a cross functional team of 10 to deliver a leading Goal setting platform. Building upon existing application with legacy code, while developing a core service outside of the existing monoliths.'
    },
    {
      title: 'Small business owner',
      company: 'Metcash',
      duration: '3 years',
      content: 'Leading a team of 12 to deliver exceptional service and products to the local community. Businesses include pizza shop, coffee bar and coffee trailer.'
    },
    {
      title: 'Product manager',
      company: 'MYOB',
      duration: '9 months',
      content: 'Lead teams in the delivery of key features for clients to ensure retention of existing clients while leading the research and design of enhancments to an existing workflow. Representd the company and product at industry conferences, such as Partner Connect to 1300+ people. Prioritisation of work for 4 teams, including features, tech debt and bugs. Coaching of business analysts and coordination of department wide initiatives.'
    },
    {
      title: 'Development lead',
      company: 'MYOB',
      duration: '2 years',
      content: '6 direct reports responsible for developing and implementing a green-fields online product for accountants to manage their tax and compliance process. Leading the team to produce valuable and quality products to clients, deliver results, collaborate effectively and make data driven decisions.'
    },
    {
      title: 'Senior consultant',
      company: 'elabor8',
      duration: '1 year',
      content: 'Enabling businesses of various sizes to build more valuable and better quality software using Agile and Lean inspired practices. Using Systems Thinking and Design Thinking to provide successful software solutions. Support IT teams in their transition to an Agile environment. Identify and resolve impediments while protecting teams from disruptive external forces'
    },
    {
      title: 'Delivery manager',
      company: 'Metcash',
      duration: '8 months',
      content: 'Leading and mentoring 11 direct reports to deliver fatures to existing ERP system, to enable the business to continue to optimise their processes. Fulfilling the role of Scrum Master of multiple Scrum teams delivering valuable software for up to 8 Product Owners, with 33 people across teams.'
    },
    {
      title: 'Operations manager',
      company: 'Metcash',
      duration: '1 year',
      content: 'Responsible for the team responding and resolving support issues of all severities for the businss. Ownership of all P1, P2, P3, P4 support incidents, problems, events and changes. Management of off-shore team members, leading to increased output of >100%. as well as increasing the average number of issues resolved per month, through the introduction of kanban workflow process'
    },
    {
      title: 'Delivery lead',
      company: 'Metcash',
      duration: '10 months',
      content: 'Leading team of business analysts to assess, analyse and dseign system and process changes for the business.'
    },
    {
      title: 'Business analyst',
      company: 'Metcash',
      duration: '3+ year',
      content: 'Ownership of multiple domains including Order to Cash, Procure to Pay, Pricing, Events, Supply Chain, Accounts Receivables. Responsible for activities such as requirements elicitation, business procss analysis and data analysis. Conducted functional and regression testing, while coordinating UAT. Delivered many enhancements to the ERP product and other platforms including ordering portals and ecommerce platform'
    },
  ];

const accordionStyle = { 'background-color': '#ffffff', 'border-radius': '5px' };

  return (
    <div className="project-container">
      <a name="experience"></a>
      <h1>Experience</h1>
      <div className="accordion" style={accordionStyle}>
        {accordionData.map(({ title, company, duration,  content }) => (
          <Accordion title={title} company={company} duration={duration} content={content} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;