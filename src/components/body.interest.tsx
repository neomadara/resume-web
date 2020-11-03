import React from "react";
import { InterestsInterface } from "../interfaces/interest.interface";

const Interest: React.FC<InterestsInterface> = ({ interests }) => (
    <section className="resume-section interests-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            Intereses
        </h2>
        <div className="resume-section-content">
            <ul className="list-unstyled">
                { interests ? interests.map(interest =>
                    <li className="mb-1" key={interest.name}>{interest.name}</li>
                ) : null }
            </ul>
        </div>
    </section>
)

export default Interest;