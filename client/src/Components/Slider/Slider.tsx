import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  // TO-DO: debe recibir el listado de imagenes por props.
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true, type: "bullets" }}
      modules={[Navigation, Pagination]}
      className="w-[736px] h-[512px]"
    >
      <SwiperSlide>
        <img className="object-cover w-full h-[80%]" src="perrito1.jpg" />
        <div className="bg-[#99A3B0]">
          <p>
            Perrito guau guau{/*SE MOSTRARA EL NOMBRE DE LA MASCOTA Y SU BIO*/}
          </p>
          <p>Descripción breve</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="object-cover w-full h-[80%]" src="perrito2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="object-cover w-full h-[80%]" src="perrito3.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
