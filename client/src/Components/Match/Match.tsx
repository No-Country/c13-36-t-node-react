import Confetti from "react-confetti";
import { AiFillHeart } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import { FaWindowClose } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { User, getUserById } from "../../services/users";
import { useState } from "react";

interface MatchProps {
  handleMatch: () => void;
  actual:
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
        image: never[];
        createdAt: {
          $date: string;
        };
        updatedAt: {
          $date: string;
        };
        description?: string | undefined;
      }
    | undefined;
  currentPet:
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
        image: never[];
        createdAt: {
          $date: string;
        };
        updatedAt: {
          $date: string;
        };
        description?: string | undefined;
      }
    | undefined;
}

const Match: React.FC<MatchProps> = ({ handleMatch, actual, currentPet }) => {
  const [usuario, setUserId] = useState<User>();
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  getUserById(token.user.id, token.token).then((result) => {
    setUserId(result);
  });

  const { t } = useTranslation("match");

  return (
    <section>
      <Confetti
        width={1920}
        height={1080}
        className="bg-grey-800/70 backdrop-blur-xl"
      />
      <div className="p-10 rounded-2xl w-[736px] h-[500px] absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300/40 z-50 m-auto backdrop-blur-xl">
        <FaWindowClose
          className="absolute top-3 right-6 cursor-pointer text-2xl"
          onClick={handleMatch}
        />
        <h1 className="uppercase font-bold">Pet Match</h1>
        <div className="px-10 mb-8 flex place-content-around">
          <div className="flex flex-col gap-4">
            <Avatar
              size="large"
              src={`https://api.multiavatar.com/${actual?.name}.png`}
            />
            <h1 className="font-bold bg-slate-300 rounded-md">
              {actual ? actual.name : "Mi mascota"}
            </h1>
          </div>
          <AiFillHeart size={150} color="red" className="m-auto heartbeat" />
          <div className="flex flex-col gap-4">
            <Avatar
              size="large"
              src={`https://api.multiavatar.com/${currentPet?.name}.png`}
            />
            <h1 className="font-bold bg-slate-300 rounded-md">
              {currentPet ? currentPet.name : "Mi mascota"}
            </h1>
          </div>
        </div>
        <p className="font-bold my-8">{t("contactOwner")}</p>
        <button
          onClick={() =>
            window.open(
              `https://api.whatsapp.com/send?phone=${usuario?.phone}`,
              "_blank"
            )
          }
          className="border border-black px-8 py-1 flex gap-6 justify-around m-auto items-center rounded-lg hover:border-2 hover:border-neutral-300 hover:shadow-md"
        >
          {t("contactButton")}
          <img src={"Contact.png"} width={35} />
        </button>
      </div>
    </section>
  );
};

export default Match;
