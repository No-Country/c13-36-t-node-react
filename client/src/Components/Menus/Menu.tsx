import { useNavigate } from "react-router-dom";

interface MenuProps {
  setusuario: (usuario: boolean) => void;
  toggle: () => void;
}

const Menu: React.FC<MenuProps> = ({ setusuario, toggle }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setusuario(false);
    toggle();
    navigate("/");
  };

  const labels = ["Perfil de usuario", "Mis mascotas", "Preferencias", "Salir"];
  return (
    <div>
      <ul className="list-none flex flex-col items-center gap-2 w-full p-2 rounded-md mb-2 transition-all duration-1000 z-50">
        {labels.map((label, index) =>
          label === "Salir" ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full transition-all duration-300 px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={handleLogout}
            >
              {label}
            </li>
          ) : label === "Mis mascotas" ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={() => navigate("/mascotas")}
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
