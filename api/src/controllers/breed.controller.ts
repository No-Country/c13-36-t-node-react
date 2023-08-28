import axios from "axios";
import { type Request, type Response } from "express";
//import { type RequestBreed, RequestSpecie } from "../types/breed&specie.types"
import {BreedModel, SpecieModel } from "../models/Breed&Specie.model";
import {
    created,
    error,
    ok,
    notfound,
    badRequest
} from "../handlers/response.handler";
import { Breed } from "../types/breed&specie.types";

// [POST] create Pet
export const createBreed = async (
    { body }: Request<any, any, Breed>,
    res: Response
) => {
    try {
        const pet = await BreedModel.create({ ...body })
        return created(res, pet);

    } catch (e) {
        console.log(e);
        error(res);
    }
};

export const getBreed = async ({ params }: Request, res: Response) => {

};






// [PUT] update Pet by petId
export const updateBreed = async (
    { body, params }: Request<any, any, Breed>,
    res: Response
) => {

};



// [DELETE] delete Pet
export const deleteBreed = async (req: Request, res: Response) => {

};