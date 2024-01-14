import BlockTitle from '../BlockTitle';

const Contacts = () => {
  return (
    <div id='contacts' className='mb-24'>
      <BlockTitle
        title='Contact Me'
        subtitle="Feel free to contact me by any means available. I'm always open for communication!"
      />
      <div className='container  mx-auto'>
        <div className='grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 bg-gray-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
            </span>

            <h2 className='mt-4 text-lg font-medium  text-white'>Email</h2>
            <p className='mt-2  text-gray-400'>Write a few words by email.</p>
            <p className='mt-2  text-blue-400'>
              <a href='mailto:golovko.sergey@gmail.com'>golovko.sergey@gmail.com</a>
            </p>
          </div>

          <div>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 bg-gray-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
            </span>

            <h2 className='mt-4 text-lg font-medium  text-white'>Based</h2>
            <p className='mt-2  text-gray-400'>Portsmouth, UK</p>
            <p className='mt-2  text-blue-400'>Open for relocation</p>
          </div>

          <div>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 bg-gray-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
            </span>

            <h2 className='mt-4 text-lg font-medium  text-white'>Phone</h2>
            <p className='mt-2  text-gray-400'>Keep it for urgent communications</p>
            <p className='mt-2  text-blue-400'>+44 7818 42 12 72</p>
          </div>

          <div>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 bg-gray-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillRule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clipRule='evenodd'
                />
              </svg>
            </span>

            <h2 className='mt-4 text-lg font-medium  text-white'>GitHub</h2>
            <p className='mt-2 text-gray-400'>Feel free to follow me on GitHub</p>
            <p className='mt-2 text-blue-400'>
              <a href='https://github.com/golovko/' target='_blank'>
                https://github.com/golovko/
              </a>
            </p>
          </div>

          <div>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
            </span>

            <h2 className='mt-4 text-lg font-medium text-white'>LinkedIn</h2>
            <p className='mt-2 text-gray-400'>
              I'm looking to expand my professional network. Please send me an invitation
            </p>
            <p className='mt-2 text-blue-400'>
              <a href='https://www.linkedin.com/in/sergii-golovko/' target='_blank'>
                https://www.linkedin.com/in/sergii-golovko/
              </a>
            </p>
          </div>

          <div>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='currentColor' viewBox='0 0 34 34'>
                <path d='M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z' />
              </svg>
            </span>

            <h2 className='mt-4 text-lg font-medium text-white'>Upwork</h2>
            <p className='mt-2  text-gray-400'>Ready to solve your problem with a coding solution</p>
            <p className='mt-2  text-blue-400'>
              <a href='https://www.upwork.com/freelancers/~018722ec870837e19e' target='_blank'>
                https://www.upwork.com/freelancers/golovko/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
