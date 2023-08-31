import { NavLink } from "react-router-dom";
import useModal from "../../Hooks/useModals";
import Avatar from "../Avatar/Avatar";
import Menu from "../Menus/Menu";

interface NavBarProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: (usuario: boolean) => void;
  usuario: boolean;
}
const Navbar: React.FC<NavBarProps> = ({ setusuario, usuario }) => {
  const { isShowing, toggle } = useModal();

  const handleClick = () => {
    toggle();
  };

  return (
    <nav className="relative w-full flex bg-[#B186F1]  place-content-between items-center mb-2 py-2 px-4">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="medium" src="logo.png" />
        <h1 className="text-2xl text-white">ThinderPet</h1>
      </NavLink>
      {usuario && (
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
