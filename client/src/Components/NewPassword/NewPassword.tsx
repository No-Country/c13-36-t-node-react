import { NavLink, useNavigate } from "react-router-dom";
import InputWithLabel from "../Create/InputWithLabel";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPassword } from "../../services/users";

const NewPassword = () => {
  const { t } = useTranslation("reset");
  const { userId, token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [view, setView] = useState(false);

  const handleConfirmPasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    // coincidencia de contraseñas antes de enviar la solicitud
    if (newPassword !== confirmPassword) {
      console.error("Las contraseñas no coinciden");
      setPassError(t("matchPassword"));
      return;
    }

    // Verificar si userId, token, newPassword y confirmPassword son válidos
    if (userId && token && newPassword && confirmPassword) {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
      if (!passwordRegex.test(newPassword)) {
        console.error("La contraseña no cumple con los requisitos.");
        setPassError(t("passwordError"));
        return;
      }
      try {
        const success = await resetPassword(
          userId,
          token,
          newPassword,
          confirmPassword
        );

        if (success) {
          // La contraseña se ha restablecido con éxito
          toast.success(t("passwordSuccessMessage"));
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          console.error("Error al restablecer la contraseña.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    } else {
      console.error("Alguno de los valores requeridos es undefined.");
      console.log("userId:", userId);
      console.log("token:", token);
      console.log("newPassword:", newPassword);
      console.log("confirmPassword:", confirmPassword);
    }
  };

  const viewPassword = () => {
    setView(!view);
  };

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
          <div className="absolute rounded-3xl w-2/5 top-[-50px]">
            <img src={"dogConfuse.png"}></img>
          </div>
          <h1 className="text-2xl my-5 font-bold font-sans">
            {t("newPassword")}
          </h1>
          <ToastContainer />

          <form
            className="flex flex-col  my-4 text-left gap-3 w-[350px] max-md:w-[100%] mobile:w-[80vw] max-md:px-2"
            onSubmit={handleConfirmPasswordChange}
          >
            <div className="flex flex-col w-[100%]">
              <InputWithLabel
                label={t("newPassword")}
                name="password"
                type={view ? "text" : "password"}
                placeholder={t("newPasswordPlaceholder")}
                autoComplete="Off"
                value={newPassword}
                iconClass={view ? "fa-eye" : "fa-lock"}
                onChange={setNewPassword}
                viewPassword={viewPassword}
                passError={passError}
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <InputWithLabel
                label={t("newPassword2")}
                name="password"
                type={view ? "text" : "password"}
                placeholder={t("confirmPasswordChange")}
                autoComplete="Off"
                value={confirmPassword}
                iconClass={view ? "fa-eye" : "fa-lock"}
                onChange={setConfirmPassword}
                viewPassword={viewPassword}
                passError={passError}
              />
              {passError && <p className="text-red-500">{passError}</p>}
            </div>
            <div className="flex flex-col m-auto gap-4 mt-4">
              <button
                className="bg-[#54A4A5] text-white px-4 py-2 rounded-xl"
                type="submit"
              >
                {t("sendChange")}
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

export default NewPassword;
