
//Fibonacci Number: 0 1 1 2 3 5 8 13 21
//1: counter button:increase
//2: input field: Fibonacci numbers


import { useRef } from "react";
import { useState } from "react"



// function App() {
//   const [count,setCOunt]=useState(0);
//   const [number,setNumber]=useState(null);
  
//   function Fibonacci(n){
//     if(n<=1) return n;
//     return Fibonacci(n-1)+Fibonacci(n-2);
//   }
  
//   const result=useMemo(() => Fibonacci(number),[number]);
//   return(
//     <>
//         <h1>{count}</h1>
//         <button onClick={()=>setCOunt(count+1)}>Increment</button>
//         <button onClick={()=>setCOunt(count-1)}>decrement</button>

//         <div>
//           <h2>Fibonacci number is:{result}</h2>
//           <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
//         </div>
//     </>
//   )
// }



// function App(){
//   const [count,setCount]=useState(0);
//   const money=useRef(0);
  

//   return(
//     <>
//       <h1>Counter is:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>

//       <h1>Money is:{money.current}</h1>
//       <button onClick={()=>money=money+1}>Increment</button>
//     </>
//   )
// }



function App(){
  const [time,setTime]=useState(0);
  const [isRunning,setIsRUnning]=useState(false);
  const intervalRef=useRef(null);

  function start(){
    if(!isRunning){
      intervalRef.current=setInterval(()=>{
        setTime((prevTime)=>prevTime+1);
      },1000)
      setIsRUnning(true);
    }
  }
  function stop(){
      if(isRunning){
        clearInterval(intervalRef.current);
      intervalRef.current=null;
      setIsRUnning(false);
      }
  }
  function reset(){
    clearInterval(intervalRef.current);
      intervalRef.current=null;
      setTime(0);
  }
  return(
    <>
      <h1>StopWatch is:{time}</h1>
      <button onClick={start}>Start</button>
      <br /> <br />
      <button onClick={stop}>Stop</button>

      <br /><br />
      <button onClick={reset}>Reset</button>
    </>
  )
}
export default App
