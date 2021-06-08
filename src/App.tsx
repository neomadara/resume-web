import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body"
import ResumeInterface from "./interfaces/resume.interface";
import RESUME_BFF from "./services/client.services";

import Spinner from "./components/spinner";

const App: React.FC = () => {
    const [{
        name, technologies, scrumUrl, presentation, phone, linkedInUrl, jobs, interests, githubUrl, email,
        educations, appointment
    }, setResume] = useState<ResumeInterface>({
        name: "",
        appointment: "",
        email: "",
        phone: "",
        linkedInUrl: "",
        githubUrl: "",
        scrumUrl: "",
        presentation:"",
        technologies: [],
        jobs: [],
        educations: [],
        interests: [],
    });
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const email = 'instanciageek@gmail.com'
        const getResumeByEmail = () => {
            RESUME_BFF.get(`resume?email=${email}`)
                .then(response => {
                    setResume(response.data);
                    setLoading(false)
                })
        };
        getResumeByEmail(); // dummy commit
    }, []);

    return loading ? (<Spinner />) : (
        <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                <Header name={name}
                        appointment={appointment}
                        email={email}
                        phone={phone}
                        linkedInUrl={linkedInUrl}
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
