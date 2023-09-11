import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { User } from "../../services/users";
import { FaSave, FaTrash } from "react-icons/fa";
import Modals from "./Modals";
import { useState } from "react";
import axios from "axios";

interface UserProfileProps {
  usuario: User;
}

interface UserData {
  message: string;
  token: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    localization: string;
    phone: number;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ usuario}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = localStorage.getItem("token")
  const navigate = useNavigate();

  const deleteUser = async () => {
    const parsedData: UserData = data ? JSON.parse(data) : null;
    if (parsedData) {
      try {
        const response = await axios.delete(
          `https://thinderpet-api-ild3-dev.fl0.io/api/v1/user/delete/${parsedData.user.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${parsedData.token}`,
            },
          }
        );
  
        navigate("/");
        localStorage.removeItem("token");
        console.log("La cuenta fue eliminada ", response);
      } catch (error) {
        console.log("Error en la eliminación:", error);
      }
    } else {
      alert("No se encontró un token en el almacenamiento local.");
    }
  };
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className=" py-8 font-sans flex justify-around mobile:flex-col mobile:px-4">
      <div className="flex flex-col bg-[#99a3b0c2] w-96 p-8 rounded-lg text-left mobile:w-full">
        <h1 className="mb-2 font-bold text-2xl">Perfil de {usuario.firstName}</h1>
        <img src={"Vector.png"} className="w-16"></img>
        <p className="my-2 text-slate-800">Editar foto</p>
        <form action="" className="flex flex-col text-start">
          <span className="font-semibold">Nombre de usuario:</span>
          <h3 className="font-semibold text-slate-500 mt-2">
            {usuario.username}
          </h3>
          <span className="font-semibold mt-4">Nombre y apellido:</span>
          <h3 className="font-semibold text-slate-500 mt-2">
            {usuario.firstName} {usuario.lastName}
          </h3>
          <span className="font-semibold mt-4">Correo electrónico:</span>
          <h3 className="font-semibold mt-2 text-slate-500">
            {usuario.email}
          </h3>
          <span className="font-semibold mt-4">Teléfono: </span>
          <input
            type="text"
            placeholder="1245-4572-358"
            className="font-semibold mt-2 px-2 rounded-lg py-2"
            value={usuario.phone}
          />
        </form>
      </div>
      <div className="w-96 mobile:w-full">
        <h1 className="my-10 font-bold text-3xl">Mis mascotas</h1>
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
        <div className="flex flex-row justify-between mt-48  mobile:mt-16">
          <button className="flex items-center gap-x-2 border-2 border-[#209FD6] text-center p-2 rounded-xl text-black hover:scale-105 transition-all" onClick={openModal}>
            <FaTrash/> Eliminar Cuenta
          </button>
          <Modals isOpen={isModalOpen} closeModal={closeModal} handleDelete={deleteUser}/>
          <button className="flex items-center gap-x-2 bg-[#77D3EC] rounded-xl p-2 text-black transition-all hover:scale-105">
            <FaSave/>
            Guardar Cambios 
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
