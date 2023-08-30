import { NavLink, useNavigate } from "react-router-dom";
import InputWithLabel from "../Create/InputWithLabel";

const Reset = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col p-8 w-[500px] border-2 border-black relative rounded-md max-md:w-[100%] bg-[#fff]">
        <img src={"dogConfuse.png"} className="w-44 h-40 m-[-25px]"></img>
        <h1 className="text-2xl my-5 font-bold font-sans">¿Olvidaste tu contraseña?</h1>
        <form className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-[350px]">
          <InputWithLabel
          label="Correo electrónico"
          type="email"
          placeholder="user123@thinderpet.com"
          name="emailUser"
          iconClass="fa-envelope"/>            
          <div className="flex flex-row justify-between">
            <NavLink to={"/reset"} className="text-[#979797] text-sm mr-5">
              Elegir otro método
            </NavLink>
            <NavLink to={"/reset"} className="text-[#141414] text-sm">
              ¿Necesita Ayuda?
            </NavLink>
          </div>
          </div>
          <div className="flex flex-col m-auto gap-4 mt-4">
          <button
            onClick={handleClick}
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
          >
            Enviar Mail
          </button>
          <NavLink to={"/login"}>
            <button
            className="bg-red-400 text-white px-4 py-2 rounded-xl"
            >
              <i className="fa-solid fa-arrow-left mr-2" style={{color: "#fff"}}></i>Atras
            </button>
          </NavLink>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;