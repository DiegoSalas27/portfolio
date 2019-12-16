import React from "react";

function Projects() {
  return (
    <div className="project-main">
      <h1 className="lg-heading">
        My <span className="text-sec">Projects</span>
      </h1>
      <h2 className="sm-heading">This are some of my projects</h2>
      <div className="project">
        <div className="project-info">
          <div className="project1-img img">
            <div class="overlay">
              <input
                type="button"
                className="btn btn-outline-light"
                value="Live"
                onClick={() =>
                  (window.location.href =
                    "https://portfolio-diego-salas.herokuapp.com")
                }
              />
              <input
                type="button"
                className="btn btn-outline-light"
                value="Github"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/DiegoSalas27/portfolio")
                }
              />
            </div>
          </div>

          <ul className="project-content">
            <h4>Portfolio app</h4>
            <p className="project-detail">
              This applitacion was done with Reat.js library and with the help
              of the processor sass. It was a blast to design this website as it
              encourage me to learn about this awesome tool (sass) for writing,
              if you will, vanilla css. The layout was done with pure css and a
              little bit of boostrap styles. Soon I will implement a form for
              you to send me an email if you would like to hire me.
            </p>
            <p className="project-detail">
              Mysql, Express, React, Node, HTML, CSS, Sass
            </p>
          </ul>
        </div>
        <div className="project-info">
          <div className="project2-img img">
            <div class="overlay">
              <input
                type="button"
                className="btn btn-outline-light"
                value="Live"
                onClick={() =>
                  (window.location.href =
                    "https://ecommerce-mearn.herokuapp.com/")
                }
              />

              <input
                type="button"
                className="btn btn-outline-light"
                value="Github"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/DiegoSalas27/ecommerce-mern-stack")
                }
              />
            </div>
          </div>
          <ul className="project-content">
            <h4>E-commerce mern stack app</h4>
            <p className="project-detail">
              This is an admin dashboard application for listing, deleting,
              updating and creating productos, categories and users. Sequelize
              ORM has been used as well as MySql database. There are some
              interesting features aside from just making a simple crud: route
              security, user authentication with session expiration. It is fully
              responsive.
            </p>
            <p className="project-detail">
              Mysql, Express, React, Node, HTML, CSS, Sequelize
            </p>
          </ul>
        </div>
        <div className="project-info">
          <div className="project3-img img">
            <div class="overlay">
              <div class="overlay">
                <input
                  type="button"
                  className="btn btn-outline-light"
                  value="Live"
                  onClick={() =>
                    (window.location.href =
                      "https://imagerecognition-app-dominic.herokuapp.com/")
                  }
                />
                <input
                  type="button"
                  className="btn btn-outline-light"
                  value="Github"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/DiegoSalas27/ImageBrainApi")
                  }
                />
              </div>
            </div>
          </div>
          <ul className="project-content">
            <h4>Face recognition App</h4>
            <p className="project-detail">
              This was my first React proyecto thanks the udemy "The complete we
              developer" course from Andrei Neagioe. In this application the
              user can register, login and add an image url to a searchbox, so
              that the system can detect if a face is presente in that image.
            </p>
            <p className="project-detail">
              Postgres, Express, React, Node, HTML, CSS, Knex
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
