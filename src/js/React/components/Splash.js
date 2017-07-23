import React from "react";



const Splash = () => {
  return (
    <section className="splash" id="splash">

      <div className="splash__title">
          <h1>Peter Markoski</h1>
          <p>Full Stack Developer</p>
      </div>
      <div id="sticky-nav" className="sticky-navigation">
        <ul className="splash__menu">
          <li className="splash__menu__item" ><a id="aboutLink" href="#"> About </a> </li>
          <li className="splash__menu__item"><a id="languagesLink" href="#"> Skills </a></li>
          <li className="splash__menu__item"><a id="portfolioLink" href="#"> Portfolio </a></li>
          <li className="splash__menu__item"><a id="contactLink" href="#"> Contact </a></li>
        </ul>
      </div>

      <div className="splash__message">
        <p> Click On The Doughnuts </p>
      </div>

    </section>
  );
};

export default Splash;
