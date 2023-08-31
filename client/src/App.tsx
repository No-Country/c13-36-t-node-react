import "./App.css";
import { register } from "swiper/element";
import Slider from "./Components/Slider/Slider";
import Login from "./Components/Login";
import PetForm from "./Components/Forms/PetForm";

register();
type Usuario = {
  token: string;
  user: {
    message: string;
    user: {
      firstName: string;
      lastNme: string;
      email: string;
      password: string;
      localization: string;
      phone: number;
      createdAt: string;
      updatedAt: string;
      id: string;
    };
  };
};

function App() {
  const [usuario, setUsuario] = useState(false);
  const mascotas = ["chihuahua", "frances", "golden", "pastor"];
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
