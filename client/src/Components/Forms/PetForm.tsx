import Avatar from "../Avatar/Avatar";
import InputWithLabel from "../Create/InputWithLabel";

const PetForm = () => {
  return (
    <section className="border-2 border-black w-full px-36 max-lg:px-20 max-md:px-4">
      <h1 className="font-bold text-2xl my-2">Perfil de Shaby</h1>
      <form action="" className="border-2 p-4 border-black gap-x-20 grid grid-cols-2 max-md:grid-cols-1">
        <div className="flex flex-col max-md:w-[100%]">
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
        <div className="grid grid-cols-2 m-auto gap-10 my-8 max-sm:gap-4">
          <img className="w-40 h-40 max-sm:w-28 max-sm:h-28" src="perrito1.jpg" />
          <img className="w-40 h-40 max-sm:w-28 max-sm:h-28" src="perrito2.jpg" />
          <img className="w-40 h-40 max-sm:w-28 max-sm:h-28" src="perrito3.jpg" />
          <button className=" min-h-40 min-h-40 border-2 bg-gray-300 text-[3rem] max-sm:min-w-28 max-sm:min-h-28 flex items-center justify-center">+</button>
        </div>
        <button type="submit" className="w-40 border-2 m-auto bg-gray-300 font-bold p-2 rounded-lg mt-10 max-md:mt-2">Guardar Cambios</button>
      </form>
    </section>
  );
};

export default PetForm;