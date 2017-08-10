import React, { Component } from 'react';



class Splash extends Component{
  constructor(){
    super()
    this.state = {

    }
  }


  render(){
    return (
      <section className="splash" id="splash">

        <div className="splash__title">
            <h1>Peter Markoski</h1>
            <p>Full Stack Developer</p>
        </div>
        <div id="sticky-nav" className="sticky-navigation">
          <ul className="splash__mobile">
            <li className="splash__mobile__item"><a className="contactLink" href="#"> Contact Me! </a></li>
          </ul>
          <ul className="splash__menu">
            <li className="splash__menu__item" ><a id="aboutLink" href="#"> About </a> </li>
            <li className="splash__menu__item"><a id="languagesLink" href="#"> Skills </a></li>
            <li className="splash__menu__item"><a id="portfolioLink" href="#"> Portfolio </a></li>
            <li className="splash__menu__item"><a className="contactLink" href="#"> Contact </a></li>
          </ul>
        </div>

        <div className="splash__message">
          <p> Click On The Doughnuts </p>
        </div>

      </section>
    );
  }
}

export default Splash;
