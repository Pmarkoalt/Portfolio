import React from "react";

class Skills extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="languages" id="languages">
        <div id="lang-header">
          <h1 data-aos="fade-up"> Skills </h1>
        </div>
        <div id="icons">
          {this.props.skilldata.map((item, index) => (
            <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
              <img className="languages__div__svg" src={item.src}/>
              <p> {item.text} </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
}

export default Skills
