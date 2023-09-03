import { NavLink } from "react-router-dom";
import useModal from "../../Hooks/useModals";
import Avatar from "../Avatar/Avatar";
import Menu from "../Menus/Menu";
import { Usuario } from "../../types/types";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

interface NavBarProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
  usuario: Usuario | undefined;
}
const Navbar: React.FC<NavBarProps> = ({ setusuario, usuario }) => {
  const { isShowing, toggle } = useModal();
  const [viewMenu, setViewMenu] = useState(false)

  const handleClick = () => {
    toggle();
  };
  const hadleClickMenu = () =>{
    setViewMenu(!viewMenu)
  }
  return (
    <nav className="relative  w-full flex bg-[#B186F1] place-content-between items-center mb-2 py-2 px-4 sticky top-0 z-10">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="medium" src="logo.png" />
        <h1 className="text-2xl text-white font-bold">ThinderPet</h1>
      </NavLink>
      <ul className={`flex gap-10 max-md:absolute max-md:flex-col max-md:bg-[#B186F1] max-md:top-[6rem] max-md:right-0 max-md:w-60 max-md:h-fit max-md:p-8 max-md:items-center ${viewMenu ? "block":"hidden"}`}>
        <li className="text-2xl text-white cursor-pointer"><a href="#nosotros">Nosotros</a></li>
        <li className="text-2xl text-white cursor-pointer">Ayuda</li>
        <select className="bg-[#B186F1] text-white text-2xl max-md:border-2 max-md:border-black">
          <option>Español</option>
          <option>English</option>
        </select>
        <NavLink to={"/login"} className="flex items-center">
        <button className="bg-[#F65E7E] font-bold p-2 rounded-lg hover:scale-105 hover:ease-in duration-300">Iniciar Sesión</button>
      </NavLink>
      </ul>
      <NavLink to={"/login"} className="flex items-center">
        <button className="bg-[#F65E7E] font-bold p-2 rounded-lg hover:scale-105 hover:ease-in duration-300 max-md:hidden">Iniciar Sesión</button>
      </NavLink>
      <button onClick={hadleClickMenu} className="hidden max-md:block">
        {viewMenu
        ? <AiOutlineCloseCircle className="w-10 h-10 cursor-pointer "/>
        : <AiOutlineMenu className="w-10 h-10 cursor-pointer "/>
        }
      </button>
      {usuario !== undefined && (
        <>
          <ul className="max-md:hidden flex gap-10">
            <li className="text-2xl text-white">Nosotros</li>
            <li className="text-2xl text-white">Ayuda</li>
            <select className="bg-white text-black">
              <option>Español</option>
              <option>English</option>
            </select>
          </ul>
          <Avatar size="medium" src="Vector.png" onClick={handleClick} />
        </>
      )}
      <div className="absolute right-0 top-20">
        {isShowing && <Menu setusuario={setusuario} toggle={toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;
