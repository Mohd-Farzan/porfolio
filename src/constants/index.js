import {
  linkedin, instagram,github,linkedin1, instagram1,github1,responsive, react, fullstack,EMS,ecommerce,crud,crud1,crud2,crud3,EMS1,EMS2,EMS3,ecommerce1,ecommerce2,ecommerce3,
  portfolio,
  portfolio1,
  portfolio2,
  portfolio3,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-farzan-801489250/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/mr._.farzan/?hl=en',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/Mohd-Farzan',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },

  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
  },
  {
    stack: ['languages', 'all'],
    name: 'php',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack:['frameworks','all'],
    name:'Codeigniter 3',
    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'
  },
  {
    stack:['frameworks','all'],
    name:'Laravel',
    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
  },
  {
    stack:['frameworks','all'],
    name:'django',
    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  },
 
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },

  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Employee Management System',
    desc: 'I created an Employee Management System using PHP and CodeIgniter with secure authentication, data validation, and a user-friendly Bootstrap interface. The Admin panel enables efficient monitoring and management of employee records, ensuring a reliable and scalable solution',
    tech: ['html','css','bootstrap','javascript','php','sql'],
    img: EMS,
    carousel: [EMS1,EMS2,EMS3],
    source_link: 'https://github.com/Mohd-Farzan/EmployeeManagementSystem.git',
    live_link: 'http://my-project.wuaze.com/',
  },
  {
    id: 2,
    name: 'Clothing web application',
    desc: 'I developed a clothing e-commerce website using the MERN stack, featuring secure user authentication, product filtering, and a dynamic shopping cart. The site is fully responsive, providing a seamless shopping experience across devices.',
    tech: ['mern','json','tailwindcss','shadcn','react-redux'],
    img: ecommerce,
    carousel: [ecommerce1,ecommerce2,ecommerce3],
    source_link: 'https://github.com/Mohd-Farzan/fnf.git',
    live_link: 'https://fnf-eun3.onrender.com/auth/login/',
  },
  {
    id: 3,
    name: 'CRUD web appication',
    desc: 'I developed a full-stack CRUD web application using the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. The application features secure JWT-based authentication, ensuring data privacy and user access control. RESTful APIs facilitate efficient communication between the frontend and backend, enabling seamless data operations such as creating, reading, updating, and deleting records.',
    tech: ['HTML5', 'tailwindcss', 'JavaScript', 'mern'],
    img: crud,
    carousel: [crud1,crud2,crud3],
    source_link: 'https://github.com/Mohd-Farzan/crudApp.git',
    live_link: 'https://tvshowbox.netlify.app/',
  },
  {
    id: 4,
    name: 'Portfolio',
    desc: 'A visually captivating portfolio website built using React and Three.js, showcasing projects, services, skills and an About Me section. The site features smooth animations, responsive design, and an interactive contact form, offering an engaging and user-friendly experience.',
    tech: ['HTML5','CSS', 'tailwindcss', 'JavaScript','react','threejs'],
    img: portfolio,
    carousel: [portfolio1,portfolio2,portfolio3],
    source_link: 'https://github.com/Mohd-Farzan/porfolio.git',
    live_link: 'https://mohd-farzan-portfolio.netlify.app/',
  },
];
const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, social, services, navLinks,
};
