import { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import InputWithLabel from "../Create/InputWithLabel";
import { Breed, Pet } from "../../types/types";
import { createPet } from "../../services/pets";
import { ToastContainer, toast } from "react-toastify";

const PetForm = () => {
  const [userId, setUserId] = useState<string>("");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [token, setToken] = useState<string>("");
  const [dataPet, setDataPet] = useState<Pet>({
    name: "",
    gender: "",
    age: "",
    description: "",
    breed: "",
  });
  const user = JSON.parse(localStorage.getItem("token") || "");

  useEffect(() => {
    setBreeds([
      {
        _id: {
          $oid: "64f78545dab0467f1b574e9e",
        },
        breed: "Chihuahua",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b798e9e",
        },
        breed: "Golden Retriever",
      },
      {
        _id: {
          $oid: "64f78545dab0467f88798e9e",
        },
        breed: "Bulldog Francés",
      },
      {
        _id: {
          $oid: "64f78545dabaf67f1b798e9e",
        },
        breed: "Bulldog",
      },
      {
        _id: {
          $oid: "64f78545dabaf67f1b798e9f",
        },
        breed: "Persian Cat",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b798ea0",
        },
        breed: "Boxer",
      },
      {
        _id: {
          $oid: "64f78545dab0467f88798ea0",
        },
        breed: "Yorkshire Terrier",
      },
      {
        _id: {
          $oid: "64f78545dabaf67f1b798ea0",
        },
        breed: "Siberian Husky",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b798ea1",
        },
        breed: "Rottweiler",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b574ea1",
        },
        breed: "Scottish Fold Cat",
      },
      {
        _id: {
          $oid: "64f78545dab0467f88798ea1",
        },
        breed: "Ragdoll Cat",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b798ea2",
        },
        breed: "Beagle",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b574ea2",
        },
        breed: "Labrador Retriever",
      },
      {
        _id: {
          $oid: "64f78545dab0467f88798ea2",
        },
        breed: "German Shepherd",
      },
      {
        _id: {
          $oid: "64f78545dabaf67f1b798ea2",
        },
        breed: "Birman Cat",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b798e9f",
        },
        breed: "Poodle",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b574e9f",
        },
        breed: "Siamese Cat",
      },
      {
        _id: {
          $oid: "64f78545dab0467f88798e9f",
        },
        breed: "Maine Coon",
      },
      {
        _id: {
          $oid: "64f78545dab0467f1b574ea0",
        },
        breed: "Dachshund",
      },
      {
        _id: {
          $oid: "64f78545dabaf67f1b798ea1",
        },
        breed: "Bengal Cat",
      },
    ]);

    if (user.user.id.length > 0) {
      setUserId(user.user.id);
      setToken(user.token);
    }
  }, [user, breeds]);

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
  const handlePetCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createPet(dataPet, userId, token);
    if (response.name) {
      toast.success("Mascota creada!");
    } else {
      toast.error("Revise los campos");
    }
  };

  return (
    <div className="flex justify-center border-2 content-center p-8 mobile:flex-col">
      <form onSubmit={handlePetCreate>
        <h1 className="font-bold text-4xl ">Perfil de Shaby</h1>
        <div className="grid grid-cols-2 gap-x-60 max-md:flex flex-col gap-2 px-4 mobile:grid-cols-1">
          <div className="max-md:w-[100%] flex flex-col mobile:w-full">
            <Avatar size={"medium"} />
            <InputWithLabel
              label="Nombre"
              type="text"
              placeholder="Shaby"
              autoComplete="Off"
              name="name"
              iconClass="fa-dog"
              onChange={handlePetnameChange}
            />
            <InputWithLabel
              label="Edad"
              type="text"
              placeholder="4"
              autoComplete="Off"
              name="age"
              iconClass="fa-calendar"
              onChange={handlePetageChange}
            />
            <InputWithLabel
              label="Raza"
              type="text"
              list="razas"
              placeholder="Caniche"
              autoComplete="Off"
              name="breed"
              iconClass="fa-paw"
              onChange={handlePetbreedChange}
            />
            <datalist id="razas" className="">
              {breeds.map((raza, index) => (
                <option key={index} value={raza.breed}></option>
              ))}
            </datalist>
            <InputWithLabel
              label="Género"
              type="text"
              list="genero"
              placeholder="M"
              autoComplete="Off"
              name="gender"
              iconClass="fa-venus-mars"
              onChange={handlePetgenderChange}
            />
            <datalist id="genero">
              <option key="M">Macho</option>
              <option key="H">Hembra</option>
            </datalist>
            <InputWithLabel
              label="Descripción"
              type="text"
              placeholder="Comparte con la comunidad cómo es tu mascota."
              autoComplete="Off"
              name="description"
              iconClass="fa-venus-mars"
              onChange={handlePetdescriptionChange}
            />
          </div>
          <div className="grid grid-cols-2 border-2 m-auto gap-10 my-10 max-sm:gap-4 mobile:my-8">
            <img className="w-40 h-40 max-sm:w-28 max-sm:h-28" src="perrito1.jpg" />
            <img className="w-40 h-40 max-sm:w-28 max-sm:h-28" src="perrito2.jpg" />
            <img className="w-40 h-40 max-sm:w-28 max-sm:h-28" src="perrito3.jpg" />
            <button type="button" className=" min-w-40 min-h-40 border-2 bg-gray-300 text-[3rem] border-black mobile:min-w-28 mobile:min-h-28 flex items-center justify-center">+</button>
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
