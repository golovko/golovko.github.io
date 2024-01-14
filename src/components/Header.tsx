export default function Header() {
  return (
    <section
      id='header'
      className="bg-gray-900 z--10 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className='mb-20 mt40 py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 relative'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white'>
          Sergii Golovko
        </h1>
        <p className='mb-2 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-200'>Full Stack Developer</p>
        <p className='mb-8 px-40 font-semibold text-gray-400'>Portsmouth, UK</p>
        <p className='mb-8 lg:px-40 text-gray-400'>
          A full-stack developer with over 10 years of overall experience in IT. Starting out as a technical support
          manager, I have always had an interest in coding and technical projects. As I learnt more about the world of
          software, I was inspired to make a formal transition to become an engineer. Now, having completed the
          Northcoders software engineering bootcamp, and working as a volunteer fullstack developer I have broadened my
          technical skills and have a range of projects. I am seeking a role that can progress my skill set in both
          JavaScript and .NET ecosystems.
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
          <div className=''>
            <button
              type='button'
              onClick={() => {
                const url = 'https://github.com/golovko/';
                window.open(url, '_blank');
              }}
              className='text-white bg-[#24292F] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2'>
              <svg
                className='w-4 h-4 me-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clipRule='evenodd'
                />
              </svg>
              Github
            </button>
            <button
              type='button'
              onClick={() => {
                const url = 'https://www.linkedin.com/in/sergii-golovko/';
                window.open(url, '_blank');
              }}
              className='text-white bg-[#24292F] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 me-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
              LinkedIn
            </button>
            <button
              type='button'
              onClick={() => {
                const url = 'https://www.upwork.com/freelancers/~018722ec870837e19e';
                window.open(url, '_blank');
              }}
              className='text-white bg-[#24292F] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 me-2' fill='currentColor' viewBox='0 0 34 34'>
                <path d='M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z' />
              </svg>
              Upwork
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
