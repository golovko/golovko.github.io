import BlockTitle from './BlockTitle';

const technologies = [
  'JavaScript',
  'Node.js',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'React Native',
  'Tailwind CSS',
  'Express',
  'Next.js',
  'Git',
  'GitHub',
  'GitHub Actions',
  'Docker',
  'Jest',
  'Supertest',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'RESTful APIs',
  'Jira',
  'Confluence',
  'Figma',
  'C#',
  '.NET',
  'EF (Entity Framework)',
  'MSSQL',
  'MAUI',
  'ASP.NET',
];
const styles = [
  'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
  'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
  'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
  'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
  'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
  'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
  'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
];

const TechStack = () => {
  function rnd() {
    return Math.floor(Math.random() * 6);
  }
  return (
    <div id='tech' className='mb-24'>
      <BlockTitle
        title='My Tech Stack'
        subtitle='I have gained a wide range of technical skills through continuous self-learning, Northcoders coding bootcamp, and participation in commercial and real-world projects. Additionally, my previous work experience has provided me with a deep understanding of SDLC and Agile methodologies, including frameworks such as Scrum and Kanban.'
      />
      <div>
        {technologies.map((tech) => {
          return (
            <button key={tech} type='button' className={styles[rnd()]}>
              {tech}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
