import Confetti from "react-confetti";
import { AiFillHeart } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import { FaWindowClose } from "react-icons/fa";

interface MatchProps {
  handleMatch: () => void;
}

const Match: React.FC<MatchProps> = ({ handleMatch }) => {
  return (
    <section>
      <Confetti
        width={1920}
        height={1080}
        className="bg-grey-800/70 backdrop-blur-sm"
      />
      <div className="p-10 rounded-2xl w-[736px] h-[500px] absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300/40 z-50 m-auto backdrop-blur-xl">
        <FaWindowClose 
        className="absolute top-3 right-6 cursor-pointer text-2xl"
        onClick={handleMatch}/>
        <h1 className="uppercase font-bold">Pet Match</h1>
        <div className="px-10 mb-8 flex place-content-around">
          <div className="flex flex-col gap-4">
            <Avatar size="large" src="perrito1.jpg" />
            <h1 className="font-bold bg-slate-300 rounded-md">SHABI</h1>
          </div>
          <AiFillHeart size={150} color="red" className="m-auto heartbeat" />
          <div className="flex flex-col gap-4">
            <Avatar size="large" src="perrito2.jpg" />
            <h1 className="font-bold bg-slate-300 rounded-md">GINA</h1>
          </div>
        </div>
        <p className="font-bold my-8">
          Ponte en contacto con el dueño de la mascota para concretar su cita{" "}
        </p>
        <button
          onClick={() => window.open("https://web.whatsapp.com/", "_blank")}
          className="border border-black px-8 py-1 flex gap-6 justify-around m-auto items-center rounded-lg hover:border-2 hover:border-neutral-300 hover:shadow-md"
        >
          Contáctate
          <img src={"Contact.png"} width={35} />
        </button>
      </div>
    </section>
  );
};

export default Match;
