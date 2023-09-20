import axios from "axios";
import { Breed, Pet, PetResponse, Specie } from "../types/types";
import mascotitas from "../types/deploy.pets.json";
import { AxiosError } from "axios";

export async function createPet(
  data: Pet,
  id: string,
  token: string
): Promise<Pet> {
  const response = await axios.post(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet`,
    {
      name: data.name,
      breedId: data.breed,
      gender: data.gender,
      ownerId: id,
      description: data.description,
      age: data.age,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data;
}
export const getPet = async (
  id: string,
  token: string
): Promise<PetResponse | string> => {
  console.log(token);

  try {
    const response = await axios.get(
      `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError !== undefined) {
      if (axiosError.response?.status === 401) {
        const mascota = mascotitas.filter(
          (mascotita) => mascotita._id.$oid === id
        );
        console.log(mascota);
      }
    }
    return "hola mundo";
  }
};
export const getPets = async (
  id: string,
  token: string
): Promise<
  {
    distanceToPet: string | null;
    pet: PetResponse;
  }[]
> => {
  const response = await axios.get(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet/thinder/${id}`,
    { headers: { Authorization: `${token}` } }
  );
  return response.data.result;
};

export const getPetsByUser = async (id: string, token: string) => {
  const response = await axios.get(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet/petsfromowner/${id}`,
    { headers: { Authorization: `${token}` } }
  );
  return response.data;
};

export const getBreeds = async (
  breed: string,
  token: string
): Promise<Breed[]> => {
  const response = await axios.get(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/breed/${breed}`,
    { headers: { Authorization: `${token}` } }
  );
  return response.data;
};

export const getSpecies = async (token: string): Promise<Specie[]> => {
  try {
    const response = await axios.get(
      "https://thinderpet-api-ild3-dev.fl0.io/api/v1/specie/",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);

    return [];
  }
};
export const savePictures = async (
  id: string,
  token: string,
  file: File
): Promise<string[]> => {
  const data = new FormData();
  data.append("avatar", file);
  console.log(data);

  /* const respuesta = await axios.post(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet/upload-pet/650224e08494e46a9f7e65c0`,
    {
      data,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  ); */
  const respuesta = await fetch(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet/upload-pet/${id}`,
    { method: "POST", body: data, headers: { Authorization: `${token}` } }
  ).then((resp) => resp.json());
  return respuesta.data;
};
