import React from "react";

function Skills(props) {
  return (
    <div className={`skills ${props.skillNumber}`}>
      <h3>{props.category}</h3>
      <ul className="skill-content">
        {props.categoryList.map((category, i) => {
          return (
            <li key={i} className="skill-text">
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
