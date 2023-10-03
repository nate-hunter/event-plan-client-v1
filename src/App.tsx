import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [things, setThings] = useState([]);

  useEffect(() => {
    const getThings = async () => {
      const response = await fetch(
        'https://whale-event-plan-app-9c9ut.ondigitalocean.app/api/things/',
      );
      const json = await response.json();
      setThings(json);

      console.log('things', json);
    };
    getThings();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        {things.length > 0
          ? things.map((thing, i) => {
              return <p key={i}>{thing.name}</p>;
            })
          : 'No things'}
      </div>
    </>
  );
}

export default App;
