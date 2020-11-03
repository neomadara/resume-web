import TechInterface from './tech.interface';

export default interface JobInterface {
    appointment?: string;
    company?: string;
    date?: string;
    description?: string;
    stacks?: TechInterface[];
}