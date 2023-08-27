import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BtnSilder from "../BtnSlider/BtnSilder";

const Slider = () => {
  // TO-DO: debe recibir el listado de imagenes por props.
  const imagenes = [
    "perrito1.jpg",
    "perrito2.jpg",
    "perrito3.jpg",
    "perrito4.jpg",
  ];
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true, type: "bullets" }}
        modules={[Navigation, Pagination]}
        className="w-[736px] h-[612px] rounded-md"
      >
        {imagenes.map((imagen) => (
          <SwiperSlide>
            <img
              className="absolute -rotate-45 right-2 bottom-36"
              width={300}
              src="like-stamp-png.png"
            />
            <img className="object-cover w-full h-[80%]" src={imagen} />
            <div className="bg-[#99A3B0] text-center flex flex-col items-center rounded-b-md">
              <p className="py-4">
                Perrito guau guau
                {/*SE MOSTRARA EL NOMBRE DE LA MASCOTA Y SU BIO*/}
              </p>
              <p className="font-bold w-[80%] text-center py-2">
                Soy firulai, tengo 6 años y soy super cariñoso. Me gusta jugar a
                atrapar la pelota y dormir en la cama de mis dueños.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <BtnSilder />
    </>
  );
};

export default Slider;
