
import React,{ useEffect,useState } from "react";
import '../App.css'

function Colorful({name}){
    const [color,setColor]=useState("white");

    console.log("render")
    console.log(name);
    
    
    //useEffect sbse last mein executeh hoga
    useEffect(()=>{
      console.log("Use effect Executed");
  
      document.body.style.backgroundColor=color;
    },[color]);
        return(
          <>
          <h1>{name}</h1>
            <h1>Background Color Changer</h1>
            <div className='but'>
              <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
              <button  style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
              <button  style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
              <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
              <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
            </div>
          </>
        )
  
}

export default  React.memo(Colorful);