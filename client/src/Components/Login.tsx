import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import InputWithLabel from "./Create/InputWithLabel";
import login from "../services/users";
import { Usuario } from "../types/types";

interface LoginProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: (usuario: Usuario) => void;
}

const Login: React.FC<LoginProps> = ({ setusuario }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const [view, setView] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(email, password);
    if (typeof response === "string") {
      alert("datos erroneos");
    } else {
      setusuario(response);
    }
  };

  const viewPassword = () => {
    setView(!view);
  };
  return (
    <main className="flex justify-start flex-col items-center p-2 w-[500px] m-12 border-2 border-[#000] relative rounded-md max-sm:w-[100%] max-sm:bg-[#fff] max-sm:py-8 ">
      <img
        src={"avatar.png"}
        className="absolute w-24 top-[-50px] border-2 rounded-full"
      ></img>
      <h1 className="text-2xl mt-12 font-bold">Bienvenido a ThinderPet</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col  my-4 text-left gap-3 w-[350px] max-md:w-[100%] max-md:px-2"
      >
        <InputWithLabel
          label="Correo electrónico"
          type="email"
          placeholder="user123@thinderpet.com"
          name="emailUser"
          iconClass="fa-envelope"
          onChange={setEmail}
        />
        <InputWithLabel
          label="Contraseña"
          type={view ? "text" : "password"}
          placeholder="•••••••••"
          name="password"
          iconClass={view ? "fa-eye" : "fa-lock"}
          viewPassword={viewPassword}
          onChange={setPassword}
        />
        <button
          onClick={handleLogin}
          value="Login"
          className="bg-[#54A4A5] w-40 text-white px-4 py-2 rounded-xl m-auto"
        >
          Iniciar Sesión
        </button>
      </form>
      <NavLink
        to={"/reset"}
        className="font-semibold text-sm hover:underline-offset-1 my-2"
      >
        ¿Olvidaste tu contraseña?
      </NavLink>
      <div className="flex flex-col m-auto gap-4">
        <NavLink to={"/"}>
          <button className="bg-red-400 text-white px-4 py-2 rounded-xl ">
            <i
              className="fa-solid fa-arrow-left mr-2"
              style={{ color: "#fff" }}
            ></i>
            Atras
          </button>
        </NavLink>
      </div>
      <NavLink to={"/create"} className="my-2">
        <p className="border-b-2 border-gray-300 my-2">
          Si no tienes cuenta, registrate aquí
        </p>
      </NavLink>
      <div className="flex justify-center gap-4 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </main>
  );
};

export default Login;
