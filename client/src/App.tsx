import "./App.css";
import { register } from "swiper/element";
import Slider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";

register();

function App() {


  return (
    <main className="">
      <Navbar></Navbar>
      <Slider/>
    </main>
  );
}

export default App;
