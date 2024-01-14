import { useState } from "react";

export const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <nav className='border-gray-200 bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src='./src/assets/golovko_avatar_.png' className='w-12 h-12 rounded-full' alt='Avatar' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Sergii Golovko</span>
        </a>
        <button
          data-collapse-toggle='navbar-default'
          onClick={() => setIsHidden(val => !val)}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className={isHidden ? " " : 'hidden' + ' w-full md:block md:w-auto'} id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700'>
            <li>
              <a href='#header' className='hover:underline me-4 md:me-6'>
                About
              </a>
            </li>
            <li>
              <a href='#tech' className='hover:underline me-4 md:me-6'>
                My Tech Stack
              </a>
            </li>
            <li>
              <a href='#projects' className='hover:underline me-4 md:me-6'>
                Projects
              </a>
            </li>
            <li>
              <a href='#contacts' className='hover:underline'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
