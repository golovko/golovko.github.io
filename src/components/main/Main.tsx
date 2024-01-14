import TechStack from './TechStack';
import Contacts from './contacts/Contacts';
import Projects from './projects/Projects';
//todo: add quotes
// import Quotes from './quotes/Quotes';

const Main = () => {
  return (
    <div className='p-10'>
      <TechStack />
      <Projects />
      <Contacts />
      {/* <Quotes /> */}
    </div>
  );
};

export default Main;
