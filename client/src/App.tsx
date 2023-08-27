import "./App.css";
import { register } from "swiper/element";
import Slider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login";
import { useState } from "react";
import PetForm from "./Components/Forms/PetForm";

register();

function App() {
  const [usuario, setUsuario] = useState(false);
  const [formulario, setFormulario] = useState(false);
  return (
    <main className="flex flex-col items-center">
      <Navbar
        setFormulario={setFormulario}
        setusuario={setUsuario}
        usuario={usuario}
      />
      {formulario ? (
        <PetForm />
      ) : usuario ? (
        <Slider />
      ) : (
        <Login setUsuario={setUsuario} />
      )}
      {/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}
    </main>
  );
}

export default App;
