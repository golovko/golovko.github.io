import { Project } from '../../../types';

const ProjectTemplate = ({ project }: { project: Project }) => {
  return (
    <div className='flex max-w-sm min-w-xs'>
      <div className='border rounded-lg shadow bg-gray-800 border-gray-700'>
        <img className='rounded-t-lg grayscale hover:grayscale-0 duration-300' src={project.image} alt='' />
        <div className='p-5'>
          <a href={project.link} target='_blank'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{project.title}</h5>
          </a>
          <p className='mb-3 font-normal text-gray-400'>{project.description}</p>
          <ul className='flex mb-2 flex-wrap text-white'>
            {project.tech.map((tech) => (
              <li className='mr-1' key={tech}>
                <span className='font-semibold text-xs underline text-blue-500 decoration-indigo-500'>{tech}</span>
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            target='_blanc'
            className='mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
            Demo
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
          <a
            href={project.repo}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 bg-gray-600 hover:bg-gray-700 focus:ring-gray-800'>
            Repo
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
