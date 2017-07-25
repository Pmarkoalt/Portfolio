import React, { Component } from 'react';
import Modal from 'react-modal';

import SVGInline from 'react-svg-inline';

import amp from '../../../../images/amplifier.svg';
import hm from '../../../../images/HM.svg';

const customStyles = {

  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 100
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}


class Portfolio extends Component{
  constructor() {
    super();
    this.state = {
      hsModal: false,
      pbModal: false,
      bsModal: false,
      wtwModal: false,
      ybModal: false,
      hmModal: false,
    }
    this.hsActiveModal = this.hsActiveModal.bind(this);
    this.pbActiveModal = this.pbActiveModal.bind(this);
    this.bsActiveModal = this.bsActiveModal.bind(this);
    this.wtwActiveModal = this.wtwActiveModal.bind(this);
    this.ybActiveModal = this.ybActiveModal.bind(this);
    this.hmActiveModal = this.hmActiveModal.bind(this);
    this.hsTest = this.hsTest.bind(this);
  }

  hsActiveModal() {
    if (this.state.hsModal === false){this.setState({hsModal: true})}
    else{this.setState({hsModal: false})}
  }
  hsTest(){this.setState({hsModa:false})}
  pbActiveModal() {
    if (this.state.pbModal === false){this.setState({pbModal: true})}
    else{this.setState({pbModal: false})}
  }
  bsActiveModal() {
    if (this.state.bsModal === false){this.setState({bsModal: true})}
    else{this.setState({bsModal: false})}
  }
  wtwActiveModal() {
    if (this.state.wtwModal === false){this.setState({wtwModal: true})}
    else{this.setState({wtwModal: false})}
  }
  ybActiveModal() {
    if (this.state.ybModal === false){this.setState({ybModal: true})}
    else{this.setState({ybModal: false})}
  }
  hmActiveModal() {
    if (this.state.hmModal === false){this.setState({hmModal: true})}
    else{this.setState({hmModal: false})}
  }




    render(){
    return(
			<section className="portfolio table" id="portfolio">
				<h1> PORTFOLIO </h1>
				<div className="port">
						<div onClick={this.hsActiveModal} className="port__item" id="headshoppe" data-aos="fade-up">
							<p className="port__item__text"> Headshoppe </p>
                <video id="hsvid" playsInline autoPlay muted loop>
                  <source src="./images/headshoppe.mp4" type="video/mp4"/>
                </video>
						</div>
            <Modal
              isOpen={this.state.hsModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.hsActiveModal}
              className="port__modal"
              >
                <img id="hsLogo" className="port__modal__text" src="./images/headshoppe.png" />
                <p className="port__modal__text"> Headshoppe is a website designed for the record label 1432R and their art collective Extended Family. The website acts a base for the label's online store, blog, and podcast. </p>
                <div className="modalLinks">
                  <a href="https://www.headshoppe.net/" target="_blank"><img className="port__modal__svg" src="images/devicons/www.svg" /> </a>
                  <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.hsActiveModal}/>
              </Modal>

            <div onClick={this.pbActiveModal} className="port__item" id="public" data-aos="fade-up">
              <p className="port__item__text publicText"> PUBLIC </p>
              <p className="port__item__text publicText" id="publicText2"> パブリック </p>
              <video id="pbvid" playsInline autoPlay muted loop>
                <source src="./images/public.webm" type="video/webm"/>
              </video>
            </div>
            <Modal
              isOpen={this.state.pbModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.pbActiveModal}
              className="port__modal"
              >
                <h1 style={{fontSize: 30, fontFamily: 'Cinzel', letterSpacing: -.3, fontWeight: 100, marginBottom: 20}}> PUBLIC.GROUP </h1>
                <p className="port__modal__text"> Public Group is a design firm I work for assisting in web development and sound design. This firm's website is a recent assignment of mine</p>
                <div className="modalLinks">
                  <a href="http://publicstudio.ml/" target="_blank"><img className="port__modal__svg" src="images/devicons/www.svg" /> </a>
                  <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.pbActiveModal}/>
              </Modal>

						<div onClick={this.bsActiveModal} className="port__item" id="bandspace" data-aos="fade-up">
              <SVGInline className="bssvg" svg={amp} />
							<p className="port__item__text"> Bandspace </p>
						</div>
            <Modal
              isOpen={this.state.bsModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.bsActiveModal}
              className="port__modal"
              >
                <p className="port__modal__header"> BandSpace </p>
                <p className="port__modal__text"> BandSpace is a conceptual peer to peer reviewing website developed with React, Redux, and MongoDB. The concept of the platform is to give working musicians a space to vent grievances with owners of venues and vice versa. The goal of the app is to create transparency in a field that lacks it and establish a frame work for peer to peer "review" websites for implementation of a groups feature. </p>
                <div className="modalLinks">
                  <a href="https://band-space.herokuapp.com/" target="_blank"><img className="port__modal__svg" src="images/devicons/www.svg" /> </a>
                  <a href="https://github.com/rdhenderson/project-3" target="_blank"> <img className="port__modal__svg" src="images/devicons/github-original.svg" /> </a>

                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.bsActiveModal}/>
              </Modal>

						<div onClick={this.wtwActiveModal} style={{backgroundColor: "grey"}} className="port__item" id="whatToWatch" data-aos="fade-up">
							<p className="port__item__text" id="wtwText"> What to Watch </p>
						</div>
            <Modal
              isOpen={this.state.wtwModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.wtwActiveModal}
              className="port__modal"
              >
                <h2 id="wtwText" style={{textAlign: "left"}}> What To Watch </h2>
                <p className="port__modal__text"> What to Watch is a movie finder app powered by the Indico text and image analysis API and the Moviedb API. Using a picture of your face taken from your webcam and a few writing prompts What to Watch analyzes your mood and preferences to find a movie to suit your needs. The project is currently being refactored to incorporate the Netflix API and Angular for speed and more precise results. </p>
                <div className="modalLinks">
                  <img className="port__modal__svg" src="images/devicons/www-unavailable.svg" />
                  <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.wtwActiveModal}/>
              </Modal>

						<div onClick={this.ybActiveModal} className="port__item" id="yoBrew" data-aos="fade-up">
							<p className="port__item__text"> Yo Brew! </p>
              <img id="yobrew" src="images/yobrew.jpg" />
						</div>
            <Modal
              isOpen={this.state.ybModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.ybActiveModal}
              className="port__modal"
              >
                <p className="port__modal__header"> Yo Brew </p>
                <p className="port__modal__text"> Yo Brew! was a challenge to develop a minimalistic app with a large dataset. Utilizing HandlbarsJS, Sequelize, and Express this app looks up breweries in your area and allows you to save favorite beers and breweries. Currently being refactored. </p>
                <div className="modalLinks">
                  <img className="port__modal__svg" src="images/devicons/www-unavailable.svg" />
                  <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.ybActiveModal}/>
              </Modal>

            <div onClick={this.hmActiveModal} style={{backgroundColor: "black"}} className="port__item" id="hangman" data-aos="fade-up">
              <p className="port__item__text"> Hangman </p>
              <SVGInline style={{fill: "blue"}} className="bssvg" svg={hm} />
            </div>
            <Modal
              isOpen={this.state.hmModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.hmActiveModal}
              className="port__modal"
              >
                <p className="port__modal__header"> Hangman </p>
                <p className="port__modal__text"> A simple Hangman app used primarily to experiment with the GreenSock animation platform. Currently being refactored for React. </p>
                <div className="modalLinks">
                  <img className="port__modal__svg" src="images/devicons/www-unavailable.svg" />
                  <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.hmActiveModal}/>
              </Modal>
					</div>
			</section>
    );
  }

}

export default Portfolio
