import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default class NavigationBar extends Component {
  render() {
    return (
        <div>
          <Navbar className='nav'>
            <Navbar.Brand href="#" className='nav-home'>Home</Navbar.Brand>
            <Nav.Link href="#about" className='nav-page'>About</Nav.Link>
            <Nav.Link href="#skills" className='nav-page'>Skills</Nav.Link>
            <Nav.Link href="#experience" className='nav-page'>Experience</Nav.Link>
            <Nav.Link href="#projects" className='nav-page'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='nav-page'>Contact</Nav.Link>
          </Navbar>
        </div>
    ) } }