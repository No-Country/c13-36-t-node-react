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
  breedId: {
    breed: string;
    specieId: {
      specie: string;
      id: string;
    };
    id: string;
  };
  ownerId: {
    firstName: string;
    lastName: string;
    email: string;
    localization: string;
    phone: number;
    username: string;
    id: string;
  };
  age: number;
  image: Array<string>;
  id: string;
};

export type Pet = {
  id?: string;
  name: string;
  gender: string;
  age: number;
  description: string;
  breed: string;
  image?: Array<string>;
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
  breed: string;
  specieId: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
export type Specie = {
  specie: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};
