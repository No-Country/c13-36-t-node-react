import { useNavigate } from "react-router-dom";
import { Usuario } from "../../types/types";
import { useTranslation } from "react-i18next";

interface MenuProps {
  setusuario: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
  toggle: () => void;
}

const Menu: React.FC<MenuProps> = ({ setusuario, toggle }) => {
  const { t } = useTranslation("menu");
  const navigate = useNavigate();
  const handleLogout = () => {
    setusuario(undefined);
    toggle();
    localStorage.removeItem("token");
    navigate("/");
  };

  const labels = [t("userProfile"), t("myPets"), t("contact"), t("logout")];
  return (
    <div>
      <ul className="list-none flex flex-col items-center gap-2 mt-2 w-full p-2 rounded-md mb-2 transition-all duration-1000 z-50">
        {labels.map((label, index) =>
          label === t("logout") ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full transition-all duration-300 px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={handleLogout}
            >
              {label}
            </li>
          ) : label === t("userProfile") ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={() => {
                navigate("/userprofile");
                toggle();
              }}
            >
              {label}
            </li>
          ) : label === t("myPets") ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={() => {
                navigate("/mascotas");
                toggle();
              }}
            >
              {label}
            </li>
          ) : label === t("contact") ? (
            <li
              key={index}
              className="bg-neutral-200 min-w-[150px] shadow-md shadow-neutral-500 rounded-full px-4 py-2 hover:bg-neutral-100 cursor-pointer hover:border-black hover:border"
              onClick={() => {
                navigate("/contact");
                toggle();
              }}
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
