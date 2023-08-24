import "./App.css";
import { register } from "swiper/element";
import Slider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login";
import { useState } from "react";

register();

function App() {
  const [usuario, setUsuario] = useState(false);
  return (
    <main className="">
      <Navbar />
      {usuario ? <Slider /> : <Login setUsuario={setUsuario} />}
    </main>
  );
}

export default App;
