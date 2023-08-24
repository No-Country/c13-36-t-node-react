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
    <main className="">
      <Navbar setFormulario={setFormulario} />
      {formulario ? (
        <PetForm />
      ) : usuario ? (
        <Slider />
      ) : (
        <Login setUsuario={setUsuario} />
      )}
    </main>
  );
}

export default App;
