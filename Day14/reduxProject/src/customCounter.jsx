import { useState } from "react"
import {useDispatch} from 'react-redux';
import { customIncreaser } from './Slicer1';


export default function CustomCounter(){
    const [number,setNumber]=useState('');
    const dispatch=useDispatch();

    function handleClick(){
        dispatch(customIncreaser(Number(number)));
        setNumber('');
    }
    return(
        <>
            <input type="number" value={number} onChange={(e)=>(setNumber(e.target.value))}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}