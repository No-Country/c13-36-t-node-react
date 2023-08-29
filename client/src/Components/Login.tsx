import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputWithLabel from "./Create/InputWithLabel";

interface LoginProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: (usuario: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setusuario }) => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const handleClick = () => {
    setusuario(true);
    navigate("/main");
  };

  const viewPassword = () => {
    setView(!view);
  };
  return (
    <main className="flex justify-start flex-col items-center w-[500px] border-2 border-black relative rounded-md max-md:w-[100%] border-2 bg-[#fff] m-10">
      <img
        src={"avatar.png"}
        className="absolute w-24 top-[-50px] border-2 rounded-full"
      ></img>
      <h1 className="text-2xl mt-12 font-bold">Bienvenido a ThinderPet</h1>
      <form className="flex flex-col items-start gap-3 w-[350px]">
        <InputWithLabel
          label="Correo electrónico"
          type="email"
          placeholder="user123@thinderpet.com"
          name="emailUser"
          iconClass="fa-envelope"
        />
        <InputWithLabel 
          label="Contraseña"
          type={view ? "text" : "password"}
          placeholder="•••••••••"
          name="password"
          iconClass={view ? "fa-eye" : "fa-lock"}
          viewPassword={viewPassword}/>
        <NavLink
          to={"/reset"}
          className="font-semibold text-sm hover:underline-offset-1"
        >
          ¿Olvidaste tu contraseña?
        </NavLink>
        <div className="flex flex-col m-auto gap-4">
          <button
            onClick={handleClick}
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
          >
            Iniciar Sesión
          </button>
          <NavLink to={"/"}>
            <button className="bg-red-400 text-white px-4 py-2 rounded-xl">
              <i
                className="fa-solid fa-arrow-left mr-2"
                style={{ color: "#fff" }}
              ></i>
              Atras
            </button>
          </NavLink>
        </div>
        <NavLink to={"/create"} className="mb-4">
          <p className="border-b-2 border-gray-300">
            Si no tienes cuenta, registrate aquí
          </p>
        </NavLink>
      </form>
    </main>
  );
};

export default Login;
