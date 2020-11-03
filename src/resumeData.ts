import ResumeInterface from "./interfaces/resume.interface";

const ResumeData: ResumeInterface = {
  name: "Cristian Gutiérrez",
  appointment: "Software Engineer",
  email: "instanciageek@gmail.com",
  phone: "+569 86174119",
  LinkedInUrl: "http://linkedin.com/in/cristian-gutiérrez-a1958660/",
  githubUrl: "http://github.com/neomadara",
  scrumUrl: "https://scrummanager.com/index.php/es/perfil-publico?id=23964",
  presentation:
      "Hola! soy Cristian Gutiérrez Ingeniero en Informática y desarrollador Full Stack JavaScript. Lo que me apasiona de mi carrera es la oportunidad de resolver diversos problemas, también el llevar soluciones de mejor calidad a las personas ya que creo fielmente que la tecnologia nos entrega un valor incalculable.",
  technologies: [
    {
      subtitle: "Lenguajes de Programación",
      techs: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "Go" },
      ]
    },
    {
      subtitle: "Frontend",
      techs: [
        { name: "Angular 8" },
        { name: "ReactJS" },
      ]
    },
    {
      subtitle: "Backend",
      techs: [
        { name: "API REST" },
        { name: "MongoDB" },
        { name: "Postgres" }
      ]
    },
    {
      subtitle: "AWS",
      techs: [
        { name: "S3" },
        { name: "EC2" },
        { name: "CloudFront" },
        { name: "Route 53" },
        { name: "Elastic Beanstalk" },
        { name: "EKS" }
      ]
    },
    {
      subtitle: "Mindset",
      techs: [
        { name: "Pair Programming" },
        { name: "Feedback" },
        { name: "Agile Values" },
        { name: "Team Work" },
        { name: "Constant Learning" },
      ]
    }
  ],
  jobs: [
    {
      appointment: "Full Stack Developer",
      company: "Walmart",
      date: "noviembre/2019 - Presente",
      description: "",
      stacks: [
        { name: "React" },
        { name: "NodeJS" },
        { name: "MongoDB" },
        { name: "Arquitectura Hexagonal" },
        { name: "TDD" },
        { name: "Kubernetes" },
        { name: "Docker" },
        { name: "Go" },
      ]
    },
    {
      appointment: "Senior Full Stack Developer",
      company: "CrediTú",
      date: "abril/noviembre 2019",
      description: "",
      stacks: [
        { name: "Angular 8" },
        { name: "Nest JS" },
        { name: "MongoDB" },
        { name: "AWS" }
      ]
    },
    {
      appointment: "Software Engineer",
      company: "R2DA",
      date: "2017 - 2019",
      description: "",
      stacks: [
        { name: "Angular" },
        { name: "Lumen" },
        { name: "PHP" },
        { name: "Mysqli" }
      ]
    },
    {
      appointment: "Software Engineer",
      company: "Sietrans",
      date: "2016 - 2017",
      description: "",
      stacks: [{ name: "PHP" }, { name: "JavaScript" }, { name: "Mysqli" }]
    }
  ],
  educations: [
    {
      career: "Ingeniero en informática",
      university: "Universidad tecnológica de Chile - INACAP",
      date: "2009 - 2015"
    },
    {
      career: "Scrum Master",
      university: "Diacos",
      date: "2018"
    }
  ],
  interests: [
    { name: "Video juegos" },
    { name: "Basquetbol" },
    { name: "Rockear!" }
  ]
};

export default ResumeData;