import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="w-full h-screen bg-[#EEE3AD] p-4 text-black">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-1 pt-14 lg:pt-16 2xl:pt-2">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-slate-400">
            {t("title")}
          </p>
          <p className="py-6">{t("description")}</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bd576f8a-4612-4af6-982c-a11891256ab5"
            method="POST"
            className="flex flex-col w-full md:w-1/2 text-black tracking-wide"
          >
            <input
              type="text"
              name="name"
              minLength={4}
              maxLength={10}
              placeholder={t("namePlaceholder")}
              className="p-2 bg-slate-200 border-2 rounded-md focus:outline-none"
              autoComplete=""
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              className="my-4 p-2 bg-slate-200 border-2 rounded-md focus:outline-none"
              required
            />
            <textarea
              minLength={20}
              maxLength={150}
              name="message"
              rows={10}
              placeholder={t("messagePlaceholder")}
              className="p-2 bg-slate-200 border-2 rounded-md text-black focus:outline-none"
              required
            ></textarea>
            <button
              className="text-white bg-gradient-to-r from-red-400 to-red-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300"
              type="submit"
            >
              {t("submitButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
