import { NavLink } from "react-router-dom";
import useModal from "../../Hooks/useModals";
import Avatar from "../Avatar/Avatar";
import Menu from "../Menus/Menu";
import { Usuario } from "../../types/types";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

interface NavBarProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
  usuario: Usuario | undefined;
}
const Navbar: React.FC<NavBarProps> = ({ setusuario, usuario }) => {
  const { isShowing, toggle } = useModal();
  const [viewMenu, setViewMenu] = useState(false);

  const handleClick = () => {
    toggle();
  };
  const hadleClickMenu = () => {
    setViewMenu(!viewMenu);
  };
  return (
    <nav className="relative  w-full flex bg-[#E0838E] place-content-between items-center py-2 px-4 top-0 z-10">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="medium" src="logo.png" />
        <h1 className="text-2xl text-white font-bold">ThinderPet</h1>
      </NavLink>

      {usuario !== undefined ? (
        <>
          <ul className="max-md:hidden flex gap-10">
            <li className="text-2xl text-white cursor-pointer ">
              <a href="/#nosotros">Nosotros</a>
            </li>
            <li className="text-2xl text-white cursor-pointer ">Ayuda</li>
            <NavLink to={"/main"}>
              <li className="text-2xl text-white cursor-pointer ">
                Ver Mascotas
              </li>
            </NavLink>
            <select className="border-white border-2 text-black">
              <option>Español</option>
              <option>English</option>
            </select>
          </ul>
          <Avatar size="medium" src="Vector.png" onClick={handleClick} />
        </>
      ) : (
        <>
          <ul
            className={`flex gap-10 justify-center items-center max-md:absolute max-md:flex-col max-md:border-2 max-md:border-white max-md:top-[6.5rem] max-md:right-0 max-md:w-60 max-md:p-8 max-md:rounded-xl max-md:${
              viewMenu ? "flex" : "hidden"
            }`}
          >
            <li className="text-2xl text-white cursor-pointer ">
              <a href="#nosotros">Nosotros</a>
            </li>{" "}
            {/* RECORDATORIO QUE NO ENVIE A LA PAGINA PRINCIPAL Y QUE SE SCROLLE CUANDO HAGA CLICK */}
            <li className="text-2xl text-white cursor-pointer ">Ayuda</li>
            <select className="border-white border-2 bg-[#E0838E]  text-white text-2xl max-md:border-2 max-md:border-black px-2">
              <option>Español</option>
              <option>English</option>
            </select>
            <NavLink to={"/login"} className="">
              <button className="bg-white font-bold px-4 py-2 rounded-lg hover:scale-105 hover:ease-in duration-300">
                Iniciar Sesión
              </button>
            </NavLink>
          </ul>
          <button onClick={hadleClickMenu} className="hidden max-md:block">
            {viewMenu ? (
              <AiOutlineCloseCircle className="w-10 h-10 cursor-pointer " />
            ) : (
              <AiOutlineMenu className="w-10 h-10 cursor-pointer " />
            )}
          </button>
        </>
      )}
      <div className="absolute right-0 top-20">
        {isShowing && <Menu setusuario={setusuario} toggle={toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;
