interface AvatarUserProps {
  setFormulario: (formulario: boolean) => void;
}
const AvatarUser: React.FC<AvatarUserProps> = ({ setFormulario }) => {
  const handleClick = () => {
    setFormulario(true);
  };
  return (
    <>
      <img
        className="w-14  hover:cursor-pointer"
        src="Vector.png"
        onClick={handleClick}
      ></img>
    </>
  );
};
export default AvatarUser;
