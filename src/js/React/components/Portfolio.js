import React from "react";

const Portfolio = () => {
    return(
			<section className="portfolio table" id="portfolio">
				<h1> PORTFOLIO </h1>
				<h2> Under Construction </h2>
				<div className="port">
					<div className="port__left">
						<div className="port-item" id="whatToWatch" data-aos="fade-right">
							<p> What To Watch </p>
						</div>

						<div className="port-item" id="projectThree" data-aos="fade-right">
							<p> Project Three </p>
						</div>

						<div className="port-item" id="hangman" data-aos="fade-right">
							<p> Hangman </p>
						</div>
					</div>
					<div className="port__right">
						<div className="port-item" id="public" data-aos="fade-left">
							<p> Public Website </p>
						</div>

						<div className="port-item" id="yoBrew" data-aos="fade-left">
							<p> Yo Brew! </p>
						</div>
					</div>
				</div>
			</section>
    );
  };

export default Portfolio
