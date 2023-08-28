import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Create() {
    const [view, setView] = useState(false)

    const viewPassword = () =>{
        setView(!view)
      }
  return (
    <main className="flex justify-start items-start flex-col items-center w-[500px] border-2 border-black relative rounded-md max-md:w-[100%] bg-[#fff]">
      <img src={"avatar.png"} className="absolute w-24 top-[-50px] border-2 rounded-full"></img>
      <h1 className="text-2xl mt-12 font-bold">Registrarme</h1>
      <form className="flex flex-col items-start gap-3 w-[350px]">
        <label className="font-semibold ml-1 mt-2" htmlFor="emailUser">Usuario</label>
        <div className="relative w-[100%]">
          <input
            type="text"
            placeholder="JonhDoe"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="emailUser"
          />
          <i className="fa-solid fa-user absolute right-3 top-[12px]" style={{color:"#333"}}></i>
        </div>
        <label className="font-semibold ml-1 mt-2" htmlFor="emailUser">Correo electrónico</label>
        <div className="relative w-[100%]">
          <input
            type="email"
            placeholder="user123@thinderpet.com"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="emailUser"
          />
          <i className="fa-solid fa-envelope absolute right-3 top-[12px]" style={{color:"#333"}}></i>
        </div>
        <label className="font-semibold ml-1 mt-2" htmlFor="emailUser">Repetir Correo electrónico</label>
        <div className="relative w-[100%]">
          <input
            type="text"
            placeholder="user123@thinderpet.com"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="emailUser"
          />
          <i className="fa-solid fa-envelope absolute right-3 top-[12px]" style={{color:"#333"}}></i>
        </div>
        <label className="font-semibold ml-1 mt-2" htmlFor="password">Contraseña</label>
        <div className="relative w-[100%]">
          <input
            type={view ? "text": "password"}
            placeholder="•••••••••"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="password"
          />
          <i className={view ? "fa-solid fa-eye absolute right-3 top-[10px] hover:cursor-pointer" : "fa-solid fa-lock absolute right-3 top-[10px] hover:cursor-pointer"} style={{color: "#333"}} onClick={viewPassword}></i>
        </div>
        <label className="font-semibold ml-1 mt-2" htmlFor="phoneUser">Telefono</label>
        <div className="relative w-[100%]">
          <input
            type="number"
            placeholder="1161914321"
            className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%]"
            name="phoneUser"
          />
          <i className="fa-solid fa-phone absolute right-3 top-[12px]" style={{color:"#333"}}></i>
        </div>
        <div className="flex flex-col m-auto gap-4">
          <button
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
          >
            Registrarme
          </button>
          <NavLink to={"/login"}>
            <button
            className="bg-red-400 text-white px-4 py-2 mb-4 rounded-xl"
            >
              <i className="fa-solid fa-arrow-left mr-2" style={{color: "#fff"}}></i>Atras
            </button>
          </NavLink>
        </div>

      </form>
    </main>  )
}
