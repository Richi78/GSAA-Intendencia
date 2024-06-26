import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Materiales from "./pages/Materiales";
import FormularioRegist from "./pages/FormularioRegist";
import EditarMaterial from "./pages/EditarMaterial";
import { useUsuarioStore } from "./store/Logeado";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import Navbar from "./Components/Navbar/Navbar";
import Default from "./pages/Default";
import MaterialCard from "./Components/MaterialCard/MaterialCard"

function App() {
  const { token } = useUsuarioStore();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!!token} />}>
          <Route path="/registrar" element={<FormularioRegist />} />
          <Route path="/editar/:id_material" element={<EditarMaterial />} />
          <Route path="/materiales" element={<Materiales />} />
          <Route path="/detalle/:id_material" element={<MaterialCard />} />
        </Route>
        <Route path="/*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
