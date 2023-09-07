import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import InputWithLabel from "../Create/InputWithLabel";
import { Pet } from "../../types/types";

const PetForm = () => {
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
    <div className="flex justify-center content-center  pb-2">
      <form action="">
        <h1 className="font-bold text-4xl my-2">Perfil de Shaby</h1>
        <div className="grid grid-cols-2 gap-x-60 max-md:flex flex-col gap-2 px-4">
          <div className="max-md:w-[100%] flex flex-col">
            <Avatar size={"large"} />
            <InputWithLabel
              label="Nombre"
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
              label="Edad"
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
              label="Raza"
              type="text"
              placeholder="Caniche"
              autoComplete="Off"
              name="breed"
              iconClass="fa-paw"
              onChange={handlePetbreedChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <InputWithLabel
              label="Género"
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
              label="Descripción"
              type="text"
              placeholder="Comparte con la comunidad cómo es tu mascota."
              autoComplete="Off"
              name="description"
              iconClass="fa-venus-mars"
              onChange={handlePetdescriptionChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-16 max-md:grid max-md:grid-rows-2 , max-md:grid-flow-col max-md:gap-10 max-md:mt-4">
            <img className="w-48 h-48 max-md:w-full " src="perrito1.jpg" />
            <img className="w-48 h-48 max-md:w-full " src="perrito2.jpg" />
            <img className="w-48 h-48 max-md:w-full" src="perrito3.jpg" />
            <button className="bg-[#D9D9D9] text-white font-extrabold text-9xl transition-transform relative overflow-hidden max-md:w-full">
              +
            </button>
          </div>
        </div>
        <button className="w-40 border-2 bg-gray-300 font-bold p-2 rounded-lg mt-10">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default PetForm;
