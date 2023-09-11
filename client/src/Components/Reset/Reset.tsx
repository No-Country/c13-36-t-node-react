import { NavLink } from "react-router-dom";
import InputWithLabel from "../Create/InputWithLabel";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Reset = () => {
  const { t } = useTranslation("reset");
  const [email, setEmail] = useState("");

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="h-screen flex justify-center content-center items-center px-6 py-4">
      <main className="flex justify-center items-center flex-col py-6 px-8 border-2 w-auto border-black relative rounded-md bg-[#fff]">
        <img src={"dogConfuse.png"} className="w-2/5"></img>
        <h1 className="text-2xl my-5 font-bold font-sans">
          {t("forgotPassword")}
        </h1>
        <form
          className="flex flex-col items-center gap-2"
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
              <NavLink to={"/reset"} className="text-[#979797] text-sm mr-5">
                {t("chooseAnotherMethod")}
              </NavLink>
              <NavLink to={"/reset"} className="text-[#141414] text-sm">
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
      </main>
    </div>
  );
};

export default Reset;
