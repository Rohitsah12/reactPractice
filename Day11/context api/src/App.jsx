import { useState } from "react"
import Second from "./Second";
import GlobalContext from "./global";



function App() {
  // const [count,setCount]=useState(0);

  // return (
  //   <>
  //     <h1>Hello coder Army</h1>
  //     <Increment counts={count} setCounts={setCount}/>
  //     <Decrement counts={count} setCounts={setCount}/>
  //   </>
  // )
  const [count,setCount]=useState(0);
  return(
    <>
      <GlobalContext.Provider value={{count,setCount}} >
      <h1>Hello Coder Army</h1>
      <Second />
      </GlobalContext.Provider>
      
    </>
  )
}

export default App
