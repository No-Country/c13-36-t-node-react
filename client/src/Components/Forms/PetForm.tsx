import Avatar from "../Avatar/Avatar";
import InputWithLabel from "../Create/InputWithLabel";

const PetForm = () => {
  return (
    <div className="flex justify-center content-center  pb-2">
      <form action="">
        <h1 className="font-bold text-4xl my-2">Perfil de Shaby</h1>
        <div className="grid grid-cols-2 gap-x-60 max-md:flex flex-col gap-2 px-4">
          <div className="max-md:w-[100%] flex flex-col">
            <Avatar size={"large"} />
            <InputWithLabel 
              label="Nombre" 
              type="text"
              placeholder="Shaby"
              name="nameDog"
              iconClass="fa-dog"
              />
            <InputWithLabel
              label="Edad"
              type="number"
              placeholder="4"
              name="petAge"
              iconClass="fa-calendar"
            />
            <InputWithLabel 
              label="Raza"
              type="text"
              placeholder="Caniche"
              name="petBreed"
              iconClass="fa-paw"
            />
            <InputWithLabel 
              label="Género"
              type="text"
              placeholder="M"
              name="genderPet"
              iconClass="fa-venus-mars"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-16 max-md: grid grid-rows-2 grid-flow-col gap-10 mt-4">
            <img className="w-48 h-48 max-md:w-full " src="perrito1.jpg" />
            <img className="w-48 h-48 max-md:w-full" src="perrito2.jpg" />
            <img className="w-48 h-48 max-md:w-full" src="perrito3.jpg" />
            <button className="bg-[#D9D9D9] text-white font-extrabold text-9xl transition-transform relative overflow-hidden max-md:w-full">+
            </button>
          </div>
        </div>
        <button className="w-40 border-2 bg-gray-300 font-bold p-2 rounded-lg mt-4">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default PetForm;