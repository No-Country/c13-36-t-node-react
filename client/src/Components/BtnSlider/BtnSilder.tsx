import { useState } from "react";
import Confetti from "react-confetti";

export default function BtnSilder() {
  const [matchDogs, setMatchDogs] = useState(false);
  const handleMatch = () => {
    setMatchDogs(!matchDogs);
  };

  return (
    <>
      {matchDogs ? (
        <section className="">
          <Confetti style={{width:"100%", height:"100%"}}/>
          <div className="p-10 rounded-2xl	 w-96 h-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 z-50 m-auto h-auto">
            <div
              className="absolute top-3 right-6 cursor-pointer"
              onClick={handleMatch}
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </div>
            <div className="px-10 mb-8 flex place-content-around">
              <img src={"perrito1.jpg"} className="w-20 rounded-full" />
              <img src={"perrito2.jpg"} className="w-20 rounded-full" />
            </div>
            <h1 className="uppercase font-bold">Pet Match</h1>
            <p className="font-bold my-8">
              Ponte en contacto con el dueño de la mascota para concretar su
              cita{" "}
            </p>
            <a href="https://web.whatsapp.com/" target="_blank">
              <img
                src={"Contact.png"}
                className="m-auto hover:cursor-pointer"
              />
            </a>
          </div>
        </section>
      ) : (
        ""
      )}
      <figcaption className="w-[736px] mx-auto my-8 px-28 flex place-content-between items-center max-md:w-[100%] px-4">
        <button className="bg-gray-300 shadow-md shadow-[10px 10px 17px -4px rgba(0,0,0,0.57)] hover:opacity-70 hover:shadow-inner active:shadow-md rounded-full	p-5">
          <img src="nop.png" width={60}></img>
        </button>
        <button
          className="bg-gray-300 shadow-md shadow-[10px 10px 17px -4px rgba(0,0,0,0.57)] hover:opacity-70 hover:shadow-inner active:shadow-md rounded-full	p-1"
          onClick={handleMatch}
        >
          <img src="like-nobg.png" width={120}></img>
        </button>
        <button className="bg-gray-300 shadow-md shadow-[10px 10px 17px -4px rgba(0,0,0,0.57)] hover:opacity-70 hover:shadow-inner active:shadow-md rounded-full hover:cursor-pointer">
          <img src="arrow-next.png" width={110}></img>
        </button>
      </figcaption>
    </>
  );
}
