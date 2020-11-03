import axios from 'axios';

export default axios.create({
    baseURL: `https://k8s.instanciageek.cl/resume-bff/`
});