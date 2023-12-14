import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Sergii Golovko</h1>
      <div className='card'>
        <p>personal page</p>
      </div>
    </>
  );
}

export default App;
