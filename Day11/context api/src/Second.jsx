import { useContext } from "react";
import Third from "./THird";
import GlobalContext from "./global";

export default function Second(){
    const {count,setCount}=useContext(GlobalContext)
    return(
        <>
            <h2>Kaise h aap Sbb log {count}</h2>
            <Third  />
        </>
    )
}