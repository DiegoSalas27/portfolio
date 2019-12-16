import React from "react";

function Jobs() {
  return (
    <div className="jobs">
      <h1 className="lg-heading">
        Past <span className="text-sec">Jobs</span>
      </h1>
      <h2 className="sm-heading">Here is where I've worked</h2>
      <div className="job-info">
        <div className="job job-1">
          <h5>GMI Ingenieros Consultores</h5>
          <ul className="job-content">
            <img src={require("../img/GMI.png")} alt="gmi" />
          </ul>
        </div>
        <div className="job job-2">
          <h5>VCA Consulting Solutions</h5>
          <ul className="job-content">
            <img src={require("../img/VCA.jpeg")} alt="vca" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
