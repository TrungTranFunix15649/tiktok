import { useRef, useState, useEffect } from "react";
import Content from "./Content";
function App() {
 
  const [count, setCount] = useState(60)

    const timerId  = useRef()
    const preCount = useRef()
    useEffect(() =>{
      preCount.current = count
    }, [count])
  
    const handleStart = () => {
        timerId.current = setInterval(() =>{
            setCount(prevCount => prevCount -1)
        },1000)
        console.log('start->', timerId.current)
    }
    console.log(count, preCount.current)
    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('stop->', timerId.current)
    }
    return (
        <div style={{padding:20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick ={handleStop}>Stop</button>
        </div>
    )
    // <div className="App" style={{padding:20}}>
    // </div>
  
}

export default App;
