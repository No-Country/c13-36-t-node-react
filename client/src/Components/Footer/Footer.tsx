import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const { t } = useTranslation("footer");
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.slice(1); // Elimina el signo "#" de la ubicación
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  const opciones = [
    { text: t("aboutUs"), link: "/#nosotros" },
    { text: t("policies"), link: "/#politicas" },
    { text: t("contact"), link: "/contact" }, //cambiar por un componente de contacto
    { text: t("help"), link: "/#ayuda" },
  ];

  return (
    <footer className="bg-[#A8DCC1] font-sans w-full z-10 p-10 flex flex-row justify-around items-center  mobile:w-full mobile:flex-col  mobile:justify-center mobile:items-center mobile:text-center mobile:leading-8 mobile:align-middle">
      <NavLink to={"/"}>
        <img
          src={"logoFooter.png"}
          alt="footer-logo-landing-page "
          className="w-20 hover:opacity-80 hover:scale-110 transition-all"
        />
      </NavLink>
      <ul className="flex gap-x-8 my-4 text-[#333] font-bold decoration-gray-100 mobile:flex mobile:flex-col">
        {opciones.map((opcion, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer hover:opacity-80 text-xl mobile:my-2"
            >
              <a href={opcion.link}>{opcion.text}</a>
            </li>
          );
        })}
      </ul>
      <div className=" text-[#333] flex my-4 justify-center gap-4 text-2xl">
        <FaFacebook className="cursor-pointer hover:opacity-80 hover:scale-105 transition-all" />
        <FaInstagram className="cursor-pointer hover:opacity-80 hover:scale-105 transition-all" />
        <FaTwitter className="cursor-pointer hover:opacity-80 hover:scale-105 transition-all" />
      </div>
    </footer>
  );
}
