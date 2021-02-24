import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5" },
        { id: "CSS3_skill", content: "CSS3"},
        { id: "Javascript", content: "Javascript"},
        { id: "React", content: "React & React Hooks"},
        { id: "AngularJS", content: "AngularJS"},
        { id: "JQuery", content: "JQuery"},
        { id: "MySql", content: "MySql"},
        { id: "Sequelize", content: "Sequelize"},
        { id: "MongoDB & Mongoose", content: "MongoDB & Mongoose"},
        { id: "Node.js", content: "Node.js"},
        { id: "Sass", content: "Sass"},
        { id: "Axios", content: "Axios"},
        { id: "Ajax", content: "Ajax"},
        { id: "Deployment", content: "Digital Ocean"},
        { id: "Deployment", content: "Heroku"},
        { id: "Git", content: "Git"},
        { id: "Github", content: "Github"},
        { id: "Vue", content: "Vue.js"},
        { id: "Postgres", content: "Postgres"},
        { id: "Authentication", content: "Passport-Authentication"}
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            " My name is Jaz. I’m from New Orleans. I started my educational career in the health sciences field then transitioned to tech in 2019. My interest consist of playing instruments, painting, drawing, sewing, & psychology. Software development piqued my interest because it serves as another medium of creating. I also enjoy the challenge of problem solving and learning new languages. I'm excited to continue learning about different technologies so I can be a great asset to a development team."
        },
        {
          id: "second-p-about",
          content:
            "  I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to the success of any organization I'm apart of. "
        },
        {
          id: "third-p-about",
          content:
            " I am a full-stack engineer with experience in the Javascript language, Node.js, React.js, and a number of other technologies. I have developed many applications along with some great teams. Recently, I’ve been primarily working with React.js and Vue.js frameworks to develop a series of applications. I also have experience in UX/UI design, Schema design, and Architectural design. "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <div>{skill.content}</div>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
