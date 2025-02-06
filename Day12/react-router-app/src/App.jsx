import {BrowserRouter,Routes, Route,Link} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Dashboard from "./Dashboard"
import Details from "./Details"
import Zero from "./Zero"
import Hello from "./Hello"
import Hi from "./Hi"
function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/details">Details</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/details" element={<Details />}>
          <Route index element={<Zero />}></Route>
          <Route path="Hello" element={<Hello />}></Route>
          <Route path="Hi" element={<Hi />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
