import { useState } from "react";
import { NavLink } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import { register } from "../../services/users";

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  localization: string;
}

export default function Create() {
  const [view, setView] = useState(false);
  const [dataUser, setDataUser] = useState<User>({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    localization: "",
  });

  const viewPassword = () => {
    setView(!view);
  };

  const handleUsernameChange = (value: string) => {
    setDataUser({ ...dataUser, username: value });
  };

  const handleFirstNameChange = (value: string) => {
    setDataUser({ ...dataUser, firstName: value });
  };
  const handleLastNameChange = (value: string) => {
    setDataUser({ ...dataUser, lastName: value });
  };

  const handleEmailChange = (value: string) => {
    setDataUser({ ...dataUser, email: value });
  };

  const handlePasswordChange = (value: string) => {
    setDataUser({ ...dataUser, password: value });
  };

  const handlePhoneChange = (value: string) => {
    // // Puedes convertir el valor a número si es necesario
    // const phone = parseInt(value, 10);
    setDataUser({ ...dataUser, phone: value });
  };

  const handleLocalizationChange = (value: string) => {
    // setDataUser({ ...dataUser, localization: { value: value } });
    setDataUser({ ...dataUser, localization: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await register(dataUser);
    if (typeof response === "string") {
      alert("datos erroneos");
    } else {
      setDataUser(response);
    }
  };
  return (
    <main className="flex justify-start flex-col items-center w-[500px] border-2 border-black relative rounded-md max-md:w-[100%] bg-[#fff] mt-10">
      <img
        src={"avatar.png"}
        className="absolute w-24 top-[-50px] border-2 rounded-full"
      ></img>
      <h1 className="text-2xl mt-12 font-bold">Registrarme</h1>
      <form
        className="flex flex-col items-start gap-3 w-full"
        onSubmit={handleSubmit}
      >
        <InputWithLabel
          autoComplete=""
          label="Nombre de Usuario"
          type="text"
          placeholder="nombreDeUsuario"
          name="username"
          iconClass="fa-user"
          onChange={handleUsernameChange}
          setPermitSubmit={function (): void {}}
        />
        <InputWithLabel
          label="Nombre"
          type="text"
          placeholder="John"
          name="firstName"
          iconClass="fa-user"
          autoComplete=""
          onChange={handleFirstNameChange}
          setPermitSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <InputWithLabel
          autoComplete=""
          label="Apellido"
          type="text"
          placeholder="Doe"
          name="lastName"
          iconClass="fa-user"
          onChange={handleLastNameChange}
          setPermitSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <InputWithLabel
          label="Correo electrónico"
          type="email"
          placeholder="user123@thinderpet.com"
          autoComplete="Off"
          name="email"
          iconClass="fa-envelope"
          onChange={handleEmailChange}
          setPermitSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <InputWithLabel
          label="Contraseña"
          type={view ? "text" : "password"}
          placeholder="•••••••••"
          autoComplete="Off"
          name="password"
          iconClass={view ? "fa-eye" : "fa-lock"}
          viewPassword={viewPassword}
          onChange={handlePasswordChange}
          setPermitSubmit={function (): void {}}
        />
        <InputWithLabel
          label="Telefono"
          type="text"
          placeholder="1161914321"
          autoComplete="Off"
          name="phone"
          iconClass="fa-phone"
          onChange={handlePhoneChange}
          setPermitSubmit={function (): void {}}
        />
        <InputWithLabel
          label="Donde Vives"
          type="text"
          placeholder="Argentina"
          autoComplete="Off"
          name="country"
          iconClass="fa-location-dot"
          onChange={handleLocalizationChange}
          setPermitSubmit={function (): void {}}
        />

        <div className="flex flex-col m-auto gap-4">
          <button
            value="Login"
            className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
            type="submit"
          >
            Registrarme
          </button>
          <NavLink to={"/login"}>
            <button className="bg-red-400 text-white px-4 py-2 mb-4 rounded-xl">
              <i
                className="fa-solid fa-arrow-left mr-2"
                style={{ color: "#fff" }}
              ></i>
              Atras
            </button>
          </NavLink>
        </div>
      </form>
    </main>
  );
}
