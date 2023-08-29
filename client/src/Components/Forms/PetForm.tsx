import Avatar from "../Avatar/Avatar";

const PetForm = () => {
  return (
    <div className="flex justify-center content-center">
      <form action="">
        <h1 className="font-bold text-4xl mb-5 mt-5">Perfil de Shaby</h1>
        <div className="grid grid-cols-2 max-md:flex flex-col gap-2">
          <div className="max-md:w-[100%] flex flex-col">
            <Avatar size={"large"} />
            <div className="flex flex-col items-start mb-4 mt-8 ">
              <span className="font-semibold mb-2">Nombre</span>
              <input
                className="bg-[#D9D9D9] rounded-lg px-14 py-3 max-md:w-[100%] "
                type="text"
                placeholder="Shaby"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <span className="font-semibold mb-2">Edad</span>
              <input
                className="bg-[#D9D9D9] rounded-lg px-14 py-3 max-md:w-[100%] "
                type="text"
                placeholder="4"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <span className="font-semibold mb-2">Raza</span>
              <input
                className="bg-[#D9D9D9] rounded-lg px-14 py-3 max-md:w-[100%] "
                type="text"
                placeholder="Caniche"
              />
            </div>
            <div className="flex flex-col items-start mb-6 max-md:w-[100%] ">
              <span className="font-semibold mb-2">Género</span>
              <input
                className="bg-[#D9D9D9] rounded-lg px-14 py-3 max-md:w-[100%] "
                type="text"
                placeholder="M"
              />
              <button className="bg-[#D9D9D9] font-semibold rounded-lg px-14 py-3 mt-6 border-[#918F8F]">
                Guardar Cambios
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-16 max-md: grid grid-rows-2 grid-flow-col gap-4 mt-0">
            <img className="max-md:w-2/4 " src="perrito1.jpg" />
            <img className="max-md:w-2/4" src="perrito2.jpg" />
            <img className="max-md:w-2/4" src="perrito3.jpg" />
            <button className="bg-[#D9D9D9] text-white font-extrabold text-9xl transition-transform relative overflow-hidden max-md:w-2/4">
              <span className="hover:scale-105 transform transition-transform duration-300 absolute inset-0 flex items-center justify-center">
                +
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PetForm;
