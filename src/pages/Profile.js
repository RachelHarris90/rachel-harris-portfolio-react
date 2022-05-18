import React from 'react';
import ProfileImage from '../assets/rachel-harris-portrait.jpeg'

export default function Profile() {

  const profileStyle = { 'backgroundColor': '#ffffff', border: '2px', 'borderRadius': '5px', padding: '15px', 'boxShadow': '2px 2px 2px #aaaaaa', 'fontSize': '20px'};

  return (
    <div className="profile-container">
      <a name="profile"></a>
      <h1>About me</h1>
      <div className="profile-contents">
        <img className="profile-image" src={ProfileImage}></img>
        <p className="profile-content" style={profileStyle}>
          I've been working with software since 2010. I've worked as Business Analyst, Product Manager, Development Lead and currently work as a Delivery Lead for an Australian tech company.
          <br></br>
          <br></br>
          I love how scalable software is and how we can use it to solve problems and create opportunities for people and organisations.
          <br></br>
          <br></br>
          Now I'm learning how to code in a 24 week long coding bootcamp, to enable myself to become more self-sufficient and to open up more opportunities for my future. 
          <br></br>
          <br></br>
          Have a look around and reach out if anything here interests you.
        </p>
      </div>
      
    </div>
    );
  }
