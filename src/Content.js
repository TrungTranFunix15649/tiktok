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


function Content () {
    const [avatar, setAvatar] = useState()
    useEffect(()=>{
        // Clean up
        return () =>{
            avatar && URL.revokeObjectURL(avatar.preview)}
    }, [avatar])
    const handlePreviewAvatar = (e)=> {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)

    }
  
    return (
        <div>
            <input
                type='file'
                onChange={handlePreviewAvatar}
                />
            {avatar && (
                <img src={avatar.preview} alt='' width="80%"/>
            )}
        </div>
    )
}

export default Content