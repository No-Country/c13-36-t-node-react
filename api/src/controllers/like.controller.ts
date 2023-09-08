import { error, notfound } from "../handlers/response.handler";
import PetModel from "../models/Pet.model";
import LikeModel from "../models/like.model";
import { type Request, type Response } from "express";

export const likePet = async (req: Request, res: Response) => {
    const { pet_id } = req.body; // mascota del usuario que esta dando like 
    const { pet_target_id } = req.body; // mascota ajena a la que se le da like

    try {
        // Compruebo si ya existe un registro de "like" para esta mascota y usuario
        const existingLike = await LikeModel.findOne({
            petId: pet_id,
            petTargetId: pet_target_id,
        });

        if (existingLike) {
            // Si el usuario ya dio "like," actualiza el valor de "liked" a true
            existingLike.liked = true;
            await existingLike.save();
        } else {
            // Si no existe un registro, creo uno nuevo

            const pet = await PetModel.findById(pet_id);
            if (!pet) return notfound(res);

            const target_pet = await PetModel.findById(pet_target_id);
            if (!target_pet) return notfound(res);

            await LikeModel.create({
                userId: pet.ownerId,
                petTargetId: pet_target_id,
                petId: pet_id,
                ownerPetTargetId: target_pet.ownerId,
                liked: true,
            });
        }

        // Verificar si el dueño de la mascota también le dio "like" a la mascota del usuario1
        const mutualLike = await LikeModel.findOne({
            petId: pet_target_id, // El usuario dueño de la mascota a la que se dio "like"
            petTargetId: pet_id, // La mascota del usuario1
            liked: true,
        });


        if (mutualLike) {
            // realizar acciones adicionales aquí, como notificar a los usuarios.

            res.json({ message: "Match!" });
        } else {
            res.json({ message: "Like dado con éxito." });
        }
    } catch (err) {
        console.log(err);
        return error(res);
    }
}

export const verifyMatches = async (req: Request, res: Response) => {
    const userId = req.params.userId; // Obtener el ID del usuario autenticado

    try {
        // Buscar todos los registros de "like" donde el usuario dueño de la mascota sea el actual
        const matches = await LikeModel.find({
            userId: userId, // El usuario dueño de la mascota
            liked: true,
        }).populate("petTargetId", "name");

        if (matches.length > 0) {
            // Si se encontraron coincidencias, devuelve las mascotas coincidentes
            const matchedPets = matches.map((match) => match.petTargetId);
            res.json({ message: "Mascotas con match", matchedPets });
        } else {
            // Si no se encontraron coincidencias, devuelve un mensaje
            res.json({ message: "No hay coincidencias para tus mascotas." });
        }
    } catch (err) {
        console.error(err);
        return error(res);
    }
}