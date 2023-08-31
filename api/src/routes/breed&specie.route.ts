import { Router } from "express";
import { body, param } from "express-validator";
import validate from "../handlers/request.handler";
import { auth } from "../helpers/token";
import PetModel from "../models/Pet.model";
import { BreedModel, SpecieModel } from "../models/Breed&Specie.model";
import {
    createBreed,
    deletePet,
    getPet,
    updatePet
} from "../controllers/breed.controller";
import UserModel from "../models/User.model";
import {   
    nameValidation
} from "../helpers/PetValidator";

const router = Router();

router.post(
    "/",
    [
        auth,

        ...nameValidation(false),

        body("specieId")
            .exists()
            .withMessage("specieId is required")
            .isLength({ min: 16 })
            .withMessage("specieId minimun 16 characters")
            .custom(async (value) => {
                const specie = await SpecieModel.findById(value);
                if (!specie) throw new Error("specieId doesn't exist");
                return false;
            }), 
      
        validate
    ],
    createBreed
);