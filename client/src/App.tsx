import "./App.css";
import { register } from "swiper/element";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import Login from "./Components/Login";
import PetForm from "./Components/Forms/PetForm";
import Landing from "./Components/Landing/Landing";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Reset from "./Components/Reset/Reset";
import Create from "./Components/Create/Create";

register();

function App() {
  const [usuario, setUsuario] = useState(false);

  return (
    <main className="flex flex-col items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Login />
              </>
            }
          />
          <Route
            path="/main"
            element={
              <>
                <Navbar setusuario={setUsuario} usuario={usuario} />
                <Slider />
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
                <Navbar setusuario={setUsuario} usuario={usuario}/>
                <Create></Create>
              </>
            }
           />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
