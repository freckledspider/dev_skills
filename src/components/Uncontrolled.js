import { useRef } from "react";

function Uncontrolled(props){

    const inputRef= useRef(null)

    const handleClick = (event) => {
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    }

    return <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>Submit</button>
    </div>
}

export default Uncontrolled