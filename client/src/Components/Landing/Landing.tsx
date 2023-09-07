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
      <section className=" bg-[#99A3B0] w-full h-screen pt-[25vh]  sm:pt-[25vh] md:pt-[18vh] lg:pt-[10vh]">
        <div className="grid grid-cols-3 px-4  gap-4 sm:flex sm:flex-row sm:gap-20 sm:justify-center sm:px-6 ">
          <div className="">
            <img src={"dogLanding.png"} className="w-[35vw] lg:w-80" />
            <p className="bg-[#77D3EC] text-[4.5vw] sm:text-xl lg:text-2xl font-bold">
              Lola
            </p>
          </div>
          <div className="flex justify-center content-center">
            <AiFillHeart
              size={150}
              color="red"
              className="m-auto heartbeat w-[20vw] sm:w-[24vw] "
            />
          </div>
          <div className="">
            <img src={"dogLanding2.png"} className="w-[35vw] lg:w-80" />
            <p className="bg-[#77D3EC] text-[4.5vw] sm:text-xl lg:text-2xl font-bold">
              Lorenzo
            </p>
          </div>
        </div>
        <div className="flex flex-auto justify-center text-center px-8 mt-16 lg:flex lg:flex-auto lg:text-center lg:w-full">
          <h1 className="text-lg sm:text-4xl lg:text-5xl font-sans font-bold max-md:text-2xl">
            Te ayudamos a buscar una pareja para tus mascotas
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-36 my-10 lg:w-full flex justify-center items-center flex-col  sm:flex-row lg:flex-row max-md:px-10">
        <div className="flex flex-col w-50 sm:w-[100%]">
          <h1
            className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl my-16"
            id="nosotros"
          >
            Sobre Nosotros
          </h1>
          <p className="font-sans leading-7 lg:leading-10 text-justify text-sm sm:text-lg lg:text-xl">
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
        </div>
        <img
          src={"equipoTrabajo.png"}
          className="w-80 sm:w-[50vw] lg:w-[30vw] mobile:m-auto"
        ></img>
      </section>
      <p className="font-bold font-sans text-2xl px-8 py-5 sm:text-2xl lg:text-3xl sm:px-10 lg:px-24 sm:py-10 text-[#E0838E]">
        Únete a nuestra comunidad y sé parte de una experiencia donde el
        amor, diversión y respeto entre mascotas son el centro de atención.
      </p>
      {visible && (
        <a href="#">
          <FaArrowUp className="border z-20 border-black rounded-full p-1 w-8 h-8 cursor-pointer fixed bottom-10 sm:bottom-20 right-3 sm:right-20 max-md:right-4" />
        </a>
      )}
      <section className="px-6 lg:px-36 my-10 lg:w-full flex justify-center items-center flex-col  sm:flex-row lg:flex-row max-md:px-10">
        <div className="">
          <h1 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl my-10 mobile:my-4">
            Políticas
          </h1>
          <b>DEJAMOS ASENTADO QUE NO FOMENTAMOS LA REPRODUCCION COMERCIAL</b>
          <p className="font-sans leading-7 lg:leading-10 text-justify text-sm sm:text-lg lg:text-xl">
            <br />
            En caso de que tenga conocimiento de cualquier caso que vaya en
            contra de esta política, le instamos a que nos informe de inmediato
            a través del siguiente correo electrónico:{" "}
            <b>proteccion.animal@gmail.com.</b> Su ayuda es fundamental para
            mantener nuestros principios y valores en la protección de los
            animales
          </p>
        </div>
        <img
          src="politicaTrabajo.png"
          className="w-80 sm:w-[30vw] lg:w-[20vw]"
        ></img>
      </section>
    </>
  );
};

export default Landing;
