import axios, { AxiosResponse } from "axios";
// import { Usuario } from "../types/types";

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

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  localization: string;
}

interface ApiResponse {
  status: number;
  data: User;
}

export async function register(data: User): Promise<User> {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      "https://thinderpet-api-ild3-dev.fl0.io/api/v1/user/register",
      {
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        localization: data.localization,
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ4YjM0OGUyMDQ1NjgzNGEwMjU5MDNiIiwiaWF0IjoxNjkyOTg4NzI2LCJleHAiOjE2OTM1MDcxMjZ9.uJ2uhszxtTF9yBmnhKGHZA88M7pwgp6buUbrtv5TTVE",
        },
      }
    );
    console.log(response);
    if (response.status === 201) {
      // El usuario se creó correctamente
      return response.data.data; // Devuelve los datos
    } else {
      // Se produjo un error al crear el usuario
      console.log(Error);
      throw new Error(response.statusText);
    }
  } catch (error) {
    if (error instanceof Error) {
      // Manejar el error como una instancia
      throw new Error(`Error en la solicitud: ${error.message}`);
    } else {
      // Manejar otros tipos de errores
      throw new Error(`Error en la solicitud: ${error}`);
    }
  }
}
