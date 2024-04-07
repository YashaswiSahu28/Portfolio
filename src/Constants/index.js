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
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpoES8d0VUFDFY6fysFdk6yygMUYtwZ9gzJEAhU6Spg&s",
    },
    {
        name: "CSS 3",
        icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    },
    {
        name: "JavaScript",
        icon: "https://assets.codegrip.tech/wp-content/uploads/2021/09/28165501/JavaScript_Logo2.png",
    },
    {
        name: "Bootstrap",
        icon: "https://w7.pngwing.com/pngs/718/753/png-transparent-bootstrap-css3-node-js-logo-github-purple-violet-rectangle-thumbnail.png",
    },
    {
        name: "Kotlin",
        icon: "https://www.svgrepo.com/show/373728/kotlin.svg",
    },
    {
        name: "Java",
        icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
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