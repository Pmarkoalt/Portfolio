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
          <div id="iconWrapper">
            <div className="icons__one icons">
              {this.props.skilldata[0].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__two icons">
              {this.props.skilldata[1].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__three icons">
              {this.props.skilldata[2].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__four icons">
              {this.props.skilldata[3].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__five icons">
              {this.props.skilldata[4].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__six icons">
              {this.props.skilldata[5].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__seven icons">
              {this.props.skilldata[6].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
            <div className="icons__eight icons">
              {this.props.skilldata[7].map((item, index) => (
                <div key={index} className="languages__div" id={item.id} data-aos={item.dataaos} data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <img className="languages__div__svg" src={item.src}/>
                  <p className="languages__div__text"> {item.text} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
}

export default Skills
