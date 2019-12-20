import React from "react";
import Heading from "../../common/Heading";
import JobItem from "./JobItem";
import { jobs } from "../../resources";

function Jobs() {
  return (
    <div className="jobs">
      <Heading
        heading={"Past"}
        textSec={"Jobs"}
        smHeading={"Here is where I've worked"}
      />
      <div className="job-info">
        {jobs.map((job, i) => {
          return (
            <JobItem
              key={i}
              jobNumber={job.jobNumber}
              enterprise={job.enterprise}
              imageSource={job.imageSource}
              alt={job.alt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;
