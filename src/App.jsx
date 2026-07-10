import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Journey from './components/Journey';
import Skills from './components/Skills';
import CTA from './components/CTA';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Expertise />
      <Journey />
      <Skills />
      <CTA />
    </>
  );
}

export default App;
