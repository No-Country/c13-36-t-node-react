import Confetti from "react-confetti";
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
      <div className="p-10 rounded-2xl w-[736px] h-[500px] absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 z-50 m-auto">
        <div
          className="absolute top-3 right-6 cursor-pointer"
          onClick={handleMatch}
        >
          X
        </div>
        <div className="px-10 mb-8 flex place-content-around">
          <img src={"perrito1.jpg"} className="w-48 rounded-full" />
          <img src={"perrito2.jpg"} className="w-48 rounded-full" />
        </div>
        <h1 className="uppercase font-bold">Pet Match</h1>
        <p className="font-bold my-8">
          Ponte en contacto con el dueño de la mascota para concretar su cita{" "}
        </p>
        <a href="https://web.whatsapp.com/" target="_blank">
          <img src={"Contact.png"} className="m-auto hover:cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default Match;
