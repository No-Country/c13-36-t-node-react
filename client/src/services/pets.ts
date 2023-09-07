import axios from "axios";
import { Pet, PetResponse } from "../types/types";

export async function createPet(data: Pet, id: string): Promise<Pet> {
  const response = await axios.post(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet`,
    {
      name: data.name,
      breedId: data.breed,
      gender: data.gender,
      ownerId: id,
      desciption: data.description,
      age: data.age,
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
