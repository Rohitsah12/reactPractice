import Mainroutes from "./routes/Mainroutes";

export default function App(){
  console.log(import.meta.env.VITE_API_KEY);
  return(
    <>
    <nav>Simple nav</nav>
      <Mainroutes />
    </>
  )
}