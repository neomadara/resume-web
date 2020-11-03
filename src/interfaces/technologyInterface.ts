import TechInterface from "./tech.interface";

export default interface TechnologyInterface {
    subtitle?: string;
    techs?: TechInterface[];
}

export interface TechnologiesInterface {
    technologies?: TechnologyInterface[]
}