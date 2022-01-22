import React from "react";

//import stock
import horter1 from "../img/Horter/profile.jpg";
import horter2 from "../img/Horter/Garden Settings.jpg";
import horter3 from "../img/Horter/chatbot.jpg";
import horter4 from "../img/Horter/garden_info.jpg";
import horter5 from "../img/Horter/plant_search.jpg";
import horter from "../img/Horter/horter.png";
import gardenView from "../img/Horter/Garden Settings.jpg";
import dragme from "../img/DragMePlease Logo.png";
// import dragdemo from "../img/drag_me_please/Drag_me_please_demo.mp4";
import dmp from "../img/drag_me_please/dmp.PNG";
import dmp1 from "../img/drag_me_please/dmp1.png";
import dmpflip from "../img/drag_me_please/dmpflip.png";
import dmpflipcard from "../img/drag_me_please/dmpflipcard.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below are photos of my most recent projects along with
                  technologies/methodologies used to build them.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={horter} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={horter} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Horter(PWA)</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <span><p><b>Horter is an application which helps users create gardens, update and maintain information about them, and learn more about how to add to them and keep them growing strong</b></p></span>
                            Javascript Vue.js Webpack.js Express Node.js PostgreSQL AWS
                            HTML5 CSS3 Bootstrap Buefy Sass OAUTH Passport
                            DialogueFlow GoogleMaps Babel Mocha/Chai(testing)
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/TheGreenThumbs/Horter">Click here to view Repo</a>
                <a
                  href={horter1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gardenView}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={horter4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                {/* <a
                  href={horter1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={horter2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={horter3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={horter5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={dragme} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={dragme} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Drag Me Please</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          <div><span><b>This is a front-end web app to keep up with the fabulous queens of RuPaul's Drag race. You will be able to go through each season and view all drag queens!</b></span></div>
                          React HTML SSCC/SASS CSS Bootstrap Webpack Javascript
                          Axios  
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                {/* <a
                  href={dragme}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={dmp}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dmp1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dmpflip}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dmpflipcard}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a href="https://github.com/Jazsmith24/drag_me_please">Click here to view Repo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
