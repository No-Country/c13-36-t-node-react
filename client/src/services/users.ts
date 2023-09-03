import axios from "axios";
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

const login = async (
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

export default login;
