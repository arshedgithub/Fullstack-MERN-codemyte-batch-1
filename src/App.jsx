import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  // jsx - javascript xml 

  return (
    <>
      <button onClick={() => setCount((count) => count - 1)}> - </button>
      {count}
      <button onClick={() => setCount((count) => count + 1)}> + </button>
    </>
  )
}

export default App
