import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  djangoIcon,
  drfIcon,
  fastapiIcon,
  linuxIcon,
  mysqlIcon,
  microserviceIcon,
  networkIcon,
  yamiFood,
  weatherApp,
  tweeker,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  djangoIcon,
  drfIcon,
  fastapiIcon,
  linuxIcon,
  mysqlIcon,
  microserviceIcon,
  networkIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "I'm Amir, I was born in March 2001. I recently graduated with a bachelor's degree in computer science from Tabriz University in Iran. I like back-end development and the fascinating technologies associated with it.",

    "I'm an INTP type, and I consider myself an ambivert, as I don't exclusively identify as an introvert or extrovert.",
    
    "When I find myself with free time, I enjoy staying up-to-date with the advancements in my field or indulging in anime (One Piece is my personal favorite). Additionally, I am an ardent dog lover (cats are great too, but dogs hold a special place in my heart 😉) and I relish playing billiards. I find joy in both learning new things and sharing my knowledge with others.",

    "Currently, I am seeking employment opportunities and I am open to working as an intern. Although I possess the necessary skills for the job, I lack substantial work experience. If you are in search of a cool and perhaps slightly unconventional coworker, you know what to do!",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Tweeker",
    description: 'Tweeker is a web-based platform resembling Twitter utilizing HTML, CSS, JavaScript, React, and Django. In this project I constructed user-friendly functionalities such as user registration login/logout, tweet and retweet functionality, and user profile features.',
    image: tweeker,
    source_code_link: 'https://github.com/amirNourani/Tweeker',
  },
  {
    name: 'Yamifood',
    description: 'yamifood is a restaurant website primarily based on django framework with html, css and js, in which users can discover menu ingredients there and make reservation for themselves',
    image: yamiFood,
    source_code_link: 'https://github.com/amirNourani/yamifood',
  },
  {
    name: 'Weather app',
    description: 'With the ability to access weather information from anywhere in the world, this application allows users to stay informed of current weather conditions with ease. The application is written in python ans tkinter gui libraray and utilizes an API to gather and display weather information. ',
    image: weatherApp,
    source_code_link: 'https://github.com/amirNourani/weather_app',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a basic knowledge of HTML for organizing web pages and generating meaningful content as much as a back-end developer need.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I have a basic knowledge of CSS to design web pages as mush as a developer need.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have a basic knowledge in JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I know React as much as needed to know what is going on in the frontend.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With more than 4 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'django',
    title: 'Django',
    icon: djangoIcon,
    description:
      'Based on my experience in Django, I have more than 2 years of experience with backend web development.',
  },
  {
    id: 'drf',
    title: 'DRF',
    icon: drfIcon,
    description:
      'On my experience in Django REST Framework, I have more than 2 years of knowledge about the API.',
  },
  {
    id: 'fastapi',
    title: 'FastAPI',
    icon: fastapiIcon,
    description:
      'FastAPI is a modern web framework for building RESTful APIs in Python, It has quickly gained popularity among developers due to its ease of use, speed and robustness, I started learing and using it lately',
  },
  {
    id: 'linux',
    title: 'Linux',
    icon: linuxIcon,
    description:
      'I have used Linux operating system for more than two years, studying LPIC1.',
  },
  {
    id: 'mysql',
    title: 'MySQL',
    icon: mysqlIcon,
    description:
      'MySQL is a popular relational database management system, which I have used for years to store and process data.',
  },
  {
    id: 'microservice',
    title: 'Microservice',
    icon: microserviceIcon,
    description:
      'I have studied design patterns necessary for a backend developer to comprehend, such as microservices.',
  },
  {
    id: 'network',
    title: 'Network',
    icon: networkIcon,
    description:
      'I have such knowledge of network layers concepts as much as needed for backend development.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
