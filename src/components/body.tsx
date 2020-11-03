import React from "react";

import BodyPresentation from "./body.presentation";
import Jobs from "./body.jobs";
import Technologies from "./body.technologies";
import Education from "./body.education";
import Interests from "./body.interest";

import BodyInterface from "../interfaces/body.interface";

const Body: React.FC<BodyInterface> = ({ presentation, jobs, technologies, educations, interests }) => (
    <div className="resume-body p-5">
        <BodyPresentation presentation={presentation}/>
        <div className="row">
            <Jobs jobs={jobs}/>
            <div className="col-lg-3">
                <Technologies technologies={technologies}/>
                <Education educations={educations} />
                <Interests interests={interests}
                />
            </div>

        </div>
    </div>
)


export default Body;


