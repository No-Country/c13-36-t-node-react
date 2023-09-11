import axios from "axios";
import { Breed, Pet, PetResponse } from "../types/types";

export async function createPet(
  data: Pet,
  id: string,
  token: string
): Promise<Pet> {
  const response = await axios.post(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet`,
    {
      name: data.name,
      breedId: "64f78545dab0467f1b798e9e",
      gender: data.gender,
      ownerId: id,
      desciption: data.description,
      age: parseInt(data.age),
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data;
}
export const getPets = async (id: string): Promise<PetResponse[] | string> => {
  const response = await axios.get(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet/${id}`
  );
  console.log(response);
  return response.data;
};

export const getBreeds = async (): Promise<Breed[]> => {
  const response = [
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
  ];
  return response;
};
