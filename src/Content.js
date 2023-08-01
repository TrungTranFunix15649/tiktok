import { useEffect , useState} from "react"

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
const lessons = [
    {
        id:1,
        name: 'React la gi'
    },
    { 
        id:2,
        name: 'SPA/MPA'
    },
    {
        id:3,
        name: 'Arrorw function'

    }
]

function Content () {
    const [lessonId, setLessionId] = useState(1)
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {lessons.map(lesson =>(
                    <li
                        key={lesson.id}
                        style={{
                            color:lessonId === lesson.id?
                                'red':
                                '#333'
                        }}
                        onClick={() =>{setLessionId(lesson.id)}}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content