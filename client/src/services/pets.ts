import axios from "axios";
import { Pet } from "../types/types";
import { User } from "./users";

export async function createPet(data: Pet, user: User): Promise<Pet> {
  const response = await axios.post(
    `https://thinderpet-api-ild3-dev.fl0.io/api/v1/pet`,
    {
      name: data.name,
      breedId: data.breed,
      gender: data.gender,
      ownerId: user.id,
      desciption: data.description,
      age: data.age,
    }
  );
  return response.data;
}
