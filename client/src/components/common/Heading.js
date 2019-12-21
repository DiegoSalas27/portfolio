import React from "react";

function Heading({ heading, textSec, smHeading }) {
  return (
    <div>
      <h1 className="lg-heading">
        {heading} <span className="text-sec">{textSec}</span>
      </h1>
      <h2 className="sm-heading">{smHeading}</h2>
    </div>
  );
}

export default Heading;
