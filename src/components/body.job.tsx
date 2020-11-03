import React from "react";
import JobInterface from "../interfaces/job.interface"
import BodyTechstack from "./body.techstack";

const BodyJob: React.FC<JobInterface> = ({
    appointment,
    company,
    date,
    description,
    stacks}) => {
    return (
        <article className="resume-timeline-item position-relative pb-5">
          <div className="resume-timeline-item-header mb-2">
            <div className="d-flex flex-column flex-md-row">
              <h3 className="resume-position-title font-weight-bold mb-1">
                { appointment }
              </h3>
              <div className="resume-company-name ml-auto">{ company }</div>
            </div>
            <div className="resume-position-time">{ date }</div>
          </div>
          <div className="resume-timeline-item-desc">
            <p>
              { description }
            </p>
            <h4 className="resume-timeline-item-desc-heading font-weight-bold">
              Stack
            </h4>
            <BodyTechstack
              techs = { stacks }
            />
          </div>
        </article>
    );
}

export default BodyJob;
