import React from 'react';
import ReactDOM from 'react-dom';

import skilldata from "./skilldata";

import Splash from './components/Splash';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


ReactDOM.render(
  <main>
  <Splash />
  <About />
  <Skills skilldata={skilldata} />
  <Portfolio />
  <Contact />
  </main>,
  document.getElementById('app'));
