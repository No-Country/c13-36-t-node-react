import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    <main className="flex justify-start flex-col items-center w-[500px] border-2 border-black relative rounded-md max-md:w-[100%]  bg-[#fff] m-10">
      <img
        src={"avatar.png"}
        className="absolute w-24 top-[-50px] border-2 rounded-full"
      ></img>
      <h1 className="text-2xl mt-12 font-bold">Bienvenido a ThinderPet</h1>
      <form className="flex flex-col items-start gap-3 w-[350px]">
        <label className="font-semibold ml-1 mt-2" htmlFor="emailUser">
          Correo electrónico
        </label>
        <div className="relative w-[100%]">
          <input
            type="text"
            placeholder="user123@thinderpet.com"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="emailUser"
          />
          <i
            className="fa-solid fa-envelope absolute right-3 top-[12px]"
            style={{ color: "#333" }}
          ></i>
        </div>

        <label className="font-semibold ml-1 mt-2" htmlFor="password">
          Contraseña
        </label>
        <div className="relative w-[100%]">
          <input
            type={view ? "text" : "password"}
            placeholder="•••••••••"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="password"
          />
          <i
            className={
              view
                ? "fa-solid fa-eye absolute right-3 top-[10px] hover:cursor-pointer"
                : "fa-solid fa-lock absolute right-3 top-[10px] hover:cursor-pointer"
            }
            style={{ color: "#333" }}
            onClick={viewPassword}
          ></i>
        </div>
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
        <NavLink to={"/create"} className="mb-4 ">
          <p className="border-b-2 border-gray-300">
            Si no tienes cuenta, registrate aquí
          </p>
        </NavLink>
      </form>
    </main>
  );
};

export default Login;
