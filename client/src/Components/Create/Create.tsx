import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import InputWithLabel from './InputWithLabel'

export default function Create() {
  const [view, setView] = useState(false)
  const [dataUser, setDataUser] = useState({})

  const viewPassword = () =>{
      setView(!view)
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement | Event>) => {
    evt.preventDefault();
  
    // Verifica si el evento es de tipo HTMLFormElement
    if (evt.target instanceof HTMLFormElement) {
      const fields = Object.fromEntries(new FormData(evt.target));
      setDataUser(fields)
      
      console.log(dataUser)
    }
  };
  return (
    <main className="flex justify-start flex-col items-center w-[500px] border-2 bg-[#fff] border-black relative rounded-md max-md:w-[100%] max-md:mt-10 max-md:p-4">
      <img src={"avatar.png"} className="absolute w-24 top-[-50px] border-2 rounded-full"></img>
      <h1 className="text-2xl mt-12 font-bold">Registrarme</h1>
      <form className="flex flex-col items-start gap-3 w-full py-4" onSubmit={handleSubmit}>
        <InputWithLabel
          label='Usuario' 
          type='text' 
          placeholder='JohnDoe' 
          name='nameUser' 
          iconClass='fa-user'
          />
        <InputWithLabel
          label="Correo electrónico"
          type="email"
          placeholder="user123@thinderpet.com"
          name="emailUser"
          iconClass="fa-envelope"
        />
        <InputWithLabel
          label="Repetir Correo electrónico"
          type="text"
          placeholder="user123@thinderpet.com"
          name="emailUserRepeat"
          iconClass="fa-envelope"
        />
        <InputWithLabel
          label="Contraseña"
          type={view ? "text" : "password"}
          placeholder="•••••••••"
          name="password"
          iconClass={view ? "fa-eye" : "fa-lock"}
          viewPassword={viewPassword}
        />
        <InputWithLabel
          label="Telefono"
          type="number"
          placeholder="1161914321"
          name="phoneUser"
          iconClass="fa-phone"
        />
        <InputWithLabel
          label="Donde Vives"
          type="text"
          placeholder="Argentina"
          name="countryUser"
          iconClass="fa-location-dot"
        />
          <button
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 m-auto rounded-xl"
          >
            Registrarme
          </button>
      </form>
      <NavLink to={"/login"}>
        <button className="bg-red-400 text-white px-4 py-2 mb-4 rounded-xl">
          <i
            className="fa-solid fa-arrow-left mr-2"
            style={{ color: "#fff" }}
          ></i>
          Atras
        </button>
      </NavLink>
    </main>
  );
}