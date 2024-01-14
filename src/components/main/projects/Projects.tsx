import BlockTitle from '../BlockTitle';
import { Project } from '../../../types';
import ProjectTemplate from './ProjectTemplate';

const projectsList: Project[] = [
  {
    title: 'Portfolio',
    description: 'This website! Built with Vite.js, React, Tailwind using TypeScript.',
    tech: ['Vite.js', 'React', 'Tailwind CSS', 'Typescript'],
    image: '/portfolio/portfolio-project.png',
    link: '#',
    repo: 'https://github.com/golovko/golovko.github.io',
  },
  {
    title: 'Zbir.net',
    description:
      'As a volunteer developer I am working on a full-stack project using framework Next.js, MongoDB on the backend and React, Tailwind CSS on the frontend. This project uses Turborepo monorepository to separate statically generated frontend part from dynamic server-side rendered admin part and updater service, common code stored as separate local packages. The project is written in TypeScript. We use ESLint for static code analysis, Docker for build and deploy pipeline with Gitlab CI/CD.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'React', 'MongoDB', 'Turborepo', 'Tailwind CSS', 'ESLint', 'Docker'],
    image: '/portfolio/zbir_project.png',
    link: 'https://zbir.net/p/6ys5TXkoWw',
    repo: 'https://gitlab.com/golovko.sergii',
  },
  {
    title: 'EventFirst ticket scanner mobile app',
    description: `Cross-platform mobile application. I worked closely with a CEO of an event agency to get all the user stories and requirements and with a backend team to use the API.
                  Key features: scanning tickets with phone camera, offline mode, sync with server in automatic and manual mode, auth.
                  Application written in C# with the .NET MAUI framework, using open source libraries (bar/qr code reader ZXing.Net.MAUI), utilized MVVM pattern.`,
    tech: ['C#', '.Net', 'MAUI', 'MVVM', 'Mobile App'],
    image: '/portfolio/eventfirst_project.png',
    link: 'https://eventfirst.co.uk',
    repo: 'https://githab.com',
  },
  {
    title: 'Flashcard mobile app',
    description: `A full-stack Flashcard revision application. The app is designed to assist students in their studies by allowing them to upload custom questions and answers for revision. (The project was developed by a team of six Northcoders Bootcamp students)`,
    tech: [
      'React Native',
      'Mobile App',
      'Expo',
      'Backend',
      'Node.JS',
      'Express',
      'MongoDb',
      'Jest',
      'Supertest',
      'TDD',
    ],
    image: '/portfolio/cards_project.png',
    link: 'https://github.com/golovko/flash-cards-fe',
    repo: 'https://github.com/golovko/flash-cards-be',
  },
  {
    title: 'NC News',
    description: `A full-stack web application. The back-end was built using Node.js, Express, and PostgreSQL, hosted on Render. The API supports CRUD operations, pagination, filtering, sorting, comment posting and deletion, and vote increment or decrement.
The front-end is built with React and HTML/CSS, hosted on Netlify. The web application allows users to log in, filter articles by topic, and sort them by comment count, date, or likes in ascending or descending order, adding and deleting own comments`,
    tech: ['Node.JS', 'Express', 'PostgreSQ', 'Jest', 'Supertest', 'React', 'CSS', 'HTML', 'TDD', 'GitHab Action'],
    image: '/portfolio/nc-news-project.png',
    link: 'https://newsnc.netlify.app/',
    repo: 'https://github.com/golovko/nc-news',
  },
  {
    title: 'ToDoIt',
    description:
      'Todo app with personal account, Firebase authorisation, CRUD operations and nice clean design built with Tailwind CSS',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Postgres', 'Prisma (ORM)'],
    image: '/portfolio/todo_project.png',
    link: 'https://todo-golovko.vercel.app/',
    repo: 'https://github.com/golovko/todo',
  },
];
const Projects = () => {
  return (
    <div id='projects' className='mb-24'>
      <BlockTitle
        title='My Projects'
        subtitle='Projects I have worked on. Some projects have closed repositories, for access please contact me and I will give you access.'
      />
      <div className='flex flex-wrap max-w-full mx-auto gap-3'>
        {projectsList.map((project) => (
          <ProjectTemplate key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
