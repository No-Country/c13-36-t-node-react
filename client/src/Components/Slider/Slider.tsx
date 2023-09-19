import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BtnSilder from "../BtnSlider/BtnSilder";
import { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import mascothinas from "../../types/deploy.pets.json";
import Match from "../Match/Match";
import { getPets } from "../../services/pets";
import { PetResponse } from "../../types/types";

interface SliderProps {
  mascotas: string[];
  misMascotas:
    | {
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
        image: string[];
        createdAt: {
          $date: string;
        };
        updatedAt: {
          $date: string;
        };
        description?: string | undefined;
      }[]
    | undefined;
}

const Slider: React.FC<SliderProps> = ({ mascotas, misMascotas }) => {
  // TO-DO: debe recibir el listado de imagenes por props.
  const [actual, setActual] = useState("650224e08494e46a9f7e65c0");
  const [imagenes, setImagenes] =
    useState<{ public_id: string; secure_url: string }[][]>();
  const [mascotasFromBack, setMascotasFromBack] = useState<
    {
      distanceToPet: string | null;
      pet: PetResponse;
    }[]
  >();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [likes, setLikes] = useState<{ [key: string]: string | null }>({
    "Golden Retriever": null,
    Chihuahua: null,
    "Bulldog Francés": null,
    Bulldog: null,
  });

  const handleNext = () => {
    if (mascotasFromBack && active < mascotasFromBack?.length - 1) {
      setActive((active) => active + 1);
    } else {
      setActive(0);
    }
  };
  const actualPet = misMascotas?.find((mascota) => mascota._id.$oid === actual);
  const currentPet = mascotas[active];
  const currentMascot = mascothinas.find(
    (mascota) => mascota._id.$oid === currentPet
  );
  const currentLikeStatus = likes[currentPet] || ""; // Obtenemos el estado de "like" o "nope"

  //const imagenes = petImg.filter((pet) => pet.petId === currentPet);

  const handleMatch = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (actualPet) {
      getPets(
        actualPet?._id.$oid,
        JSON.parse(localStorage.getItem("token") || "").token
      ).then((pet) => {
        if (typeof pet !== "string") {
          setMascotasFromBack(pet);
          setImagenes(pet.map((mascota) => mascota.pet.image));
        }
      });
    }
    console.log(imagenes);
  }, [actualPet]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex gap-10 my-4">
        {misMascotas?.map((mascota) => (
          <div
            className="hover:scale-105 group transition-all duration-200"
            onClick={() => setActual(mascota._id.$oid)}
          >
            <Avatar
              size="small"
              src={`https://api.multiavatar.com/${mascota.name}.png`}
            />
            <p
              className={`group-hover:opacity-100 ${
                actual === mascota._id.$oid ? "opacity-100" : "opacity-0"
              }`}
            >
              {mascota.name}
            </p>
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
        {imagenes &&
          imagenes[active].map((imagen, index) => (
            <SwiperSlide>
              <>
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
                  key={index}
                  className="object-contain w-full h-[80%]"
                  src={imagen.secure_url}
                />
                <div className="bg-[#99A3B0] text-center flex flex-col items-center rounded-b-md h-full">
                  <p className="py-2">
                    {currentMascot?.name || "Mascota sin nombre"}
                    {/*SE MOSTRARA EL NOMBRE DE LA MASCOTA Y SU BIO*/}
                  </p>
                  <p className="font-bold w-[80%] text-center py-2  text-xs sm:text-sm lg:text-lg xl:text-xl">
                    {currentMascot?.description || "Mascota sin descripción"}
                  </p>
                </div>
              </>
            </SwiperSlide>
          ))}
      </Swiper>
      <BtnSilder
        next={handleNext}
        likes={likes}
        setVisible={setVisible}
        setLikes={setLikes}
        currentPet={mascotas[active]}
      />
      {visible && (
        <Match
          handleMatch={handleMatch}
          actual={actualPet}
          currentPet={currentMascot}
        />
      )}
    </div>
  );
};

export default Slider;
