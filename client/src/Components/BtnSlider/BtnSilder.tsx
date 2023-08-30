import { useState } from "react";
import Match from "../Match/Match";

export default function BtnSilder() {
  const [matchDogs, setMatchDogs] = useState(false);
  const handleMatch = () => {
    setMatchDogs(!matchDogs);
  };

  return (
    <>
      {matchDogs && <Match handleMatch={handleMatch} />}
      <figcaption className="w-[736px] mx-auto my-8 flex place-content-between items-center max-md:w-[100%] px-4">
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
