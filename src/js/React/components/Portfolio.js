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
				<h1 id="portTitle"> Portfolio </h1>
				<div className="port">
						<div onClick={this.hsActiveModal} className="port__item" id="headshoppe" data-aos="fade-up">
              <div className="port__item__textContainer">
							         <p className="port__item__textContainer__text"> Headshoppe </p>
              </div>
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
                <p className="port__modal__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className="modalLinks">
                  <div className="modalLinks__www">
                    <a href="https://www.headshoppe.net/" target="_blank"><img className="port__modal__svg" src="images/devicons/www.svg" /> </a>
                    <p className="modalLinks__text"> Deployed Website </p>
                  </div>
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                    <p className="modalLinks__text"> Github Repository (unavailable due to contract) </p>
                  </div>
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.hsActiveModal}/>
              </Modal>

            <div onClick={this.pbActiveModal} className="port__item" id="public" data-aos="fade-up">
              <div className="port__item__textContainer">
                  <p className="port__item__textContainer__text publicText"> PUBLIC </p>
                  <p className="port__item__textContainer__text publicText" id="publicText2"> パブリック </p>
              </div>
              <video id="pbvid" playsInline autoPlay muted loop>
                <source src="./images/public.mp4" type="video/mp4"/>
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
                <p className="port__modal__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="modalLinks">
                  <div className="modalLinks__www">
                    <a href="http://google.com/" target="_blank"><img className="port__modal__svg" src="images/devicons/www.svg" /> </a>
                    <p className="modalLinks__text"> Deployed Website </p>
                  </div>
                  <div className="modalLinks__www">
                    <a href="https://google.com" target="_blank"><img className="port__modal__svg" src="images/devicons/github-original.svg" /> </a>
                    <p className="modalLinks__text"> Github Repository </p>
                  </div>
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.pbActiveModal}/>
              </Modal>

						<div onClick={this.bsActiveModal} className="port__item" id="bandspace" data-aos="fade-up">
              <div className="port__item__textContainer">
                <p className="port__item__textContainer__text" id="bandspaceText"> Bandspace </p>
              </div>
              <SVGInline className="bssvg" svg={amp} />

						</div>
            <Modal
              isOpen={this.state.bsModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.bsActiveModal}
              className="port__modal"
              >
                <p className="port__modal__header"> BandSpace </p>
                <p className="port__modal__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="modalLinks">
                  <div className="modalLinks__www">
                    <a href="https://google.com/" target="_blank"><img className="port__modal__svg" src="images/devicons/www.svg" /> </a>
                    <p className="modalLinks__text"> Deployed Website </p>
                  </div>
                  <div className="modalLinks__www">
                    <a href="https://google.com" target="_blank"> <img className="port__modal__svg" src="images/devicons/github-original.svg" /> </a>
                    <p className="modalLinks__text"> Github Repository </p>
                  </div>
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.bsActiveModal}/>
              </Modal>

						<div onClick={this.wtwActiveModal} style={{backgroundColor: "grey"}} className="port__item" id="whatToWatch" data-aos="fade-up">
              <div className="port__item__textContainer">
							   <p className="port__item__textContainer__text" id="wtwText"> What to Watch </p>
              </div>
						</div>
            <Modal
              isOpen={this.state.wtwModal}
              style={customStyles}
              contentLabel="Example Modal"
              onClick={this.wtwActiveModal}
              className="port__modal"
              >
                <h2 id="wtwText" style={{textAlign: "left"}}> What To Watch </h2>
                <p className="port__modal__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className="modalLinks">
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/www-unavailable.svg" />
                    <p className="modalLinks__text"> Deployed Website (currently unavailable) </p>
                  </div>
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                    <p className="modalLinks__text"> Github Repository (currently unavailable) </p>
                  </div>
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.wtwActiveModal}/>
              </Modal>

						<div onClick={this.ybActiveModal} className="port__item" id="yoBrew" data-aos="fade-up">
              <div className="port__item__textContainer">
							         <p className="port__item__textContainer__text"> Yo Brew! </p>
              </div>
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
                <p className="port__modal__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className="modalLinks">
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/www-unavailable.svg" />
                    <p className="modalLinks__text"> Deployed Website (currently unavailable) </p>
                  </div>
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                    <p className="modalLinks__text"> Github Repository (currently unavailable) </p>
                  </div>
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.ybActiveModal}/>
              </Modal>

            <div onClick={this.hmActiveModal} style={{backgroundColor: "black"}} className="port__item" id="hangman" data-aos="fade-up">
              <div className="port__item__textContainer">
                    <p className="port__item__textContainer__text"> Hangman </p>
              </div>
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
                <p className="port__modal__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className="modalLinks">
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/www-unavailable.svg" />
                    <p className="modalLinks__text"> Deployed Website (currently unavailable) </p>
                  </div>
                  <div className="modalLinks__www">
                    <img className="port__modal__svg" src="images/devicons/github-unavailable.svg" />
                    <p className="modalLinks__text"> Github Repository (currently unavailable) </p>
                  </div>
                </div>
                  <img className="port__modal__x" src="images/devicons/x.svg" onClick={this.hmActiveModal}/>
              </Modal>
					</div>
			</section>
    );
  }

}

export default Portfolio
