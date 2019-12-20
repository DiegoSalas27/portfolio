import React from "react";

function Heading(props) {
  return (
    <div>
      <h1 className="lg-heading">
        {props.heading} <span className="text-sec">{props.textSec}</span>
      </h1>
      <h2 className="sm-heading">{props.smHeading}</h2>
    </div>
  );
}

export default Heading;
