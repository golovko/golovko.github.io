export const Footer = () => {
  return (
    <footer className=' rounded-lg shadow m-10 bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm sm:text-center text-gray-400'>
          © 2024
          <a href='/' className='hover:underline'>
            Sergii Golovko
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0'>
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
    </footer>
  );
}
