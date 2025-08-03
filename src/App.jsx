import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello World!');
  const [isError, setIsError] = useState(false);
  // kind of a dynamic object in component memory 

  // jsx - javascript xml 

  useEffect(() => {
    if (count < 0) {
      setMessage('Negative');
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [count]);

  return (
    <>

      {isError ? <h1 style={{ color: 'red', backgroundColor: 'pink', padding: 15, borderRadius: 10 }}>{message}</h1> : <h1>{message}</h1>}

      <button onClick={() => setCount((count) => count - 1)}> - </button>
      {count}
      <button onClick={() => setCount((count) => count + 1)}> + </button>
    </>
  )
}

export default App
