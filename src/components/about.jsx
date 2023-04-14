import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
        <div className='about'>
          <section id="about">
          <div className="about-title">Hi, Nice to meet you.</div>
          <p className='about-content'>
            I am currently a <span className='mid-text'><i>Computer Science Grad Student</i></span> at the University of Texas at Arlington. I am a certified <span className='mid-text'><i>AWS Cloud Practitioner</i></span> and a 
            <span className='mid-text'><i> Full-stack developer </i></span> with expertise in Object-Oriented Programming using <span className='mid-text'><i>Python and JavaScript</i></span>.
            As a software engineer, my goal is to always build applications that are scalable and efficient under the hood while providing engaging
            user experiences. </p>
          </section>
        </div>
    ) } }