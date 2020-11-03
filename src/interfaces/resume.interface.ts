import JobInterface from "./job.interface";
import TechnologyInterface from "./technologyInterface";
import EducationInterface from "./education.interface";
import InterestInterface from "./interest.interface";

export default interface ResumeInterface {
    name?: string;
    appointment?: string;
    email?: string;
    phone?: string;
    LinkedInUrl?: string;
    githubUrl?: string;
    scrumUrl?: string;
    presentation?: string | undefined;
    jobs?: JobInterface[];
    technologies?: TechnologyInterface[];
    educations?: EducationInterface[];
    interests?: InterestInterface[];
}
