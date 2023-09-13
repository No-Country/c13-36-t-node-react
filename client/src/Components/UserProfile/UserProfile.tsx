import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { User } from "../../services/users";
import { useTranslation } from "react-i18next";
import { getPetsByUser } from "../../services/pets";
import { useEffect, useState } from "react";
import { Pet } from "../../types/types";
import Avatar from "../Avatar/Avatar";

interface UserProfileProps {
  usuario: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ usuario }) => {
  const [mascotas, setMascotas] = useState<Pet[]>([]);
  const { t } = useTranslation("userprofile");
  const token = JSON.parse(localStorage.getItem("token") || "");

  useEffect(() => {
    getPetsByUser(token.user.id, token.token).then((result) =>
      setMascotas(result)
    );
  }, []);

  return (
    <section className="p-4 font-sans border-2 flex justify-around mobile:flex-col">
      <div className="flex flex-col bg-[#99a3b0c2] w-96 p-8 rounded-lg text-left border-2 mobile:w-full">
        <h1 className="mb-2 font-bold text-2xl">
          {t("profile")}
          {usuario.firstName}
        </h1>
        <img src={"Vector.png"} className="w-16"></img>
        <p className="my-2 text-slate-800">{t("editPhoto")}</p>
        <form action="" className="flex flex-col text-start">
          <span className="font-semibold">{t("username")}</span>
          <h3 className="font-semibold text-slate-500 mt-2">
            {usuario.username}
          </h3>
          <span className="font-semibold mt-4">{t("firstNameLastName")}</span>
          <h3 className="font-semibold text-slate-500 mt-2">
            {usuario.firstName} {usuario.lastName}
          </h3>
          <span className="font-semibold mt-4">{t("email")}</span>
          <h3 className="font-semibold mt-2 text-slate-500">{usuario.email}</h3>
          <span className="font-semibold mt-4">{t("phone")}</span>
          <input
            type="text"
            placeholder="1245-4572-358"
            className="font-semibold mt-2 px-2 rounded-lg py-2"
            value={usuario.phone}
          />
        </form>
      </div>
      <div className="w-80 mobile:w-full">
        <h1 className="my-10 font-bold text-3xl">{t("mypets")}</h1>
        <div className="flex wrap flex-row justify-between p-2 rounded-lg mt-2">
          {mascotas ? (
            mascotas.map((mascota) => (
              <NavLink to={`/mascotas/${mascota.id}`}>
                <Avatar
                  size="small"
                  src={`https://api.multiavatar.com/${mascota.name}.png`}
                />
                {mascota.name}
              </NavLink>
            ))
          ) : (
            <p className="font-bold text-sm">{t("continue")}</p>
          )}
        </div>
        <div className="flex justify-center">
          <NavLink to={"/mascotas"}>
            <button className="bg-[#E0838E] font-medium p-2 rounded-lg flex flex-row text-white hover:scale-105 hover:ease-in duration-300 mt-14">
              <AiOutlinePlusCircle size={24} className=" mr-1" />
              {t("addPet")}
            </button>
          </NavLink>
        </div>
        <div className="flex flex-row justify-between mt-48 mobile:mt-16">
          <NavLink
            to={"/main"}
            className="border-2 border-[#209FD6] text-center p-2 rounded-xl text-black "
          >
            {t("deleteAccount")}
          </NavLink>
          <button className=" bg-[#77D3EC] rounded-xl p-2 text-black">
            {t("saveChanges")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
