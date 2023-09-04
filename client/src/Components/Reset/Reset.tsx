import { NavLink } from "react-router-dom";
import InputWithLabel from "../Create/InputWithLabel";
import { useState } from "react";

const Reset = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <main className="flex justify-center items-center flex-col p-8 w-[500px] border-2 border-black relative rounded-md max-md:w-[100%] max-md:p-[1rem] bg-[#fff]">
      <img src={"dogConfuse.png"} className="w-44 h-40 "></img>
      <h1 className="text-2xl my-5 font-bold font-sans">
        ¿Olvidaste tu contraseña?
      </h1>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleResetPassword}
      >
        <div className="flex flex-col w-[100%]">
          <InputWithLabel
            label="Correo electrónico"
            type="email"
            placeholder="user123@thinderpet.com"
            autoComplete="Off"
            name="emailUser"
            onChange={setEmail}
            iconClass="fa-envelope"
            setPermitSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
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
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
            type="submit"
          >
            Enviar Mail
          </button>
        </div>
      </form>
      <NavLink to={"/login"}>
        <button className="bg-red-400 text-white px-4 py-2 rounded-xl my-2">
          <i
            className="fa-solid fa-arrow-left mr-2"
            style={{ color: "#fff" }}
          ></i>
          Atras
        </button>
      </NavLink>
    </main>
  );
};

export default Reset;
