import { memo} from "react"

function Content ({onIncrease}) {
    console.log("Rendering")
    return (
        <>
        <h2>Hello Anh em F8 </h2>
        <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(Content)