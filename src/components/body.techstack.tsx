import React from "react";
import TechStackInterface from "../interfaces/techstack.interface";

const BodyTechstack: React.FC<TechStackInterface> = ({techs}) => {
  return (
    <ul className="list-inline">
      { techs!.map(tech => 
        <li className="list-inline-item" key={tech.name}>
          <span className="badge badge-primary badge-pill">{ tech.name }</span>
        </li>) 
      }
    </ul>
  );
}

export default BodyTechstack;
