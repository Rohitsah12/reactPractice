import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';


//Fibonacci Number: 0 1 1 2 3 5 8 13 21
function App() {
  let [count,setCount]=useState(0);
  const [number,setNumber]=useState("")
  const [result,setResult]=useState(0)
  const [clicked,setClicked]=useState(false);
  function Fibonacci(n){
    if(n<=1) return 1;
    return Fibonacci(n-1)+Fibonacci(n-2);
  }
  useEffect(()=>{
    setResult(Fibonacci(Number(number)))
  },[clicked])
  return (

    <>
      <h1>Count is:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>

      <div className='forms'>
        <h2>Fib ans is:{result}</h2>
        <input type='text' onChange={()=>setNumber(event.target.value)} value={number}></input>
        <button onClick={()=>setClicked(!clicked)}>Show Fib</button>
      </div>
    </>
  )
}

export default App
