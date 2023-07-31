import { useEffect , useState} from "react"

// 1. useEffect(callback)
// - Goi callbakc moi khi component render
// -Goij call back moi khi compoent re-call
// 2. useEffect(callbakc,[])
// - Chi goi callback mot lan sau khi component mounted
// 3. useEffect(callback,
// All cases, callback luon duoc goi sau khi component mounted
function Content () {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[])
    return (
        <div>
            <input 
                value ={title}
                onChange ={e=>setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content