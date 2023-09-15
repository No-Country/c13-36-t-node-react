import { NavLink, useNavigate } from "react-router-dom";
import InputWithLabel from "../Create/InputWithLabel";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetRequest } from "../../services/users";

const Reset = () => {
  const { t } = useTranslation("reset");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const success = await sendPasswordResetRequest(email);

      if (success) {
        // La solicitud se envió correctamente
        toast.success(t("successMessage"));
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        console.error(
          "Error al enviar la solicitud de restablecimiento de contraseña."
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <main className="w-full">
      <ToastContainer />
      <div className="grid grid-cols-2 min-h-screen mobile:flex mobile:h-full mobile:justify-center  ">
        <div className="bg-[#E0838E] w-11/12 mobile:hidden mobile:w-0 mobile:bg-none relative">
          <img
            className="absolute bottom-0 right-0 w-full"
            src="happy-dog.png"
            alt="happydog"
          />
        </div>
        <div className="flex justify-center items-center my-24 flex-col px-5 py-16 w-[500px] mobile:w-[95vw] mobile:px-2 border-2 border-[#000] relative mx-auto rounded-md">
          <div className="absolute rounded-3xl w-2/5 top-[-50px]">
            <img src={"dogConfuse.png"}></img>
          </div>
          <h1 className="text-2xl my-5 font-bold font-sans">
            {t("forgotPassword")}
          </h1>
          <form
            className="flex flex-col  my-4 text-left gap-3 w-[350px] max-md:w-[100%] mobile:w-[80vw] max-md:px-2"
            onSubmit={handleResetPassword}
          >
            <div className="flex flex-col w-[100%]">
              <InputWithLabel
                label={t("email")}
                type="email"
                placeholder={t("emailPlaceholder")}
                autoComplete="Off"
                name="emailUser"
                onChange={setEmail}
                iconClass="fa-envelope"
              />
              <div className="flex flex-row justify-between">
                <NavLink to={"/reset"} className="text-[#141414] ml-1 text-sm">
                  {t("needHelp")}
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col m-auto gap-4 mt-4">
              <button
                value="Login"
                className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
                type="submit"
              >
                {t("sendEmail")}
              </button>
            </div>
          </form>

          <NavLink to={"/login"}>
            <button className="bg-red-400 text-white px-4 py-2 rounded-xl my-2">
              <i
                className="fa-solid fa-arrow-left mr-2"
                style={{ color: "#fff" }}
              ></i>
              {t("back")}
            </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Reset;
