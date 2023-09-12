import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import InputWithLabel from "../Create/InputWithLabel";
import { Pet } from "../../types/types";
import { useTranslation } from "react-i18next";

const PetForm = () => {
  const { t } = useTranslation("petform");
  const [dataPet, setDataPet] = useState<Pet>({
    name: "",
    gender: "",
    age: "",
    description: "",
    breed: "",
  });

  const handlePetnameChange = (value: string) => {
    setDataPet({ ...dataPet, name: value });
  };

  const handlePetgenderChange = (value: string) => {
    setDataPet({ ...dataPet, gender: value });
  };
  const handlePetageChange = (value: string) => {
    setDataPet({ ...dataPet, age: value });
  };
  const handlePetdescriptionChange = (value: string) => {
    setDataPet({ ...dataPet, description: value });
  };
  const handlePetbreedChange = (value: string) => {
    setDataPet({ ...dataPet, breed: value });
  };

  return (
    <div className="flex justify-center border-2 content-center p-8 mobile:flex-col">
      <form action="">
        <h1 className="font-bold text-4xl ">{t("profile")}</h1>
        <div className="grid grid-cols-2 gap-x-60 max-md:flex flex-col gap-2 px-4 mobile:grid-cols-1">
          <div className="max-md:w-[100%] flex flex-col mobile:w-full">
            <Avatar size={"medium"} />
            <InputWithLabel
              label={t("name")}
              type="text"
              placeholder="Shaby"
              autoComplete="Off"
              name="name"
              iconClass="fa-dog"
              onChange={handlePetnameChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <InputWithLabel
              label={t("age")}
              type="text"
              placeholder="4"
              autoComplete="Off"
              name="age"
              iconClass="fa-calendar"
              onChange={handlePetageChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <InputWithLabel
              label={t("breed")}
              type="text"
              placeholder={t("breedPlaceholder")}
              autoComplete="Off"
              name="breed"
              iconClass="fa-paw"
              onChange={handlePetbreedChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <InputWithLabel
              label={t("gender")}
              type="text"
              placeholder="M"
              autoComplete="Off"
              name="gender"
              iconClass="fa-venus-mars"
              onChange={handlePetgenderChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <InputWithLabel
              label={t("description")}
              type="text"
              placeholder={t("descriptionPlaceholder")}
              autoComplete="Off"
              name="description"
              iconClass="fa-venus-mars"
              onChange={handlePetdescriptionChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="grid grid-cols-2 border-2 m-auto gap-10 my-10 max-sm:gap-4 mobile:my-8">
            <img
              className="w-40 h-40 max-sm:w-28 max-sm:h-28"
              src="perrito1.jpg"
            />
            <img
              className="w-40 h-40 max-sm:w-28 max-sm:h-28"
              src="perrito2.jpg"
            />
            <img
              className="w-40 h-40 max-sm:w-28 max-sm:h-28"
              src="perrito3.jpg"
            />
            <button
              type="button"
              className=" min-w-40 min-h-40 border-2 bg-gray-300 text-[3rem] border-black mobile:min-w-28 mobile:min-h-28 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
        <button className="w-40 border-2 bg-gray-300 font-bold p-2 rounded-lg mt-10">
          {t("saveChanges")}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
