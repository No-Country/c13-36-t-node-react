import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Avatar from "../Avatar/Avatar";

const Landing = () => {
  const opciones = ["Nosotros", "Politicas", "Contacto", "Ayuda"]

  return (
    <>
      <nav className="relative w-full flex bg-[#B186F1]  place-content-between items-center mb-2 py-2 px-4 ">
      <NavLink to={"/"} className="flex items-center">
        <Avatar size="medium" src="logo.png" />
        <h1 className="text-2xl text-white">ThinderPet</h1>
      </NavLink>
        <ul className="max-md:hidden flex gap-10">
          <li className="text-2xl text-white cursor-pointer"><a href="#nosotros">Nosotros</a></li>
          <li className="text-2xl text-white cursor-pointer">Ayuda</li>
          <select className="bg-[#B186F1] text-white text-2xl">
            <option>Español</option>
            <option>English</option>
          </select>
        </ul>
        <NavLink to={"/login"} className="flex items-center">
          <button className="bg-[#F65E7E] font-bold p-2 rounded-lg hover:scale-105 hover:ease-in duration-300">Iniciar Sesión</button>
        </NavLink>
    </nav>
      <main className="flex items-center mt-16 gap-x-44  max-md:gap-x-4 ">
        <div className="border-2 h-full">
          <img src={"dogLanding.png"} className="w-60"/>
          <p className="bg-[#F65E7E] text-2xl font-bold">Lola</p>
        </div>
        <div>
          <AiFillHeart size={150} color="red" className="m-auto heartbeat max-md:w-20" />
          <h1 className="text-4xl w-56 font-mono font-bold max-md:text-2xl">Te ayudamos a buscar una pareja para tus mascotas</h1>
        </div>
        <div className="border-2 h-full">
          <img src={"dogLanding2.png"} className="w-60"/>
          <p className="bg-[#F65E7E] text-2xl font-bold">Lorenzo</p>
        </div>
      </main>
      <section className="px-36 my-20 w-full flex justify-center items-center max-md:flex-col max-md:px-10">
        <div className="flex flex-col w-50 max-md:w-[100%]">
          <h1 className="font-sans font-bold text-3xl my-2 max" id="nosotros">Nosotros</h1>
          <p className="leading-8 text-justify max-md:text-md ">"Somos un equipo de desarrolladores y diseñadores que hemos creado esta aplicación con el propósito de ayudar a las personas que desean criar a su mascota a elegir a sus progenitores o a uno de ellos de manera informada. Nuestra plataforma no solo facilita la selección de padres adecuados, sino que también proporciona información sobre las posibles enfermedades o rasgos de carácter que la futura mascota podría heredar. Estamos comprometidos a hacer que la experiencia de criar una mascota sea más transparente y satisfactoria para todos nuestros usuarios."</p>
        </div>
        <img src={"equipoTrabajo.png"} className="w-80"></img>
      </section>
      <section className="px-36 my-5 w-full flex justify-center items-center  max-md:flex-col-reverse max-md:px-10">
        <img src="politicaTrabajo.png" className="w-80"></img>
        <div className="">
          <h1 className="font-sans font-bold text-3xl my-2">Politicas</h1>
          <p className="leading-8 text-justify max-md:text-md">""Queremos aclarar que, como parte de nuestro contrato, no respaldamos ni promovemos la reproducción con fines comerciales. En caso de que tenga conocimiento de cualquier caso que vaya en contra de esta política, le instamos a que nos informe de inmediato a través del siguiente correo electrónico: <b>proteccion.animal@gmail.com.</b> Su ayuda es fundamental para mantener nuestros principios y valores en la protección de los animales</p>
        </div>
      </section>
      <footer className="bg-[#CB6CE6] w-full p-10  flex flex-col justify-center items-center">
          <img src={"logoFooter.png"} alt="footer-logo-landing-page" className="w-20"/>
          <ul className="flex gap-x-8 my-4 text-[#fff] font-bold decoration-gray-100">
            {opciones.map((opcion)=>{
              return(
                <li className="cursor-pointer">{opcion}</li>
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
    </>

  );
};

export default Landing;
