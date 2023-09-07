// import { useState } from "react";
// import Match from "../Match/Match";

interface BtnSilderProps {
  next: () => void;
  likes: { [key: string]: string | null };
  setLikes: React.Dispatch<
    React.SetStateAction<{ [key: string]: string | null }>
  >;
  currentPet: string;
}

export default function BtnSilder({
  next,
  setLikes,
  likes,
  currentPet,
}: BtnSilderProps) {
  // const [matchDogs, setMatchDogs] = useState(false);
  // const handleMatch = () => {
  //   setMatchDogs(!matchDogs);
  // };

  const handleLike = () => {
    console.log("Like button clicked");
    if (!likes[currentPet] || likes[currentPet] === "") {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [currentPet]: "like",
      }));
    }
  };

  const handleNope = () => {
    console.log("Nope button clicked");
    if (!likes[currentPet] || likes[currentPet] === "") {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [currentPet]: "nope",
      }));
    }
  };

  return (
    <>
      {/* {matchDogs && <Match handleMatch={handleMatch} />} */}
      <figcaption className="w-[70vw]  sm:w-[60vw]  md:w-[60vw]   lg:w-[65vw] ] xl:w-[50vw]  mx-auto my-5 sm:my-4 md:my-5 lg:my-6 xl:my-3 flex place-content-between items-center max-md:w-[100%] px-4">
        <button
          className="bg-gray-300 shadow-md shadow-[10px 10px 17px -4px rgba(0,0,0,0.57)] hover:opacity-70 hover:shadow-inner active:shadow-md rounded-full p-5"
          onClick={handleNope}
        >
          <img
            src="nop.png"
            className="w-[7vw] sm:w-[7.5vw] md:w-[6.3vw] lg:w-[3.5vw] xl:w-[3.2vw]"
          ></img>
        </button>
        <button
          className="bg-gray-300 shadow-md shadow-[10px 10px 17px -4px rgba(0,0,0,0.57)] hover:opacity-70 hover:shadow-inner active:shadow-md rounded-full	p-1"
          onClick={handleLike}
        >
          <img
            src="like-nobg.png"
            className="w-[13.5vw] sm:w-[11.5vw] md:w-[9.5vw] lg:w-[6.5vw] xl:w-[5vw]"
          ></img>
        </button>
        <button
          className="bg-gray-300 shadow-md shadow-[10px 10px 17px -4px rgba(0,0,0,0.57)] hover:opacity-70 hover:shadow-inner active:shadow-md rounded-full hover:cursor-pointer"
          onClick={next}
        >
          <img
            src="arrow-next.png"
            className="w-[14.5vw] sm:w-[12.5vw] md:w-[10.5vw] lg:w-[6.8vw] xl:w-[5.1vw]"
          ></img>
        </button>
      </figcaption>
    </>
  );
}
