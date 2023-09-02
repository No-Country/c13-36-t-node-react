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
  const response = await axios.post(
    "https://thinderpet-api-ild3-dev.fl0.io/api/v1/user/login",
    {
      email,
      password,
    }
  );
  console.log(response);

  const data: LoginResponse = response.data;
  /* if (email === "juampisaluzzo@hotmail.com" && password === "jilaDasd345@") {
    const data: Usuario = {
      message: "Successful login.",
      user: {
        firstName: "jirho",
        lastName: "sq",
        email: "juampisaluzzo@hotmail.com",
        password:
          "$2b$12$jEuKAnjUjoRMGwEdHid/y.fRPtrC0XKERwTxMndk9qbUaw6B3hhle",
        localization: "parana",
        phone: 3435009760,
        createdAt: "2023-08-31T02:32:06.935Z",
        updatedAt: "2023-08-31T02:32:06.935Z",
        id: "64effba607c6bda8d1f877a7",
      },
    };
    localStorage.setItem("token", JSON.stringify(data));
    return data;
  } else {
    return "Datos erroneos";
  } */
  localStorage.setItem("token", JSON.stringify(data));
  return data;
};

export default login;
