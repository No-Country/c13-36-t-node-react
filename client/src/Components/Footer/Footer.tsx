import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const opciones = ["Nosotros", "Politicas", "Contacto", "Ayuda"];

  return (
    <footer className="bg-[#99A3B0] w-full p-10 flex flex-row justify-around align-baseline ">
      <img
        src={"logoFooter.png"}
        alt="footer-logo-landing-page"
        className="w-20"
      />
      <ul className="flex gap-x-8 my-4 text-[#fff] font-bold decoration-gray-100 max-sm:flex-col max-sm:leading-10">
        {opciones.map((opcion) => {
          return <li className="cursor-pointer">{opcion}</li>;
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
