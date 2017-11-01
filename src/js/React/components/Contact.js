import React from 'react';

const Contact = () => {
  return(
    <section className="contact" id="contactMe">
        <div className="contact__information">
          <h1 className="contact-header"> Contact </h1>
          <h3 style={{fontSize: 30}}> JohnSmith@gmail.com </h3>
        </div>

        <div className="contact__svg">
          <a href="https://google.com" target="_blank"> <img src="images/devicons/github-original.svg"/> </a>
          <a href="https://google.com" target="_blank"> <img src="images/devicons/treehouse-logo.png"/> </a>
          <a href="https://google.com" target="_blank"> <img src="images/devicons/stack.svg"/> </a>
          <a href="https://google.com" target="_blank"> <img src="images/devicons/linkedin-plain.svg"/> </a>
        </div>

        <div className="contact__photo">
          <img src="images/man.svg"/>
        </div>

    </section>
  );
};

export default Contact;
