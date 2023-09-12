import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import { User, register, getLocation } from "../../services/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function Create() {
  const { t } = useTranslation("create");
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [formError, setFormError] = useState({
    name: false,
    lastname: false,
    email: false,
    password: false,
    phone: false,
    localization: false,
    username: false,
  });
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

  const viewPassword = () => {
    setView(!view);
  };

  const handleUsernameChange = (value: string) => {
    if (value.length < 4) {
      setFormError({ ...formError, username: true });
    } else {
      setFormError({ ...formError, username: false });
      setDataUser({ ...dataUser, username: value });
    }
  };

  const handleFirstNameChange = (value: string) => {
    if (value.length < 3) {
      setFormError({ ...formError, name: true });
    } else {
      setFormError({ ...formError, name: false });
      setDataUser({ ...dataUser, firstName: value });
    }
  };
  const handleLastNameChange = (value: string) => {
    if (value.length < 4) {
      setFormError({ ...formError, lastname: true });
    } else {
      setFormError({ ...formError, lastname: false });
      setDataUser({ ...dataUser, lastName: value });
    }
  };

  const handleEmailChange = (value: string) => {
    if (!value.includes("@") || !value.includes(".") || value.length < 4) {
      setFormError({ ...formError, email: true });
    } else {
      setFormError({ ...formError, email: false });
      setDataUser({ ...dataUser, email: value });
    }
  };

  const handlePasswordChange = (value: string) => {
    if (
      !/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
        value
      )
    ) {
      console.log("error");

      setFormError({ ...formError, password: true });
    } else {
      setFormError({ ...formError, password: false });
      setDataUser({ ...dataUser, password: value });
    }
  };

  const handlePhoneChange = (value: string) => {
    // // Puedes convertir el valor a número si es necesario
    // const phone = parseInt(value, 10);
    if (value.length < 10) {
      setFormError({ ...formError, phone: true });
    } else {
      setFormError({ ...formError, phone: false });
      setDataUser({ ...dataUser, phone: value });
    }
  };

  const handleLocalizationChange = (value: string) => {
    // setDataUser({ ...dataUser, localization: { value: value } });
    getLocation(value).then((response) => {
      if (response === undefined) {
        setFormError({ ...formError, localization: true });
      } else {
        setFormError({ ...formError, localization: false });
        setDataUser({
          ...dataUser,
          localization: response.formatted_address,
          longitud: response.geometry.location.lng,
          latitud: response.geometry.location.lat,
        });
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await register(dataUser);
    if (typeof response === "string") {
      toast.error(t("registrationError"));
    } else {
      setDataUser(response);
      toast.success(t("registerSuccess"));
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  };
  return (
    <main className="w-full">
      <ToastContainer />
      <div className="grid grid-cols-2 min-h-screen mobile:flex mobile:h-full mobile:justify-center  ">
        <div className="relative bg-[#e0838eb9] w-11/12 mobile:hidden mobile:w-0 mobile:bg-none ">
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
          <h1 className="text-2xl mt-12 font-bold">{t("register")}</h1>
          <form
            className="flex flex-col items-start gap-3 w-full"
            onSubmit={handleSubmit}
          >
            <InputWithLabel
              autoComplete=""
              label={t("username")}
              type="text"
              placeholder={t("usernamePlaceholder")}
              name="username"
              iconClass="fa-user"
              onChange={handleUsernameChange}
              setPermitSubmit={function (): void {}}
              regitrationError={formError.username}
            />
            {formError.username && (
              <p className="text-red-500">{t("usernameError")}</p>
            )}
            <InputWithLabel
              label={t("firstName")}
              type="text"
              placeholder={t("firstNamePlaceholder")}
              name="firstName"
              iconClass="fa-user"
              autoComplete=""
              onChange={handleFirstNameChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
              regitrationError={formError.name}
            />
            {formError.name && <p className="text-red-500">{t("nameError")}</p>}
            <InputWithLabel
              autoComplete=""
              label={t("lastName")}
              type="text"
              placeholder={t("lastNamePlaceholder")}
              name="lastName"
              iconClass="fa-user"
              onChange={handleLastNameChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
              regitrationError={formError.lastname}
            />
            {formError.lastname && (
              <p className="text-red-500">{t("lastNameError")}</p>
            )}
            <InputWithLabel
              label={t("email")}
              type="email"
              placeholder={t("emailPlaceholder")}
              autoComplete="Off"
              name="email"
              iconClass="fa-envelope"
              onChange={handleEmailChange}
              setPermitSubmit={function (): void {
                throw new Error("Function not implemented.");
              }}
              regitrationError={formError.email}
            />
            {formError.email && (
              <p className="text-red-500">{t("emailError")}</p>
            )}
            <InputWithLabel
              label={t("password")}
              type={view ? "text" : "password"}
              placeholder="•••••••••"
              autoComplete="Off"
              name="password"
              iconClass={view ? "fa-eye" : "fa-lock"}
              viewPassword={viewPassword}
              onChange={handlePasswordChange}
              setPermitSubmit={function (): void {}}
              regitrationError={formError.password}
            />
            {formError.password && (
              <p className="text-red-500">{t("passwordError")}</p>
            )}
            <InputWithLabel
              label={t("phone")}
              type="text"
              placeholder="1161914321"
              autoComplete="Off"
              name="phone"
              iconClass="fa-phone"
              onChange={handlePhoneChange}
              setPermitSubmit={function (): void {}}
              regitrationError={formError.phone}
            />
            {formError.phone && (
              <p className="text-red-500">{t("phoneError")}</p>
            )}
            <InputWithLabel
              label={t("localization")}
              type="text"
              placeholder={t("localizationPlaceholder")}
              autoComplete="Off"
              name="country"
              iconClass="fa-location-dot"
              onChange={handleLocalizationChange}
              setPermitSubmit={function (): void {}}
              regitrationError={formError.localization}
            />
            {formError.localization && (
              <p className="text-red-500">{t("locationError")}</p>
            )}
            <div className="flex flex-row-reverse md:flex-col mx-auto my-4 gap-4 items-center">
              <button
                value="Login"
                className="bg-[#77D3EC] text-white px-4 py-2 rounded-xl"
                type="submit"
                disabled={
                  formError.username ||
                  formError.email ||
                  formError.password ||
                  formError.phone ||
                  formError.name ||
                  formError.lastname ||
                  formError.localization
                }
              >
                {t("register")}
              </button>

              <NavLink to={"/login"}>
                <button className="bg-[#e0838e] hover:bg-[#e0838eb9] text-white px-4 py-2 my-4 rounded-xl">
                  <i
                    className="fa-solid fa-arrow-left mr-2"
                    style={{ color: "#fff" }}
                  ></i>
                  {t("back")}
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
