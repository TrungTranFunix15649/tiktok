import { useEffect , useState} from "react"

// 1. useEffect(callback)
// - Goi callbakc moi khi component render
// -Goij call back moi khi compoent re-call
// 2. useEffect(callbakc,[])
// - Chi goi callback mot lan sau khi component mounted
// 3. useEffect(callback,[dep]
// - Callback se duoc goi lai moi khi dependency thay doi
// All cases, callback luon duoc goi sau khi component mounted
const  tabs = ['posts', 'comments','albums',]

function Content () {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[type])
    return (
        <div>
            {tabs.map(tab=>(
                <button 
                    key={tab}
                    style={type===tab? {
                        color: '#fff',
                        backgroundColor:'#333'
                    }: {}}
                    onClick={()=>setType(tab)}>{tab}</button>
            ))}
            <input 
                value ={title}
                onChange ={e=>setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content