export type Usuario = {
  message: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    localization: string;
    phone: number;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
};

export type UsuarioRegistro = {
  username: "string";
  firstName: "string";
  lastName: "string";
  password: "string";
  email: "string";
  localization: "string";
  latitud: number;
  longitud: number;
  phone: "string";
};

export type PetResponse = {
  name: string;
  gender: string;
  breedId: string;
  ownerId: string;
  age: number;
  description: string;
};

export type Pet = {
  name: string;
  gender: string;
  age: string;
  description: string;
  breed: string;
};

export type RegistersErrors = {
  name: boolean;
  lastname: boolean;
  email: boolean;
  password: boolean;
  phone: boolean;
  localization: boolean;
  username: boolean;
};
export type Breed = {
  _id: object;
  breed: string;
};
