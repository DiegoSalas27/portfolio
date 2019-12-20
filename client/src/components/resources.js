export const navItem = [
  {
    to: "/",
    current: "current",
    name: "Home"
  },
  {
    to: "/AboutMe",
    current: "",
    name: "About me"
  },
  {
    to: "/Jobs",
    current: "",
    name: "Jobs"
  },
  {
    to: "/Projects",
    current: "",
    name: "Projects"
  }
];

export const skills = [
  {
    skillNumber: "skill-1",
    category: "Frontend",
    categoryList: [
      "React.js",
      "Angular.js",
      "HTML5",
      "CSS",
      "SASS",
      "Bootstrap"
    ]
  },
  {
    skillNumber: "skill-2",
    category: "Backend",
    categoryList: ["Express.js", "SrpingBoot", "Node.js"]
  },
  {
    skillNumber: "skill-3",
    category: "Languages",
    categoryList: ["Javascript", "Java", "Python", "C#", "C++", "Kotlin"]
  }
];

export const jobs = [
  {
    jobNumber: "job-1",
    enterprise: "GMI Ingenieros Consultores",
    imageSource: "GMI.png",
    alt: "gmi"
  },
  {
    jobNumber: "job-2",
    enterprise: "VCA Consulting Solutions",
    imageSource: "VCA.jpeg",
    alt: "vca"
  }
];

export const projectItem = [
  {
    projectNumber: "project1-img",
    liveLocation: "https://portfolio-diego-salas.herokuapp.com",
    githubLocation: "https://github.com/DiegoSalas27/portfolio",
    projectName: "Portfolio app",
    projectDetail: `This applitacion was done with Reat.js library and with the help
    of the processor sass. It was a blast to design this website as it
    encourage me to learn about this awesome tool (sass) for writing,
    if you will, vanilla css. The layout was done with pure css and a
    little bit of boostrap styles. Soon I will implement a form for
    you to send me an email if you would like to hire me.`,
    technologies: "Mysql, Express, React, Node, HTML, CSS, Sass"
  },
  {
    projectNumber: "project2-img",
    liveLocation: "https://ecommerce-mearn.herokuapp.com/",
    githubLocation: "https://github.com/DiegoSalas27/ecommerce-mern-stack",
    projectName: "E-commerce mern stack app",
    projectDetail: `This is an admin dashboard application for listing, deleting,
    updating and creating productos, categories and users. Sequelize
    ORM has been used as well as MySql database. There are some
    interesting features aside from just making a simple crud: route
    security, user authentication with session expiration. It is fully
    responsive.`,
    technologies: `Mysql, Express, React, Node, HTML, CSS, Sequelize`
  },
  {
    projectNumber: "project3-img",
    liveLocation: "https://imagerecognition-app-dominic.herokuapp.com/",
    githubLocation: "https://github.com/DiegoSalas27/ImageBrainApi",
    projectName: "Face recognition App",
    projectDetail: `This was my first React proyecto thanks the udemy "The complete we
    developer" course from Andrei Neagioe. In this application the
    user can register, login and add an image url to a searchbox, so
    that the system can detect if a face is presente in that image.`,
    technologies: `Postgres, Express, React, Node, HTML, CSS, Knex`
  }
];
