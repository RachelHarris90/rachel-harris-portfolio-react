import React from 'react';

export default function Contact() {

  const contactStyle = { 'background-color': '#ffffff', border: '2px', 'border-radius': '5px', padding: '15px', 'box-shadow': '2px 2px 2px #aaaaaa', 'font-size': '20px', 'width': '100%' ,margin: '10px' };

  return (
    <div className="contact-container">
      <a name="contact"></a>
      <h1>Contact</h1>
      <div className="contact-contents">
        <div style={contactStyle}>
            <div>
                <h3>Phone number</h3>
                <a href="tel:+61419090527">+61 419 090 527</a>
            </div>
            <div>
                <h3>Github</h3>
                <a href="https://github.com/rachelharris90">RachelHarris90</a>
            </div>
            <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/harrislrachel/">HarrisLRachel</a>
            </div>
            <div>
                <h3>Resume</h3>
                <a href="./src/assets/rachel-harris-resume.pdf">Resume</a>
            </div>
        </div>
      </div>
    </div>
    );
  }
