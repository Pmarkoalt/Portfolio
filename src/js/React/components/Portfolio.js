import React from "react";

import SVGInline from 'react-svg-inline';

import amp from '../../../../images/amplifier.svg';
import hm from '../../../../images/HM.svg';

const Portfolio = () => {
    return(
			<section className="portfolio table" id="portfolio">
				<h1> PORTFOLIO </h1>
				<div className="port">
						<div className="port-item" id="headshoppe" data-aos="fade-up">
							<p className="port__text"> Headshoppe </p>
                <video id="hsvid" playsInline autoPlay muted loop>
                  <source src="./images/headshoppe.mp4" type="video/mp4"/>
                </video>
						</div>

            <div className="port-item" id="public" data-aos="fade-up">
              <p className="port__text publicText"> PUBLIC </p>
              <p className="port__text publicText" id="publicText2"> パブリック </p>
              <video id="pbvid" playsInline autoPlay muted loop>
                <source src="./images/public.webm" type="video/webm"/>
              </video>
            </div>

						<div className="port-item" id="bandspace" data-aos="fade-up">
              <SVGInline className="bssvg" svg={amp} />
							<p className="port__text"> Bandspace </p>
						</div>

						<div style={{backgroundColor: "grey"}} className="port-item" id="whatToWatch" data-aos="fade-up">
							<p className="port__text" id="wtwText"> What to Watch </p>
						</div>

						<div className="port-item" id="yoBrew" data-aos="fade-up">
							<p className="port__text"> Yo Brew! </p>
              <img id="yobrew" src="images/yobrew.jpg" />
						</div>

            <div style={{backgroundColor: "black"}} className="port-item" id="hangman" data-aos="fade-up">
              <p className="port__text"> Hangman </p>
              <SVGInline style={{fill: "blue"}} className="bssvg" svg={hm} />
            </div>
					</div>
			</section>
    );
  };

export default Portfolio
