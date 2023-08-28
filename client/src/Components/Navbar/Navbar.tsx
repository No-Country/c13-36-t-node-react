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
    <nav className="relative w-full flex place-content-between items-center mb-2">
      <NavLink to={"/"}>
        <Avatar size="medium" src="Logo.svg" />
      </NavLink>
      {usuario && (
        <>
          <div>
            Tus mascotas
            <div className="flex gap-10">
              <Avatar size="small" hover />
              <Avatar size="small" hover />
              <Avatar size="small" hover />
            </div>
          </div>
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
