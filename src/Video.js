import { forwardRef, useImperativeHandle, useRef } from "react"
import dance from './videos/dance.mp4';

function Video(props, ref) {
    const videoRef = useRef()
   useImperativeHandle(ref, () =>({
    play() {
        videoRef.current.play();
    },
    pause() {
        videoRef.current.pause();
    }
   }))
    return (
        <video 
                ref= {videoRef}
                src={dance}
                width={180}
        />
        
    )
}

export default forwardRef(Video)