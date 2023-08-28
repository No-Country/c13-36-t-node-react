import { type ObjectId } from "mongoose";

/* MODELS TYPES */
export interface Breed {
    name: string;   
    ownerId: ObjectId;    
}


