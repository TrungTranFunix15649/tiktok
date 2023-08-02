import { useRef , useState} from "react"

// 1. useEffect(callback)
// - Goi callbakc moi khi component render
// -Goij call back moi khi compoent re-call
// 2. useEffect(callbakc,[])
// - Chi goi callback mot lan sau khi component mounted
// 3. useEffect(callback,[dep]
// - Callback se duoc goi lai moi khi dependency thay doi
// 1. All cases, callback luon duoc goi sau khi component mounted
// 2. Cleanup duoc goi truoc khi component unmounted
// 3. Cleanup fuc luon duoc goi truoc khi callback duoc goi (tru lan mounted)


function Content () {
    const [count, setCount] = useState(60)

    let timerId  = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() =>{
            setCount(preCount => preCount = count-1)
        },1000)
        console.log('start->', timerId.current)
    }

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
}

export default Content