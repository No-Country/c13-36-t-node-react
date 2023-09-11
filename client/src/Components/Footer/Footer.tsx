import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");
  const opciones = [t("aboutUs"), t("policies"), t("contact"), t("help")];

  return (
    <footer className="bg-[#99A3B0] w-full z-10 mobile:w-full mobile:flex-col  mobile:justify-center mobile:items-center mobile:text-center mobile:leading-8 mobile:align-middle p-10 flex flex-row justify-around align-baseline ">
      <img
        src={"logoFooter.png"}
        alt="footer-logo-landing-page"
        className="w-20"
      />
      <ul className="flex gap-x-8 my-4 text-[#fff] font-bold decoration-gray-100 max-sm:flex-col max-sm:leading-10 mobile:flex mobile:flex-col">
        {opciones.map((opcion, index) => {
          return (
            <li key={index} className="cursor-pointer">
              {opcion}
            </li>
          );
        })}
      </ul>
      <div className=" text-[#fff] flex my-4 justify-center gap-4 text-2xl">
        <FaFacebook className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
      </div>
    </footer>
  );
}
