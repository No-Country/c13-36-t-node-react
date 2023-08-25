import Avatar from "../Avatar/Avatar";
import AvatarUser from "../Avatar/AvatarUser";

interface NavBarProps {
  setFormulario: (usuario: boolean) => void;
}
const Navbar: React.FC<NavBarProps> = ({ setFormulario }) => {
  return (
    <nav className="border-2 w-full flex place-content-between items-center	 mb-2">
      <Avatar size="medium" src="avatar.png" />
      <AvatarUser setFormulario={setFormulario} />
    </nav>
  );
};

export default Navbar;
