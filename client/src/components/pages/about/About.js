import React from "react";
import Heading from "../../common/Heading";
import Skills from "./Skills";

function About({ t }) {
  const skills = t("About.skills", { returnObjects: true });
  return (
    <div className="about">
      <Heading
        heading={t("About.heading")}
        textSec={t("About.textSec")}
        smHeading={t("About.smHeading")}
      />
      <div className="about-info">
        <img
          src={require("../../../img/me.jpeg")}
          alt="Diego Salas"
          className="bio-image"
        />
        <div className="bio">
          <h3 className="text-sec">{t("About.bioText")}</h3>
          <p>{t("About.bioParagraph")}</p>
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
