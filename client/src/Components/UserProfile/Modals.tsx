import { FaWindowClose } from "react-icons/fa";

export default function Modals({ isOpen, closeModal, handleDelete}:any) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-lg relative w-[19rem] mobile:w-3/4" >
        <FaWindowClose 
        className="absolute top-4 right-6 cursor-pointer text-2xl"
        onClick={closeModal}/>
        <h2 className="text-xl font-semibold mb-4 text-center mt-4">¿Estás seguro de eliminar tu cuenta?</h2>
        <p className="text-justify"> Si decides proceder, ten en cuenta que eliminar tu cuenta eliminará permanentemente todos tus datos y registros asociados. Esto incluye tu perfil, tus mascotas y todas tus conexiones en la plataforma.</p>
        <button className="text-white font-semibold p-2 mt-4 rounded bg-red-600 "onClick={handleDelete}>
          Eliminar Cuenta 
        </button>
      </div>
    </div>  
    )
}
