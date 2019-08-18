import React, { useState, useEffect } from 'react';

const App: React.FC = () => {

  const [message, setMessage] = useState('loading...'); // 초기값 설정

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/hello'); // localhost:8081/api/hello
      const json = await response.json(); // { "greet": "Hello, there." }
      setMessage(json.greet); // "Hello, there."
    }
    fetchData()
  }, []);

  return <div className="App">{message}</div>;
}

export default App;
