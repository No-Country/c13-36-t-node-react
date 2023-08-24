import "./App.css";
import { register } from "swiper/element";
import Slider from "./Components/Slider/Slider";
import Avatar from "./Components/Avatar/Avatar";

register();

function App() {
  return (
    <>
      <Avatar size="large" src="avatar.png" />
      <Slider />
    </>
  );
}

export default App;
