import "./App.css";
import { register } from "swiper/element";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import Login from "./Components/Login";
import PetForm from "./Components/Forms/PetForm";
import Landing from "./Components/Landing/Landing";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Reset from "./Components/Reset/Reset";
import Create from "./Components/Create/Create";
import { Usuario } from "./types/types";

register();

function App() {
  const [usuario, setUsuario] = useState<Usuario | undefined>();
  const mascotas = ["chihuahua", "frances", "golden", "pastor"];
  const loged = localStorage.getItem("token");
  useEffect(() => {
    if (loged) {
      const usuario = JSON.parse(loged);
      setUsuario(usuario);
    }
  }, [loged]);

  return (
    <main className="flex flex-col w-full items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              !loged ? (
                <>
                  <Navbar setusuario={setUsuario} usuario={usuario} />
                  <Login setusuario={setUsuario} />
                </>
              ) : (
                <Navigate to="/main" />
              )
            }
          />
          <Route
            path="/main"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Slider mascotas={mascotas} />
              </>
            }
          />
          <Route
            path="/reset"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Reset />
              </>
            }
          />
          <Route
            path="/formulario"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <PetForm />
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Create></Create>
              </>
            }
          />
          <Route
            path="/mascotas"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <PetForm />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
