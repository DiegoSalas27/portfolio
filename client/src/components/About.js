import React from "react";

function About() {
  return (
    <div className="about">
      <h1 className="lg-heading">
        About <span className="text-sec">Me</span>
      </h1>
      <h2 className="sm-heading">Things about me</h2>
      <div className="about-info">
        <img
          src={require("../img/me.jpeg")}
          alt="Diego Salas"
          className="bio-image"
        />
        <div className="bio">
          <h3 className="text-sec">Bio</h3>
          <p>
            I hold a bachelor’s degree in culinary arts from the University of
            Le Cordon Bleu of Peru. I am also an English teacher certified by
            Asociación Cultural Peruano Británica. I have been working in both
            fields for about 2 to 5 years respectively. However, my passion has
            always been technology. I am currently studying the 9th semester
            (total of 10) of Software Engineering at Universidad Peruana de
            Ciencias Aplicadas (UPC). I’m looking forward to expanding my
            knowledge on full stack web development and new mobile technologies.
            As of now, I am working as a FullStack web developer with
            technologies such as React and Angular for frontend and Web
            frameworks like Express and Springboot. I am interest as well in
            DevOps which is why I am enrolled in a DevOps course. I consider
            myself a proactive collaborator, fast learner, and ready to deal
            with any problems in high spirits.
          </p>
        </div>
        <div className="skills skill-1">
          <h3>Frontend</h3>
          <ul className="skill-content">
            <li className="skill-text">React.js</li>
            <li className="skill-text">Angular.js</li>
            <li className="skill-text">HTML5</li>
            <li className="skill-text">CSS</li>
            <li className="skill-text">SASS</li>
            <li className="skill-text">Bootstrap</li>
          </ul>
        </div>
        <div className="skills skill-2">
          <h3>Backend</h3>
          <ul className="skill-content">
            <li className="skill-text">Express.js</li>
            <li className="skill-text">SpringBoot</li>
            <li className="skill-text">Node.js</li>
          </ul>
        </div>
        <div className="skills skill-3">
          <h3>Languages</h3>
          <ul className="skill-content">
            <li className="skill-text">Javascript</li>
            <li className="skill-text">Java</li>
            <li className="skill-text">Python</li>
            <li className="skill-text">C#</li>
            <li className="skill-text">C++</li>
            <li className="skill-text">Kotlin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
