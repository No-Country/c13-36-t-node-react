import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BtnSilder from "../BtnSlider/BtnSilder";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import petImg from "../../Mockups/mascotas_propias.json";

interface SliderProps {
  mascotas: string[];
  misMascotas: {
    _id: {
      $oid: string;
    };
    name: string;
    gender: string;
    breedId: {
      $oid: string;
    };
    ownerId: {
      $oid: string;
    };
    age: number;
    image: never[];
    createdAt: {
      $date: string;
    };
    updatedAt: {
      $date: string;
    };
    description?: string | undefined;
  }[];
}

const Slider: React.FC<SliderProps> = ({ mascotas, misMascotas }) => {
  // TO-DO: debe recibir el listado de imagenes por props.
  const [active, setActive] = useState(0);
  const [likes, setLikes] = useState<{ [key: string]: string | null }>({
    "Golden Retriever": null,
    Chihuahua: null,
    "Bulldog Francés": null,
    Bulldog: null,
  });

  const handleNext = () => {
    if (active < mascotas.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  const currentPet = mascotas[active];
  console.log(currentPet, "currentPet");
  const currentLikeStatus = likes[currentPet] || ""; // Obtenemos el estado de "like" o "nope"
  console.log(currentLikeStatus, "currentLikeStatus");

  const imagenes = petImg.filter((pet) => pet.petId === currentPet);
  console.log(imagenes);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex gap-10 my-4">
        {misMascotas.map((mascota) => (
          <div className="hover:scale-105 group transition-all duration-200">
            <Avatar
              size="small"
              src={`https://api.multiavatar.com/${mascota.name}.png`}
            />
            <p className="opacity-0 group-hover:opacity-100">{mascota.name}</p>
          </div>
        ))}
      </div>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{ clickable: true, type: "bullets" }}
        modules={[Navigation, Pagination]}
        className="w-[70vw] h-[60vh] sm:w-[60vw] sm:h-[60vh] md:w-[60vw] md:h-[60vh]  lg:w-[65vw] lg:h-[60vh] xl:w-[50vw] xl:h-[67vh] rounded-md  z-0"
      >
        {imagenes.map((pet) =>
          pet.imagenes !== undefined && pet.imagenes?.length > 0 ? (
            pet.imagenes.map((imagen, index) => (
              <SwiperSlide key={index}>
                {currentLikeStatus === "like" && (
                  <img
                    className="absolute -rotate-45 right-2 bottom-36 w-[25vw] sm:w-[28vw] md:w-[20vw] lg:w-[16vw]"
                    src="like-stamp-png.png"
                  />
                )}
                {currentLikeStatus === "nope" && (
                  <img
                    className="absolute -rotate-45 right-2 bottom-36 w-[25vw] sm:w-[28vw] md:w-[20vw] lg:w-[16vw]"
                    src="nope-stamp-png.png"
                  />
                )}
                <img className="object-cover w-full h-[80%]" src={imagen} />
                <div className="bg-[#99A3B0] text-center flex flex-col items-center rounded-b-md h-full">
                  <p className="py-2">
                    Perrito guau guau
                    {/*SE MOSTRARA EL NOMBRE DE LA MASCOTA Y SU BIO*/}
                  </p>
                  <p className="font-bold w-[80%] text-center py-2  text-xs sm:text-sm lg:text-lg xl:text-xl">
                    Soy firulai, tengo 6 años y soy super cariñoso. Me gusta
                    jugar a atrapar la pelota y dormir en la cama de mis dueños.
                  </p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide key={imagenes[0].petId}>
              {currentLikeStatus === "like" && (
                <img
                  className="absolute -rotate-45 right-2 bottom-36 w-[25vw] sm:w-[28vw] md:w-[20vw] lg:w-[16vw]"
                  src="like-stamp-png.png"
                />
              )}
              {currentLikeStatus === "nope" && (
                <img
                  className="absolute -rotate-45 right-2 bottom-36 w-[25vw] sm:w-[28vw] md:w-[20vw] lg:w-[16vw]"
                  src="nope-stamp-png.png"
                />
              )}
              <img
                className="object-cover w-full h-[80%]"
                src="/mascotas/chihuahua/foto1.jpg"
              />
              <div className="bg-[#99A3B0] text-center flex flex-col items-center rounded-b-md h-full">
                <p className="py-2">
                  Perrito guau guau
                  {/*SE MOSTRARA EL NOMBRE DE LA MASCOTA Y SU BIO*/}
                </p>
                <p className="font-bold w-[80%] text-center py-2  text-xs sm:text-sm lg:text-lg xl:text-xl">
                  Soy firulai, tengo 6 años y soy super cariñoso. Me gusta jugar
                  a atrapar la pelota y dormir en la cama de mis dueños.
                </p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <BtnSilder
        next={handleNext}
        likes={likes}
        setLikes={setLikes}
        currentPet={mascotas[active]}
      />
    </div>
  );
};

export default Slider;
