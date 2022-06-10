import React, { useEffect, useState } from 'react';
import TestAPI from './Component/TestAPI';
import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json)
      });
  }, [])
  return (
    <div className='App'>
      <h1>
        Fetch Data API With React UseEffect
      </h1>
      <h3>
        {data.title}
      </h3>
      <TestAPI />
    </div>
  );
}

export default App;