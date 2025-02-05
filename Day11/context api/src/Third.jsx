import GlobalContext from "./global"
import { useContext } from "react"

export default function Third(){
    const data=useContext(GlobalContext)
    return(
        <>
            <h2>abcd: {data.count}</h2>
            <button onClick={()=>{data.setCount(data.count+1)}}>Increment</button>
        </>
    )
}