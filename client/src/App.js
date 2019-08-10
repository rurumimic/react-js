import React, { useState, useEffect } from 'react';

function App() {

  const [message, setMessage] = useState('loading...');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/hello');
      const json = response.json();
      return json.greet;
    }
    setMessage(fetchData());
  }, []);

  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
