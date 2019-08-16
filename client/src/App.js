import React, { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('loading...')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/hello')
      const json = await response.json()
      setMessage(json.greet)
    }
    fetchData()
  }, [])

  return <div className="App">{message}</div>
}

export default App
