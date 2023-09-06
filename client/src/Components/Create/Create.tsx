import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import { User, register, getLocation } from "../../services/users";

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
    longitud: 0,
    latitud: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setDataUser({
          ...dataUser,
          longitud: position.coords.longitude,
          latitud: position.coords.latitude,
        });
      });
    }
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
    getLocation(value).then((response) => {
      setDataUser({
        ...dataUser,
        localization: response.formatted_address,
        longitud: response.geometry.location.lng,
        latitud: response.geometry.location.lat,
      });
    });
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
    <main className="w-full">
      <div className="grid grid-cols-2 min-h-screen mobile:flex mobile:h-full mobile:justify-center  ">
        <div className="relative bg-[#E0838E] w-11/12 mobile:hidden mobile:w-0 mobile:bg-none ">
          <img
            className="absolute bottom-0 right-0 w-full"
            src="happy-dog.png"
            alt="happydog"
          />
        </div>
        <div className="flex justify-center flex-col items-center sm:w-[500px] px-10 border-2 border-black relative rounded-md mx-auto bg-[#fff] my-20">
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
              placeholder="Ciudad, Estado, Pais"
              autoComplete="Off"
              name="country"
              iconClass="fa-location-dot"
              onChange={handleLocalizationChange}
              setPermitSubmit={function (): void {}}
            />

            <div className="flex flex-row-reverse md:flex-col mx-auto my-4 gap-4 items-center">
              <button
                value="Login"
                className="bg-[#77D3EC] text-white px-4 py-2 rounded-xl"
                type="submit"
              >
                Registrarme
              </button>
              <NavLink to={"/login"}>
                <button className="bg-red-400 text-white px-4 py-2 my-4 rounded-xl">
                  <i
                    className="fa-solid fa-arrow-left mr-2"
                    style={{ color: "#fff" }}
                  ></i>
                  Atras
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
