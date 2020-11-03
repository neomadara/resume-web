import React from "react";

import BodyJob from "./body.job";
import JobsInterface from "../interfaces/jobs.interface";

const Jobs: React.FC<JobsInterface> = ({jobs}) => (
    <div className="col-lg-9">
        <section className="resume-section experience-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                Experiencia laboral
            </h2>
            <div className="resume-section-content">
                <div className="resume-timeline position-relative">
                    {jobs ? jobs.map((jobItem) => (
                        <BodyJob
                            appointment={jobItem.appointment}
                            company={jobItem.company}
                            date={jobItem.date}
                            description={jobItem.description}
                            stacks={jobItem.stacks}
                            key={jobItem.company}
                        />
                    )) : null}
                </div>
            </div>
        </section>
    </div>
)

export default Jobs;