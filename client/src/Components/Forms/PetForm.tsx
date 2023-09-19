import { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import InputWithLabel from "../Create/InputWithLabel";
import { Breed, Specie } from "../../types/types";
import {
  createPet,
  getBreeds,
  getPet,
  getSpecies,
  savePictures,
} from "../../services/pets";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import imgs from "../../Mockups/mascotas_imagenes.json";

const PetForm = () => {
  const { id } = useParams();
  const { t } = useTranslation("petform");
  const [userId, setUserId] = useState<string>("");
  /* const breeds = [
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
  ]; */
  const [specie, setSpecie] = useState<Specie[]>();
  const [breeds, setBreeds] = useState<Breed[]>();
  const [newImage, setNewImage] = useState<File | null>(null);
  const [selectedSpecie, setSelectedSpecie] = useState<string>(
    "650210368494e46a9f7e64ec"
  );
  const [token, setToken] = useState<string>("");
  const [imagenes, setImagenes] = useState<string[] | undefined>();
  const [creating, setCreating] = useState(false);
  const [dataPet, setDataPet] = useState({
    name: "",
    gender: "",
    age: "",
    description: "",
    breed: "",
  });
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("token") || "");

  useEffect(() => {
    if (user.user.id.length > 0) {
      setUserId(user.user.id);
      setToken(user.token);
    }
    console.log(token);
    getSpecies(token).then((result) => {
      if (result) {
        setSpecie(result);
      }
    });
    getBreeds(selectedSpecie, token).then((result) => setBreeds(result));
    if (id) {
      getPet(id, token).then((mascota) => {
        if (typeof mascota !== "string") {
          setDataPet({
            name: mascota.name,
            gender: mascota.gender,
            age: mascota.age.toString(),
            breed: mascota.breedId.id,
            description: mascota.description,
          });
          setSelectedSpecie(mascota.breedId.specieId.id);
          getBreeds(selectedSpecie, token);
          const petImages = imgs
            .filter((pet) => pet.petId === mascota.id)
            .map((pet) => pet.imagenes);
          setImagenes(petImages[0]);
        }
      });
    }
  }, [id, user.token, user.user.id, token, selectedSpecie]);

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
  const handlePetSpecieChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecie(e.target.value);
    getBreeds(e.target.value, token).then((respuesta) => setBreeds(respuesta));
  };
  const handlePetbreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataPet({ ...dataPet, breed: e.target.value });
  };
  const handlePetImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImage(e.target.files[0]);
      if (id) {
        savePictures(id, token, e.target.files[0])
          .then(() => toast.success("Imagen subida con exito"))
          .catch(() => toast.error("Error al subir la imagen"));
      }
    }
  };

  const handlePetCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreating(true);
    console.log(newImage);

    const response = await createPet(
      { ...dataPet, age: parseInt(dataPet.age) },
      userId,
      token
    );

    if (response.name) {
      toast.success(t("pet_created_success"));
      setTimeout(() => {
        navigate("/userprofile");
      }, 5000);
    } else {
      toast.error(t("fields_review_error"));
      setCreating(false);
    }
  };

  return (
    <div className="flex justify-center content-center p-8 mobile:flex-col">
      <ToastContainer />
      <form onSubmit={handlePetCreate}>
        <h1 className="font-bold text-4xl ">
          {t("profile")} {dataPet.name ? dataPet.name : ""}
        </h1>
        <div className="grid grid-cols-2 gap-x-60 max-md:flex flex-col gap-2 px-4 mobile:grid-cols-1">
          <div className="max-md:w-[100%] flex flex-col mobile:w-full">
            <Avatar
              size={"medium"}
              src={
                dataPet.name
                  ? `https://api.multiavatar.com/${dataPet.name}.png`
                  : `https://api.multiavatar.com/avatar.png`
              }
            />
            <InputWithLabel
              value={dataPet.name}
              label={t("name")}
              type="text"
              placeholder="Shaby"
              autoComplete="Off"
              name="name"
              iconClass="fa-dog"
              onChange={handlePetnameChange}
            />
            <InputWithLabel
              value={dataPet.age.toString()}
              label={t("age")}
              type="text"
              placeholder="4"
              autoComplete="Off"
              name="age"
              iconClass="fa-calendar"
              onChange={handlePetageChange}
            />

            <label className="font-semibold ml-1 mt-1 text-left" htmlFor="raza">
              {t("specie")}
            </label>
            <div className="relative w-[100%] align-middle">
              <select
                className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%] valid:border-2 border-green-400 appearance-none"
                name="raza"
                onChange={handlePetSpecieChange}
                value={selectedSpecie}
              >
                {specie &&
                  specie.map((raza, index) => (
                    <option key={index} value={raza.id} label={raza.specie} />
                  ))}
              </select>
              <i
                className={`fa-solid fa-medal absolute right-3 top-1/3 hover:cursor-pointer`}
                style={{ color: "#333" }}
              ></i>
            </div>
            <label className="font-semibold ml-1 mt-1 text-left" htmlFor="raza">
              {t("breed")}
            </label>
            <div className="relative w-[100%] align-middle">
              <select
                className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%] valid:border-2 border-green-400 appearance-none"
                name="raza"
                onChange={handlePetbreedChange}
                value={dataPet.breed}
              >
                {breeds &&
                  selectedSpecie &&
                  breeds.map((raza, index) => (
                    <option key={index} value={raza.id} label={raza.breed} />
                  ))}
              </select>
              <i
                className={`fa-solid fa-medal absolute right-3 top-1/3 hover:cursor-pointer`}
                style={{ color: "#333" }}
              ></i>
            </div>
            {/* <InputWithLabel
              label="Raza"
              type="text"
              list="razas"
              placeholder="Caniche"
              autoComplete="on"
              name="breed"
              iconClass="fa-paw"
              onChange={handlePetbreedChange}
            />
            <datalist id="razas" className="">
              {breeds.map((raza, index) => (
                <option key={index} value={raza._id.$oid} label={raza.breed} />
              ))}
            </datalist> */}
            <InputWithLabel
              value={dataPet.gender}
              label={t("gender")}
              type="text"
              list="genero"
              placeholder="M"
              autoComplete="Off"
              name="gender"
              iconClass="fa-venus-mars"
              onChange={handlePetgenderChange}
            />
            <datalist id="genero">
              <option key="M" value="macho" />
              <option key="H" value="hembra" />
            </datalist>
            <InputWithLabel
              value={dataPet.description}
              label={t("description")}
              type="text"
              placeholder={t("descriptionPlaceholder")}
              autoComplete="Off"
              name="description"
              iconClass="fa-file-lines"
              onChange={handlePetdescriptionChange}
            />
          </div>
          <div className="grid grid-cols-2 border-2 m-auto gap-10 my-10 max-sm:gap-4 mobile:my-8">
            {imagenes &&
              imagenes.map((imagen) => (
                <>
                  <img
                    className="object-cover w-40 h-40 max-sm:w-28 max-sm:h-28"
                    src={imagen}
                  />
                </>
              ))}
            <label className=" w-40 h-40 border-2 bg-gray-300 text-[3rem] border-black mobile:w-28 mobile:h-28 hover:bg-gray-500 active:bg-gray-600 cursor-pointer flex items-center justify-center">
              <input
                className="w-[0.1px] h-[0.1px] opacity-0 hidden absolute -z-10"
                type="file"
                onChange={handlePetImageChange}
              />
              +
            </label>
          </div>
        </div>
        <button
          className="w-40 border-2 bg-gray-300 font-bold p-2 rounded-lg mt-10 hover:bg-[#E1828E]"
          disabled={creating}
        >
          {t("saveChanges")}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
