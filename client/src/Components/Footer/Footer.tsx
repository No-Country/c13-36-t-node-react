import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const opciones = ["Nosotros", "Politicas", "Contacto", "Ayuda"]

  return (
    <footer className="bg-[#CB6CE6] w-full p-10  flex flex-col justify-center items-center">
    <img src={"logoFooter.png"} alt="footer-logo-landing-page" className="w-20"/>
    <ul className="flex gap-x-8 my-4 text-[#fff] font-bold decoration-gray-100 max-md:flex-col max-md:leading-10">
      {opciones.map((opcion)=>{
        return(
          <li className="cursor-pointer max-md:w">{opcion}</li>
        )
      })
      }
    </ul>
    <div className=" text-[#fff] flex justify-center gap-4 text-2xl">
      <FaFacebook className="cursor-pointer"/>
      <FaInstagram className="cursor-pointer"/>
      <FaTwitter className="cursor-pointer"/>
    </div>
    <NavLink to={"/login"} className="flex items-center my-4">
      <button className="bg-[#F65E7E] font-bold p-2 rounded-lg hover:scale-105 hover:ease-in duration-300">Iniciar Sesión</button>
    </NavLink>
</footer>
  )
}
