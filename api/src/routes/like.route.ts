import { Router } from "express";
import LikeModel from "../models/like.model";
import { body } from "express-validator";
import { auth } from "../helpers/token";
import { likePet, verifyMatches } from "../controllers/like.controller";
import PetModel from "../models/Pet.model";
import { verify } from "jsonwebtoken";

const router = Router()

router.post("/like",
    [
        auth,

        body("petId")
            .notEmpty()
            .withMessage("pet owner id is required")
            .custom(async (petId) => {
                const pet = await PetModel.findById(petId);
                if (!pet) throw new Error("owner's pet doesn't exist");
                return false;
            }),

        body("pet_target_id")
            .notEmpty().
            withMessage("pet target id required")
            .custom(async (pet_target_id) => {
                const pet = await PetModel.findById(pet_target_id);
                if (!pet) throw new Error("target pet doesn't exist");
                return false;
            })

    ], likePet);

router.get("/verifymatch/:userId",
    [
        auth


    ], verifyMatches)

export { router }