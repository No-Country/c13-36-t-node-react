import { NavLink, useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      {" "}
      <div className="flex justify-start items-start flex-col mt-16">
        <h1 className="text-2xl my-10 font-bold">¿Olvidaste tu contraseña?</h1>
        <form className="flex flex-col items-center gap-3">
          <div className="flex flex-col">
            <span className="font-semibold ml-1 mt-4 mb-3 flex justify-start">
              Ingrese su correo electrónico
            </span>
            <input
              type="text"
              placeholder="user123@thinderpet.com"
              className="bg-[#D9D9D9] px-4 py-2 rounded-lg mb-4"
            />
            <div className="flex flex-row justify-between">
              <NavLink to={"/reset"} className="text-[#979797] text-sm mr-5">
                elegir otro método
              </NavLink>
              <NavLink to={"/reset"} className="text-[#141414] text-sm">
                ¿Necesita Ayuda?
              </NavLink>
            </div>
          </div>
          <div className="mt-14">
            <button
              onClick={handleClick}
              value="Login"
              className="bg-[#99A3B0] text-[#6C6B6B] px-14 py-2 rounded-xl"
            >
              Enviar mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
