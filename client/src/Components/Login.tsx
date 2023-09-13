import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import InputWithLabel from "./Create/InputWithLabel";
import { login } from "../services/users";
import { Usuario } from "../types/types";
import { useTranslation } from "react-i18next";

interface LoginProps {
  // setFormulario: (usuario: boolean) => void;
  setusuario: (usuario: Usuario) => void;
}

const Login: React.FC<LoginProps> = ({ setusuario }) => {
  const { t } = useTranslation("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [permitSubmit, setPermitSubmit] = useState(false);
  const [mailError, setMailError] = useState("");
  const [passError, setPassError] = useState("");
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (permitSubmit) {
      setLoading(true);
      const response = await login(email, password);
      if (typeof response === "string") {
        console.log(response);
        setMailError("");
        setPassError("");
        if (response === "User not found.") {
          setMailError(t("userNotFound"));
        } else {
          setPassError(t("incorrectPassword"));
        }
      } else {
        setusuario(response);
      }
    }
    setLoading(false);
  };

  const viewPassword = () => {
    setView(!view);
  };
  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setPermitSubmit(true);
    } else {
      setPermitSubmit(false);
    }
  }, [email, password]);
  return (
    <main className="w-full">
      <div className="grid grid-cols-2 min-h-screen mobile:flex mobile:h-full mobile:justify-center  ">
        <div className="bg-[#E0838E] w-11/12 mobile:hidden mobile:w-0 mobile:bg-none relative">
          <img
            className="absolute bottom-0 right-0 w-full"
            src="happy-dog.png"
            alt="happydog"
          />
        </div>
        <div className="flex justify-center items-center my-24 flex-col px-5 py-16 w-[500px] mobile:w-[95vw] mobile:px-2 border-2 border-[#000] relative mx-auto rounded-md">
          <img
            src={"avatar.png"}
            className="absolute w-24 top-[-50px] border-2 rounded-full"
          ></img>
          <h1 className="text-2xl mt-12 font-bold">{t("welcome")}</h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col  my-4 text-left gap-3 w-[350px] max-md:w-[100%] mobile:w-[80vw] max-md:px-2"
          >
            <InputWithLabel
              label={t("emailLabel")}
              type="email"
              placeholder={t("emailPlaceholder")}
              autoComplete="Off"
              name="emailUser"
              iconClass="fa-envelope"
              onChange={setEmail}
              mailError={mailError}
            />
            {mailError && <p className="text-red-500">{mailError}</p>}
            <InputWithLabel
              label={t("passwordLabel")}
              type={view ? "text" : "password"}
              placeholder="•••••••••"
              autoComplete="Off"
              name="password"
              iconClass={view ? "fa-eye" : "fa-lock"}
              viewPassword={viewPassword}
              onChange={setPassword}
              passError={passError}
            />
            {passError && <p className="text-red-500">{passError}</p>}
            <button
              value="Login"
              className="bg-[#54A4A5] w-40 text-white px-4 py-2 rounded-xl m-auto"
              disabled={loading || !permitSubmit ? true : false}
            >
              {loading ? (
                <i className="fa-solid fa-spinner rotate-center"></i>
              ) : (
                t("login")
              )}
            </button>
          </form>
          <NavLink
            to={"/reset-password"}
            className="font-semibold text-sm hover:underline-offset-1 my-2"
          >
            {t("forgotPassword")}
          </NavLink>
          <div className="flex flex-col m-auto gap-4">
            <NavLink to={"/"}>
              <button className="bg-red-400 text-white px-4 py-2 rounded-xl ">
                <i
                  className="fa-solid fa-arrow-left mr-2"
                  style={{ color: "#fff" }}
                ></i>
                {t("backButton")}
              </button>
            </NavLink>
          </div>
          <NavLink to={"/create"} className="my-2">
            <p className="border-b-2 border-gray-300 my-2">
              {t("registerLink")}
            </p>
          </NavLink>
          <div className="flex justify-center gap-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
