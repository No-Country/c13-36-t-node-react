interface MenuProps {
  setusuario: (usuario: boolean) => void;
  toggle: () => void;
}

const Menu: React.FC<MenuProps> = ({ setusuario, toggle }) => {
  const handleLogout = () => {
    setusuario(false);
    toggle();
  };
  const labels = ["Perfil de usuario", "Mis mascotas", "Preferencias", "Salir"];
  return (
    <div>
      <ul className="list-none flex flex-col items-center gap-2 w-full p-2 rounded-md mb-2 transition-all duration-1000 ">
        {labels.map((label, index) =>
          label === "Salir" ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={handleLogout}
            >
              {label}
            </li>
          ) : (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
            >
              {label}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Menu;
