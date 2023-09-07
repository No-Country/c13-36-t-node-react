import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

const UserProfile = () => {
  return (
    <div className="mt-20 font-sans">
      <div className="grid grid-cols-2 gap-60">
        <div className="flex flex-col bg-[#99a3b0c2] w-96 p-8 rounded-lg text-left">
          <div className="mb-3">
            <h1 className="mb-6 mt-2 font-bold text-3xl">Mi perfil</h1>
            <img src={"Vector.png"}></img>
            <p className="mt-2 mb-4 text-slate-800">Editar foto</p>
          </div>
          <form action="">
            <div className="flex flex-col text-start">
              <span className="font-semibold mt-6">Nombre de usuario:</span>
              <h3 className="font-semibold text-slate-500 mt-2">Juan Pérez</h3>
              <span className="font-semibold mt-6">Correo electrónico:</span>
              <h3 className="font-semibold mt-2 text-slate-500">
                juanperez@gmail.com
              </h3>
              <span className="font-semibold mt-6">Teléfono: </span>
              <input
                type="text"
                placeholder="1245-4572-358"
                className="font-semibold mt-2 px-2 rounded-lg py-2 mb-16"
              />
            </div>
          </form>
        </div>
        <div className="w-80">
          <h1 className="mb-14 mt-10 font-bold text-3xl">Mis mascotas</h1>
          <p className="font-bold text-sm">
            Para poder continuar ingrese el perfil de su mascota
          </p>
          <div className="flex justify-center">
            <NavLink to={"/mascotas"}>
              <button className="bg-[#E0838E] font-medium p-2 rounded-lg flex flex-row text-white hover:scale-105 hover:ease-in duration-300 mt-14">
                <AiOutlinePlusCircle size={24} className=" mr-1" />
                Agregar nueva mascota
              </button>
            </NavLink>
          </div>
          <div className="flex flex-row justify-between mt-48">
            <NavLink
              to={"/main"}
              className="border-2 border-[#209FD6] text-center p-2 rounded-xl text-black "
            >
              Eliminar Cuenta
            </NavLink>
            <button className=" bg-[#77D3EC] rounded-xl p-2 text-black">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
