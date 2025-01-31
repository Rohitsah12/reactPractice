
import { useState } from 'react';
import './App.css'
function App() {
  let [count,setCount]= useState(0);

  function incrementNumber(){
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    // console.log(count);
    // document.querySelector('h1').textContent=`Count is ${count}`;
    
  }
  function decrementNumber(){
    count=count-1;
    setCount(count);
  }
  return(
    <div className="first">
      <h1>Count is:{count} </h1>
      <button onClick={incrementNumber}>Increment </button>
      <button onClick={decrementNumber}>Decrement</button>
    </div>
    
  )
}

export default App
