import React from "react";

import PresentationInterface from "../interfaces/presentation.interface";

const BodyPresentation: React.FC<PresentationInterface> = ({presentation}) => (
    <section className="resume-section summary-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Presentación</h2>
        <div className="resume-section-content">
            <p className="mb-0" id="presentation">
                { presentation }
            </p>
        </div>
    </section>
);

export default BodyPresentation;