import { NavLink } from "react-router-dom";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import Avatar from "../Avatar/Avatar";
import { AiOutlinePlusCircle } from "react-icons/ai";

const UserProfile = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-40">
        <div className="flex flex-col">
          <h1 className="mb-14 mt-10 font-bold text-2xl">Mi perfil</h1>
          <form action="">
            <div className="flex flex-col text-start">
              <span className="font-semibold mt-6">Nombre de usuario:</span>
              <h3 className="font-semibold text-slate-500 mt-2">Juan Pérez</h3>
              <span className="font-semibold mt-6">Correo electrónico:</span>
              <h3 className="font-semibold mt-2 text-slate-500">
                juanperez@gmail.com
              </h3>
              <span className="font-semibold mt-6">Contraseña: </span>
              <h3 className="font-semibold mt-2 text-slate-500">•••••••••</h3>
              <span className="font-semibold mt-6">Teléfono: </span>
              <input
                type="text"
                placeholder="1245-4572-358"
                className="font-semibold mt-2"
              />
            </div>
            <div className="flex">
              <button className="flex flex-row text-xl bg-[#54A4A5] px-4 py-2 rounded-xl text-white mt-8">
                <FiSave className="mt-1 mr-1" />
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1 className="mb-14 mt-10 font-bold text-2xl">Mis mascotas</h1>
          <div className="flex flex-col gap-6 mt-24">
            <div className="grid grid-cols-3 gap-4">
              <Avatar size={"medium"} />
              <h3 className="mt-9 font-semibold">Shaby</h3>
              <div className="flex">
                <NavLink
                  to={"/mascotas"}
                  className="mt-7 text-black bg-[#D9D9D9] py-3 px-4 rounded-xl"
                >
                  Ver perfil
                </NavLink>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Avatar size={"medium"} />
              <h3 className="mt-9 font-semibold">Vicky</h3>
              <div className="flex">
                <NavLink
                  to={"/mascotas"}
                  className="mt-7 text-black bg-[#D9D9D9] py-3 px-4 rounded-xl"
                >
                  Ver perfil
                </NavLink>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Avatar size={"medium"} />
              <h3 className="mt-9 font-semibold">Toby</h3>
              <div className="flex">
                <NavLink
                  to={"/mascotas"}
                  className="mt-7 text-black bg-[#D9D9D9] py-3 px-4 rounded-xl"
                >
                  Ver perfil
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex">
            <NavLink
              to={"/main"}
              className="flex flex-row bg-[#54A4A5] text-center px-4 py-2 rounded-xl text-white mt-12"
            >
              <AiOutlinePlusCircle size={24} className=" mr-1" />
              Agregar mascota
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex">
        <NavLink
          to={"/main"}
          className="flex flex-row text-xl bg-red-400 px-4 py-2 rounded-xl text-white mt-12"
        >
          <FiArrowLeft className="mt-1" />
          Atrás
        </NavLink>
      </div>
    </div>
  );
};

export default UserProfile;
