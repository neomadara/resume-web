import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body"
import ResumeInterface from "./interfaces/resume.interface";
import RESUME_BFF from "./services/client.services";

const App: React.FC = () => {
    const [{
        name, technologies, scrumUrl, presentation, phone, LinkedInUrl, jobs, interests, githubUrl, email,
        educations, appointment
    }, setResume] = useState<ResumeInterface>({
        name: "",
        appointment: "",
        email: "",
        phone: "",
        LinkedInUrl: "",
        githubUrl: "",
        scrumUrl: "",
        presentation:"",
        technologies: [],
        jobs: [],
        educations: [],
        interests: [],
    });

    useEffect(() => {
        const email = 'instanciageek@gmail.com'
        const getResumeByEmail = () => {
            RESUME_BFF.get(`resume?email=${email}`)
                .then(response => {
                    setResume(response.data);
                })
        };
        getResumeByEmail();
    }, []);

    return (
        <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                <Header name={name}
                        appointment={appointment}
                        email={email}
                        phone={phone}
                        LinkedInUrl={LinkedInUrl}
                        githubUrl={githubUrl}
                        scrumUrl={scrumUrl}/>
                <Body presentation={presentation}
                      jobs={jobs}
                      educations={educations}
                      interests={interests}
                      technologies={technologies}/>
            </div>
        </article>
    );
};

export default App;