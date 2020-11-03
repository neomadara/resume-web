import React from "react";
import { TechnologiesInterface } from "../interfaces/technologyInterface";

const Technologies: React.FC<TechnologiesInterface> = ({ technologies }) => (
    <section className="resume-section skills-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            Tecnologias
        </h2>
        <div className="resume-section-content">
            {technologies ? technologies.map(technology =>
                <div className="resume-skill-item" key={technology.subtitle}>
                    <h4 className="resume-skills-cat font-weight-bold">
                        {technology.subtitle}
                    </h4>
                    <ul className="list-unstyled mb-4">
                        {technology.techs ? technology.techs.map(item =>
                            <li className="mb-2" key={item.name}>
                                <div className="resume-skill-name">{item.name}</div>
                            </li>
                        ) : null
                        }
                    </ul>
                </div>
            ) : null
            }
        </div>
    </section>
);

export default Technologies;
