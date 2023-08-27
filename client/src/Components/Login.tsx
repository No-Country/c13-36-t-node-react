import { NavLink, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <div className="flex justify-start items-start flex-col">
      <h1 className="text-2xl my-10 font-bold">Login</h1>
      <form className="flex flex-col items-start gap-3">
        <span className="font-semibold ml-1 mt-4">Correo electrónico</span>
        <input
          type="text"
          placeholder="user123@thinderpet.com"
          className="bg-[#D9D9D9] px-4 py-2 rounded-lg"
        />
        <span className="font-semibold ml-1 mt-4">Contraseña</span>
        <input
          type="password"
          placeholder="•••••••••"
          className="bg-[#D9D9D9] px-4 py-2 rounded-lg"
        />
        <NavLink to={"/reset"} className="text-[#D9D9D9] text-sm">
          ¿olvidaste tu contraseña?
        </NavLink>
        <button
          onClick={handleClick}
          value="Login"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Ingresar
        </button>
        <NavLink to={"/create"} className="mt-12">
          Si no tienes cuenta, registrate aquí
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
