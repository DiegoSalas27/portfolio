import React from "react";

function JobItem(props) {
  return (
    <div className={`job ${props.jobNumber}`}>
      <h5>{props.enterprise}</h5>
      <ul className="job-content">
        <img
          src={require(`../../../img/${props.imageSource}`)}
          alt={props.alt}
        />
      </ul>
    </div>
  );
}

export default JobItem;
