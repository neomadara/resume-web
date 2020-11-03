import React from "react";
import { EducationsInterface } from "../interfaces/education.interface";

const Education: React.FC<EducationsInterface> = ({ educations }) => {
  return (
    <section className="resume-section education-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
        Educación
      </h2>
      <div className="resume-section-content">
        <ul className="list-unstyled">
          {educations ? educations.map(education => (
            <li className="mb-2" key={education.career}>
              <div className="resume-degree font-weight-bold">
                {education.career}
              </div>
              <div className="resume-degree-org">{education.university}</div>
              <div className="resume-degree-time">{education.date}</div>
            </li>
          )): null}
        </ul>
      </div>
    </section>
  );
};

export default Education;
