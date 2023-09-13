import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation("notfound");

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#99A3B0]">
      <h1 className="text-5xl font-bold text-slate-50 tracking-wider mb-4">
        404
      </h1>
      <h3 className="text-3xl font-bold text-slate-200 mb-4 tracking-wider">
        {t("notFoundSubtitle")}
      </h3>
      <p className="text-lg text-gray-700">{t("notFoundMessage")}</p>
      <button
        className="mt-4 px-6 py-3 bg-[#E0838E] tracking-wide text-white rounded-xl hover:bg-[#e29aa3] focus:outline-none focus:ring focus:ring-blue-300"
        onClick={() => window.history.back()}
      >
        {t("backToThinderPet")}
      </button>
    </div>
  );
};

export default NotFound;
