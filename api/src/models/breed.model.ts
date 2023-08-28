import { Schema, model } from "mongoose";
import modelOptions from "./modelOptions";
import { type Breed } from "../types/breed";

const BreedSchema = new Schema<Breed>(
  {
    breed: {
      type: String,
      required: true,
      unique: true
    },
    specieId: {
      type: Schema.Types.ObjectId,
      ref: "Specie",
      required: true
    }
  },
  modelOptions
);

const BreedModel = model("Breed", BreedSchema);
export { BreedModel };
