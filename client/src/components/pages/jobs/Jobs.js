import React from "react";
import Heading from "../../common/Heading";
import JobItem from "./JobItem";
import { jobs } from "../../resources";

function Jobs({ t }) {
  return (
    <div className="jobs">
      <Heading
        heading={t("Jobs.heading")}
        textSec={t("Jobs.textSec")}
        smHeading={t("Jobs.smHeading")}
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
