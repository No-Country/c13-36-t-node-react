import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import InputWithLabel from "./Create/InputWithLabel";
import login from "../services/users";

interface LoginProps {
  setusuario: (usuario: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setusuario }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const handleLogin = async () => {
    const response = await login(email, password);
    response.user ? setusuario(true) : setusuario(false);
    console.log(response.user);
    navigate("/main");
  };

  const viewPassword = () => {
    setView(!view);
  };
  return (
    <header className="flex justify-start flex-col items-center p-2 w-[500px] border-2 border-[#000] relative rounded-md max-sm:w-[100%] max-sm:bg-[#fff] m-8">
      <img
        src={"avatar.png"}
        className="absolute w-24 top-[-50px] border-2 rounded-full"
      ></img>
      <h1 className="text-2xl mt-12 font-bold">Bienvenido a ThinderPet</h1>
      <form className="flex flex-col gap-3 w-[350px] max-md:w-[100%] max-md:px-2">
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
        <NavLink
          to={"/reset"}
          className="font-semibold text-sm hover:underline-offset-1"
        >
          ¿Olvidaste tu contraseña?
        </NavLink>
        <div className="flex flex-col m-auto gap-4">
          <button
            onClick={handleLogin}
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
          >
            Iniciar Sesión
          </button>
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
          <p className="border-b-2 border-gray-300">
            Si no tienes cuenta, registrate aquí
          </p>
        </NavLink>
        <div className="flex justify-center gap-4 text-2xl">
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
        </div>
      </form>
    </header>
  );
};

export default Login;
