import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import skilldata from "./skilldata";

import Splash from './components/Splash';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


class Main extends Component{
  constructor(props){
    super(props)
  }


  render(){

    return(
      <main>
      <Splash />
      <About />
      <Skills skilldata={skilldata} />
      <Portfolio />
      <Contact />
      </main>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));
