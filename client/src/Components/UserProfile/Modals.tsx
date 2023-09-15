import { useTranslation } from "react-i18next";
import { FaWindowClose } from "react-icons/fa";

interface ModalsProps {
  isOpen: boolean;
  closeModal: () => void;
  handleDelete: () => void;
}

const Modals: React.FC<ModalsProps> = ({
  isOpen,
  closeModal,
  handleDelete,
}) => {
  const { t } = useTranslation("modals");
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-lg relative w-[19rem] mobile:w-3/4">
        <FaWindowClose
          className="absolute top-4 right-6 cursor-pointer text-2xl"
          onClick={closeModal}
        />
        <h2 className="text-xl font-semibold mb-4 text-center mt-4">
          {t("modal_confirm_delete_account")}
        </h2>
        <p className="text-justify"> {t("modal_delete_account_warning")}</p>
        <button
          className="text-white font-semibold p-2 mt-4 rounded bg-red-600 "
          onClick={handleDelete}
        >
          {t("modal_delete_account_button")}
        </button>
      </div>
    </div>
  );
};

export default Modals;
