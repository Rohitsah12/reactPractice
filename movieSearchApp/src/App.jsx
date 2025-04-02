import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Mainroutes from "./routes/Mainroutes";

export default function App(){
  console.log(import.meta.env.VITE_API_KEY);
  return(
    <>
      <Navbar />
      <Mainroutes />
    </>
  )
}