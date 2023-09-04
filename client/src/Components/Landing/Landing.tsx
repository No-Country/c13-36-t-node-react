import { AiFillHeart } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <section className="flex items-center my-16 gap-x-44 max-md:gap-x-4  ">
        <div className="border-2 h-full">
          <img src={"dogLanding.png"} className="w-60" />
          <p className="bg-[#F65E7E] text-2xl font-bold">Lola</p>
        </div>
        <div>
          <AiFillHeart
            size={150}
            color="red"
            className="m-auto heartbeat max-md:w-20"
          />
          <h1 className="text-4xl w-56 font-mono font-bold max-md:text-2xl">
            Te ayudamos a buscar una pareja para tus mascotas
          </h1>
        </div>
        <div className="border-2 h-full">
          <img src={"dogLanding2.png"} className="w-60" />
          <p className="bg-[#F65E7E] text-2xl font-bold">Lorenzo</p>
        </div>
      </section>
      <section className="px-36 my-20 w-full flex justify-center items-center max-md:flex-col max-md:px-10 max-md:my-4">
        <div className="flex flex-col w-50 max-md:w-[100%]">
          <h1 className="font-sans font-bold text-3xl my-2" id="nosotros">
            Nosotros
          </h1>
          <p className="leading-8 text-justify max-md:text-md ">
            "Somos un equipo de desarrolladores y diseñadores que hemos creado
            esta aplicación con el propósito de ayudar a las personas que desean
            criar a su mascota a elegir a sus progenitores o a uno de ellos de
            manera informada. Nuestra plataforma no solo facilita la selección
            de padres adecuados, sino que también proporciona información sobre
            las posibles enfermedades o rasgos de carácter que la futura mascota
            podría heredar. Estamos comprometidos a hacer que la experiencia de
            criar una mascota sea más transparente y satisfactoria para todos
            nuestros usuarios."
          </p>
        </div>
        <img src={"equipoTrabajo.png"} className="w-80"></img>
      </section>
      <a href="#">
        <FaArrowUp className="border border-black rounded-full p-1 w-8 h-8 cursor-pointer fixed bottom-20 right-20  max-md:bottom-10 max-md:right-4" />
      </a>
      <section className="px-36 my-5 w-full flex justify-center items-center  max-md:flex-col-reverse max-md:px-10">
        <img src="politicaTrabajo.png" className="w-80"></img>
        <div className="">
          <h1 className="font-sans font-bold text-3xl my-2">Politicas</h1>
          <p className="leading-8 text-justify max-md:text-md">
            ""Queremos aclarar que, como parte de nuestro contrato, no
            respaldamos ni promovemos la reproducción con fines comerciales. En
            caso de que tenga conocimiento de cualquier caso que vaya en contra
            de esta política, le instamos a que nos informe de inmediato a
            través del siguiente correo electrónico:{" "}
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
