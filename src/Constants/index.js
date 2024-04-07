import Profile from '../assets/Profile.png';
import Profile1 from '../assets/Profile.png';
import Logotic from '../assets/logotic.png';

const services=[
    {
        title: "Web Developer",
        icon: Profile,
    },
    {
        title: "React Developer",
        icon: Profile,
    },
    {
        title: "App Developer",
        icon: Profile,
    },
];

const technologies=[
    {
        name: "HTML 5",
        icon: Logotic,
    },
    {
        name: "CSS 3",
        icon: Logotic,
    },
    {
        name: "JavaScript",
        icon: Logotic,
    },
    {
        name: "Bootstrap",
        icon: Logotic,
    },
    {
        name: "Kotlin",
        icon: Logotic,
    },
    {
        name: "Java",
        icon: Logotic,
    },
]

const projects=[
    {
        name:"Tic-tac-toe",
        description:" Construction of a bridge. Development of software for a new business process. Installation of machinery in a factory. Relief efforts after a natural disaster.",
        tags:[
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootsrap",
                color: "pink-text-gradient",
            },
        ],
        image: Profile1,
        source_code_link: "https://github.com/riva211/realestate.github.io",
        source_deploy_link: "https://revasrealestate.netlify.app",
    },
    {
        name:"Yashaswiquizapp",
        description:" Construction of a bridge. Development of software for a new business process. Installation of machinery in a factory. Relief efforts after a natural disaster.",
        tags:[
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootsrap",
                color: "pink-text-gradient",
            },
        ],
        image: Profile1,
        source_code_link: "https://github.com/YashaswiSahu28/Yashaswiquizapp",
        source_deploy_link: "https://revasrealestate.netlify.app",
    },
];

export{ services, technologies, projects};