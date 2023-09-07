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
    <nav className="relative w-full flex bg-[#E0838E] place-content-between items-center py-2 px-4 top-0 z-10">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="medium" src="logo.png" />
        <h1 className="text-xl sm:text-2xl text-white font-bold">ThinderPet</h1>
      </NavLink>

      {usuario !== undefined ? (
        <>
          <ul className="hidden lg:flex gap-10">
            <li className="text-2xl text-white cursor-pointer ">
              <a href="/#nosotros">Nosotros</a>
            </li>
            <li className="text-2xl text-white cursor-pointer ">Ayuda</li>
            <NavLink to={"/main"}>
              <li className="text-2xl text-white cursor-pointer ">
                Ver Mascotas
              </li>
            </NavLink>
            <select className="border-white border-2 text-white bg-[#E0838E] text-xl py-1 px-4">
              <option>Español</option>
              <option>English</option>
            </select>
          </ul>
          <Avatar
            size="medium"
            src={`https://api.multiavatar.com/${usuario.user.id}.png`}
            onClick={handleClick}
          />
        </>
      ) : (
        <>
          <ul
            className={`sm:flex sm:gap-10 sm:justify-center sm:items-center  ${
              viewMenu
                ? "absolute flex-col border-2 border-white top-[6.5rem] right-1 w-auto px-2 py-3 rounded-xl"
                : "hidden"
            } `}
          >
            <li className="text-base sm:text-2xl text-white cursor-pointer mb-1">
              <a href="#nosotros">Nosotros</a>
            </li>{" "}
            {/* RECORDATORIO QUE NO ENVIE A LA PAGINA PRINCIPAL Y QUE SE SCROLLE CUANDO HAGA CLICK */}
            <li className=" text-base sm:text-2xl text-white cursor-pointer mb-1">
              Ayuda
            </li>
            <select className="border-white border-2 bg-[#E0838E]  text-white text-base sm:text-2xl sm:border-2 sm:border-white px-2 mb-1">
              <option>Español</option>
              <option>English</option>
            </select>
            <div>
              <NavLink to={"/login"} className="">
                <button className="bg-white font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:scale-105 hover:ease-in duration-300 text-base sm:text-xl">
                  Iniciar Sesión
                </button>
              </NavLink>
            </div>
          </ul>
          <button onClick={hadleClickMenu} className="block sm:hidden">
            {viewMenu ? (
              <AiOutlineCloseCircle className="w-10 h-10 cursor-pointer text-white" />
            ) : (
              <AiOutlineMenu className="w-10 h-10 cursor-pointer text-white" />
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
