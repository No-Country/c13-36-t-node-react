import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="Logo.svg" alt="" className="mt-40" width={150} />
      <h1 className="font-bold text-5xl mt-16 mb-20">ThinderPet</h1>
      <div className="flex flex-row mt-24">
        <NavLink
          to={"/login"}
          className="bg-[#6C6B6B] text-[#D9D9D9] py-2 px-5 rounded-lg"
        >
          <span className="flex flex-row text-xl">
            Ingresar{" "}
            <img
              src="Pawprint.png"
              alt=""
              width={30}
              className="ml-2 bg-[#D9D9D9] rounded-full p-1"
            />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
