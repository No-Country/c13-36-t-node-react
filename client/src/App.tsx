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
import UserProfile from "./Components/UserProfile/UserProfile";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

register();

function App() {
  const [usuario, setUsuario] = useState<Usuario | undefined>();
  const mascotas = ["chihuahua", "frances", "golden", "pastor"]; //reemplazar por el array de mascotas que tengo que traer del back.
  const loged = localStorage.getItem("token");
  useEffect(() => {
    if (loged) {
      const usuario = JSON.parse(loged);
      setUsuario(usuario);
    }
  }, [loged]);

  return (
    <main className="flex flex-col w-full">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Landing />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/login"
            element={
              !loged ? (
                <>
                  <Navbar setusuario={setUsuario} usuario={usuario} />
                  <Login setusuario={setUsuario} />
                  <Footer></Footer>
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
            path="/reset-password"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Reset />
                <Footer />
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
                <Create />
                <Footer />
              </>
            }
          />
          <Route
            path="/userprofile"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                {loged && <UserProfile usuario={JSON.parse(loged).user} />}
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
          <Route
            path="/mascotas/:id"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <PetForm />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
