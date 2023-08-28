import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="Logo.svg" alt="" className="mt-4" width={150} />
      <h1 className="font-bold text-5xl my-4">ThinderPet</h1>
      <div className="flex flex-row mt-10">
        <NavLink
          to={"/login"}
          className="bg-[#54A4A5] text-[#fff] py-2 px-5 rounded-lg"
        >
          <span className="flex flex-row text-xl">
            Ingresar{" "}
            <img
              src="Pawprint.png"
              alt=""
              width={30}
              className="ml-2 bg-[#fff] rounded-full p-1"
            />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
