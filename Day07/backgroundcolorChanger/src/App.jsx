import { useState } from 'react'
import './App.css'
import Colorful from './component/ColorFul'


//Background color changer
//re-render:- call this function again

//useEffect(callbackFunction,dependency)
//useEffect hook (()=>{},[])


function App() {

  const [count,setCount]=useState(0);

  return(
    <>
    <div className='counter'>
    <h1>Counter is:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>

    </div>
      <Colorful name={count} />
    </>
  )
  
}

export default App
