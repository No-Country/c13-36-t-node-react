import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

const Landing = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <section className="flex flex-row gap-20 justify-center pt-48 bg-[#99A3B0] w-full min-h-screen">
        <div className="">
          <img src={"dogLanding.png"} className="w-80" />
          <p className="bg-[#77D3EC] text-2xl font-bold">Lola</p>
        </div>
        <div>
          <AiFillHeart
            size={150}
            color="red"
            className="m-auto heartbeat max-md:w-20"
          />
          <h1 className="text-5xl w-80 font-sans font-bold max-md:text-2xl">
            Te ayudamos a buscar una pareja para tus mascotas
          </h1>
        </div>
        <div className="">
          <img src={"dogLanding2.png"} className="w-80" />
          <p className="bg-[#77D3EC] text-2xl font-bold">Lorenzo</p>
        </div>
      </section>
      <section className="px-36 w-full flex justify-center items-center max-md:flex-col max-md:px-10 max-md:my-4">
        <div className="flex flex-col w-50 max-md:w-[100%]">
          <h1 className="font-sans font-bold text-4xl my-16" id="nosotros">
            Sobre Nosotros
          </h1>
          <p className="leading-8 text-justify font-sans max-md:text-md font-semibold px-8">
            En nuestro acogedor rincón en línea, celebramos la chispa única que
            surge entre las mascotas. Somos una plataforma diseñada
            exclusivamente para ayudar a las mascotas a encontrar compañeros de
            juegos y amor. Nuestra misión es crear momentos de alegría y
            conexiones genuinas entre peludos de todo tipo, desde juguetones
            cachorros hasta encantadores mininos y otros amigos de cuatro patas.
            <br />
            En <b className="text-[#E0838E]">ThinderPet</b>, creamos un espacio
            seguro donde los corazones peludos pueden latir al mismo ritmo.
            Facilitamos la selección de padres adecuados, y también instamos a
            los usuarios a proporcionar información sobre las posibles
            enfermedades o rasgos de carácter que la futura mascota podría
            heredar. Estamos comprometidos a hacer que la experiencia sea lo más
            transparente y satisfactoria para todos nuestros usuarios.
          </p>
          <p className="font-bold font-sans text-2xl px-24 py-10 text-[#E0838E]">
            Únete a nuestra comunidad y sé parte de una experiencia donde el
            amor, diversión y respeto entre mascotas son el centro de atención.
          </p>
        </div>
        <img src={"equipoTrabajo.png"} className="w-80"></img>
      </section>
      {visible && (
        <a href="#">
          <FaArrowUp className="border border-black rounded-full p-1 w-8 h-8 cursor-pointer fixed bottom-20 right-20  max-md:bottom-10 max-md:right-4" />
        </a>
      )}
      <section className="px-36 my-5 w-full flex justify-center items-center  max-md:flex-col-reverse max-md:px-10">
        <img src="politicaTrabajo.png" className="w-80"></img>
        <div className="">
          <h1 className="font-sans font-bold text-3xl my-10">Políticas</h1>
          <p className="leading-8 text-center max-md:text-md">
            <b>DEJAMOS ASENTADO QUE NO FOMENTAMOS LA REPRODUCCION COMERCIAL</b>
            <br />
            En caso de que tenga conocimiento de cualquier caso que vaya en
            contra de esta política, le instamos a que nos informe de inmediato
            a través del siguiente correo electrónico:{" "}
            <b>proteccion.animal@gmail.com.</b> Su ayuda es fundamental para
            mantener nuestros principios y valores en la protección de los
            animales
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
