/// <reference path="../types/custom.d.ts" />
import axios from "axios";
import { type Request, type Response } from "express";
import { type PetRequest } from "../types/pet.types";
import PetModel from "../models/Pet.model";
import {
  created,
  error,
  ok,
  notfound,
  badRequest,
} from "../handlers/response.handler";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

// [POST] create Pet
export const createPet = async (
  { body }: Request<any, any, PetRequest>,
  res: Response
) => {
  try {
    const pet = await PetModel.create({ ...body });
    return created(res, pet);
  } catch (e) {
    console.log(e);
    error(res);
  }
};

// [PUT] update Pet by petId
export const updatePet = async (
  { body, params }: Request<any, any, PetRequest>,
  res: Response
) => {
  try {
    const petId = params.petId;

    const updatedPet = await PetModel.findByIdAndUpdate(petId, body, {
      new: true,
    }).populate({
      path: "breedId",
      select: ["breed", "specieId"],
      populate: {
        path: "specieId",
        select: ["-createdAt", "-updatedAt"],
      },
    });

    return ok(res, updatedPet);
  } catch (e) {
    console.log(e);
    error(res);
  }
};

export const getPet = async ({ params }: Request, res: Response) => {
  try {
    const pet = await PetModel.findById(params.petId)
      .select(["-createdAt", "-updatedAt"])
      .populate({
        path: "breedId",
        select: ["-createdAt", "-updatedAt"],
        populate: {
          path: "specieId",
          select: ["-createdAt", "-updatedAt"],
        },
      })
      .populate({
        path: "ownerId",
        select: ["-createdAt", "-updatedAt", "-password", "-salt"],
      });

    if (!pet) return badRequest(res, "Pet not exist");

    return ok(res, pet);
  } catch (e) {
    console.log(e);
    error(res);
  }
};

export const deletePet = async (req: Request, res: Response) => {
  try {
    const petId = req.params.petId;

    const pet = await PetModel.findById(petId);
    if (!pet) return badRequest(res, `Pet not exist`);

    if (pet.image && pet.image.public_id) {
      await deleteImage(pet.image.public_id);
    }

    const deletedPet = await PetModel.findByIdAndDelete(petId);

    return ok(res, {
      message: "Pet was deleted successfully",
      deletedPet,
    });
  } catch (e) {
    console.log(e);
    error(res);
  }
};

export const uploadImages = async (req: Request, res: Response) => {
  try {
    const petId = req.params.petId;

    const pet = await PetModel.findById(petId);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found." });
    }

    if (!req.file) {
      return res
        .status(404)
        .json({ message: "No se proporcionó ninguna imagen." });
    }

    // Sube la imagen a Cloudinary y obtén la URL y otros datos relevantes
    const result = await await uploadImage(req.file.path);

    const imageUrl = result.secure_url;
    const publicId = result.public_id;

    await fs.unlink(req.file.path);

    // Actualiza el campo 'image' del usuario en la base de datos con la URL de la imagen y otros datos relevantes
    await PetModel.findByIdAndUpdate(petId, {
      "image.secure_url": imageUrl,
      "image.public_id": publicId,
    });

    return res.status(200).json({ secure_url: imageUrl, public_id: publicId });
  } catch (error) {
    console.error("Error durante la subida de la imagen:", error);
    res.status(500).json({ message: "Error del servidor." });
  }
};
