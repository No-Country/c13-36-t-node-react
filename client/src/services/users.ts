import axios from "axios";

interface LoginResponse {
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
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | string> => {
  const response = await axios
    .post("https://thinderpet-api-ild3-dev.fl0.io/api/v1/user/login", {
      email,
      password,
    })
    .catch((error) => {
      const mensaje = error.response.data.message;
      return mensaje;
    });
  if (typeof response === "string") {
    return response;
  }
  const data: LoginResponse = response.data;
  localStorage.setItem("token", JSON.stringify(data));
  return data;
};
export interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  localization: string;
  latitud: number;
  longitud: number;
}

export async function register(data: User): Promise<User | string> {
  const response = await axios
    .post(
      "https://thinderpet-api-ild3-dev.fl0.io/api/v1/user/register",
      {
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        localization: data.localization,
        latitud: data.latitud,
        longitud: data.longitud,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ4YjM0OGUyMDQ1NjgzNGEwMjU5MDNiIiwiaWF0IjoxNjkyOTg4NzI2LCJleHAiOjE2OTM1MDcxMjZ9.uJ2uhszxtTF9yBmnhKGHZA88M7pwgp6buUbrtv5TTVE`,
        },
      }
    )
    .catch((error) => {
      console.log(error.response.data.errors[0].msg);

      return error.response.data.errors[0].msg;
    });
  if (typeof response === "string") {
    return response;
  }
  return response.data;
}

export async function getLocation(ubicacion: string) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${ubicacion}&key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return response.data.results[0];
}
