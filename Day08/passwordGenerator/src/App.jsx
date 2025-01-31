import { useCallback, useEffect, useState } from 'react'
import './App.css'

//password:ABDBHJDVB, setPassword("ABDBHJDVB")

//length:10,setLength(19)

//numberChanged=false,setNumberCHanged(false)

//charChanged=false,setCharChanged(false)


function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(10);
  
  const [numberChanged,setNumberChanged]=useState(false);
  const [charChanged,setCharChanged]=useState(false);
  const generatePassword=useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberChanged) 
      str+='0123456789';
    if(charChanged) 
      str+='+-)(*&^%$#@!~`{}';
    let pass='';

    for(let i=0;i<length;i++){
      pass+=str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pass);
  },[length,numberChanged,charChanged])
  
  useEffect(()=>{
    generatePassword();
  },[generatePassword]);
  return(
    <>
      <h1>{password}</h1>
      <div className='second'>
        <input type='range' min={5} max={50} value={length} onChange={()=>setLength(event.target.value)} ></input>
        <label>Length is:{length}</label>

        <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setNumberChanged(!numberChanged)}></input>
        <label>Number</label>

        <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChanged(!charChanged)}></input>
        <label>Character</label>
      </div>
    </>
  )
}

export default App
