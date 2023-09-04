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
  phone: "string";
};

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};
