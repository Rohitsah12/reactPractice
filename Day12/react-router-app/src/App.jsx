import {BrowserRouter,Routes, Route,Link} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Dashboard from "./Dashboard"

function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">dashboard</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
