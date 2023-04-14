import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className='experience'>
          <section id="experience">
            < div className='exp-title'>Where I've Worked</div>
            <div className='exp-card'>
              <img src="yaane.png"></img>
              <div className="exp-name">Associate Software Engineer</div>
              <p><i>Feb 2020 - May 2021</i></p>
                <p className='exp-desc'>Engineered and maintained significant features of the client-facing web application using JavaScript, React, Flask, HTML/CSS</p>
                <p className='exp-desc'>Contributed extensively to image optimization of client websites using minified JS and CSS, which reduced page load times by up to 30%</p>
                <p className='exp-desc'>Engaged with clients weekly, offering technological expertise and knowledge.</p>
                <p className='exp-desc'>Collaborated with an agile team to transfer the outdated company website to React, Sass, HTML5</p>
            </div>

            <div className='exp-card'>
              <img src="dclicks.png" className='dc-img'></img>
                <div className="exp-name">Software Engineer Intern</div>
                <p><i>May 2019 - Dec 2019</i></p>
                  <p className='exp-desc'>Translated UX wireframes and mockups from the design team into interactive and responsive features by utilizing HTML/CSS and JavaScript.</p>
                  <p className='exp-desc'>Designed HTML email templates that resulted in an approximate 25% increase in email click-through rates (CTRs)</p>
            </div>

            <div className='exp-card'>
              <img src="au.png" className='au-img'></img>
                <div className="exp-name">Student Assistant</div>
                <p><i>Jan 2016 - Apr 2019</i></p>
                  <p className='exp-desc'>Conducted classes for  CS 6202 (Programming & Data Structures I) and Facilitated laboratory sessions for CS 6212 (Programming & Data Structures Laboratory)</p>
                  <p className='exp-desc'>Mentored students with their projects and soft-skills </p>
            </div>
          </section>
        </div>
    ) } }