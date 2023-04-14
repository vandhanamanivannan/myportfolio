import React, { Component } from 'react'
import Pdf from '../Documents/vandhana_resume.pdf';


export default class Home extends Component {
  render() {
    return (
        <div className='intro'>
          <img className="vandy" src='vandy.png'></img>
            <h1 className = "name">Vandhana Manivannan</h1>
            <h2 className = "tagline">Full-Stack Developer | AWS Cloud Practitioner
            </h2>
            <div className='button'>
              <a className = "resumebutton" href={Pdf} target="_blank">
              <span><i class="bi bi-file-earmark-person"></i></span> Resume
              </a> &nbsp; &nbsp;
              <a className = "resumebutton" href="https://www.linkedin.com/in/vandhana-m/" target="_blank">
                <span><i class="bi bi-linkedin"></i></span> LinkedIn
              </a>
            </div>
            
        </div>
    ) } } 
