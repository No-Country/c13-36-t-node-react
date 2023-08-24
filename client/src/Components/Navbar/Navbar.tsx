import Avatar from "../Avatar/Avatar";
import AvatarUser from "../Avatar/AvatarUser";

interface NavBarProps {
  setUsuario: (usuario: boolean) => void;
}
const Navbar: React.FC<NavBarProps> = ({ setUsuario }) => {
  return (
    <nav className="border-2 w-full flex place-content-between items-center	 mb-2">
      <Avatar size="medium" src="avatar.png" />
      <AvatarUser setusuario={setUsuario} />
    </nav>
  );
};

export default Navbar;
