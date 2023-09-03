import { NavLink } from "react-router-dom";
import useModal from "../../Hooks/useModals";
import Avatar from "../Avatar/Avatar";
import Menu from "../Menus/Menu";
import { Usuario } from "../../types/types";

interface NavBarProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
  usuario: Usuario | undefined;
}
const Navbar: React.FC<NavBarProps> = ({ setusuario, usuario }) => {
  const { isShowing, toggle } = useModal();

  const handleClick = () => {
    toggle();
  };

  return (
    <nav className="relative w-full flex bg-[#E0838E]  place-content-between items-center mb-2 py-2 px-4">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="medium" src="logo.png" />
        <h1 className="text-2xl text-white">ThinderPet</h1>
      </NavLink>
      {usuario !== undefined ? (
        <>
          <ul className="max-md:hidden flex gap-10">
            <li className="text-2xl text-white cursor-pointer">
              <a href="#nosotros">Nosotros</a>
            </li>
            <li className="text-2xl text-white cursor-pointer">Ayuda</li>
            <select className="bg-[#F65E7E] text-white text-2xl">
              <option>Español</option>
              <option>English</option>
            </select>
          </ul>
          <Avatar size="medium" src="Vector.png" onClick={handleClick} />
        </>
      ) : (
        <NavLink
          to={"/login"}
          className="flex items-center max-md:my-4 max-md:block"
        >
          <button className="bg-[#F65E7E] font-bold p-2 rounded-lg hover:scale-105 hover:ease-in duration-300">
            Iniciar Sesión
          </button>
        </NavLink>
      )}
      <div className="absolute right-0 top-20">
        {isShowing && <Menu setusuario={setusuario} toggle={toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;
