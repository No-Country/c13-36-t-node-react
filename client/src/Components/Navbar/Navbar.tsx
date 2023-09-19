import { NavLink } from "react-router-dom";
import useModal from "../../Hooks/useModals";
import Avatar from "../Avatar/Avatar";
import Menu from "../Menus/Menu";
import { Usuario } from "../../types/types";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
  usuario: Usuario | undefined;
}
const Navbar: React.FC<NavBarProps> = ({ setusuario, usuario }) => {
  const { isShowing, toggle } = useModal();
  const [viewMenu, setViewMenu] = useState(false);
  const { t, i18n } = useTranslation("navbar");

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const handleClick = () => {
    toggle();
  };
  const hadleClickMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <nav className="relative w-full flex bg-[#E0838E] place-content-between items-center py-2 px-4 top-0 z-10">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="small" src="/logo.png" />
        <h1 className="text-xl sm:text-2xl text-white font-bold ml-2">
          ThinderPet
        </h1>
      </NavLink>
      {usuario !== undefined ? (
        <>
          <ul className="hidden lg:flex gap-10">
            <li className="text-2xl sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80">
              <NavLink to="/#nosotros">{t("about")}</NavLink>
            </li>
            <li className="text-2xl sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80">
              <NavLink to="/#politicas">{t("policies")}</NavLink>
            </li>{" "}
            <li className="text-2xl sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80">
              <NavLink to="/#ayuda">{t("help")}</NavLink>
            </li>
            <NavLink to={"/main"}>
              <li className="text-2xl sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80">
                {t("pets")}
              </li>
            </NavLink>
            <select
              className="border-white border-2 text-white bg-[#E0838E] text-xl py-1 px-4  focus:outline-none focus:border-white"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              <option value="es">{t("spanish")}</option>
              <option value="en">{t("english")}</option>
            </select>
          </ul>
          <Avatar
            size="medium"
            src={`https://api.multiavatar.com/${usuario.user.id}.png`}
            onClick={handleClick}
          />
        </>
      ) : (
        <>
          <ul
            className={`sm:flex sm:gap-10 sm:justify-center sm:items-center  ${
              viewMenu
                ? "absolute flex-col border-2 border-white top-[6.5rem] right-1 w-auto px-2 py-3 rounded-xl bg-[#E0838E] leading-10"
                : "hidden"
            } `}
          >
            <li className="text-base sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80 ">
              <NavLink to="/#nosotros">{t("about")}</NavLink>
            </li>
            <li className="text-base sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80">
              <NavLink to="/#politicas">{t("policies")}</NavLink>
            </li>
            <li className=" text-base sm:text-2xl text-white cursor-pointer mb-1 hover:opacity-80">
              <NavLink to="/#ayuda">{t("help")}</NavLink>
            </li>
            <select
              className="border-white border-2 bg-[#E0838E]  text-white text-base sm:text-2xl sm:border-2 focus:outline-none focus:border-white px-2 mb-1"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              <option value="es">{t("spanish")}</option>
              <option value="en">{t("english")}</option>
            </select>
            <div>
              <NavLink to={"/login"} className="">
                <button className="bg-white font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:scale-105 hover:ease-in duration-300 text-base sm:text-xl hover:opacity-80">
                  {t("login")}
                </button>
              </NavLink>
            </div>
          </ul>
          <button onClick={hadleClickMenu} className="block sm:hidden">
            {viewMenu ? (
              <AiOutlineCloseCircle className="w-10 h-10 cursor-pointer text-white" />
            ) : (
              <AiOutlineMenu className="w-10 h-10 cursor-pointer text-white" />
            )}
          </button>
        </>
      )}
      <div className="absolute right-0 top-20">
        {isShowing && <Menu setusuario={setusuario} toggle={toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;
