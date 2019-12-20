import React from "react";
import Heading from "../../common/Heading";
import Skills from "./Skills";
import { skills } from "../../resources";

function About() {
  return (
    <div className="about">
      <Heading heading={"About"} textSec={"Me"} smHeading={"Things about me"} />
      <div className="about-info">
        <img
          src={require("../../../img/me.jpeg")}
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
        {skills.map((skill, i) => {
          return (
            <Skills
              key={i}
              skillNumber={skill.skillNumber}
              category={skill.category}
              categoryList={skill.categoryList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
