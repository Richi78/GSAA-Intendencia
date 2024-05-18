import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from "./pages/Landing"
import { Admin, Analytics, Dashboard, Home } from "./pages"
import Test1 from "./Components/Test1"
import Login from "./Components/Login"
import Materiales from "./pages/Materiales"
import FormularioRegist from "./pages/FormularioRegist"

function App () {

  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route index element={<Login />}/>
        <Route path="/registrar" element={<FormularioRegist />}/>
        <Route path="/materiales" element={<Materiales/>}/>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/test" element={<Test1 />}/>
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
    return <nav>
        <ul>
          <li>
            <Link to={"/landing"}>Landing</Link>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Darshboad</Link>
          </li>
          <li>
            <Link to={"/analytics"}>Analytics</Link>
          </li>
          <li>
            <Link to={"/admin"}>Admin</Link>
          </li>
        </ul>
      </nav>
}

export default App