import React, { Component } from "react";
import './App.css';

import NavigationBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component  {
  render() {
    return (
    <main>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  ); }
}

export default App;
