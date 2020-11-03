import JobInterface from "./job.interface";
import TechnologyInterface from "./technologyInterface";
import EducationInterface from "./education.interface";
import InterestInterface from "./interest.interface";

export default interface BodyInterface {
    presentation?: string | undefined,
    jobs?: JobInterface[];
    technologies?: TechnologyInterface[];
    educations?: EducationInterface[];
    interests?: InterestInterface[];
}