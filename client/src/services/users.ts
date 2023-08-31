import axios from "axios";

interface LoginResponse {
  token: string;
  user: {
    message: string;
    user: {
      firstName: string;
      lastNme: string;
      email: string;
      password: string;
      localization: string;
      phone: number;
      createdAt: string;
      updatedAt: string;
      id: string;
    };
  };
}

const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post(
    "https://thinderpet-api-ild3-dev.fl0.io/api/v1/user/login",
    {
      email,
      password,
    }
  );
  const data: LoginResponse = response.data;
  return data;
};

export default login;
