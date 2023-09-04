// import { NavLink } from "react-router-dom";
// import InputWithLabel from "../Create/InputWithLabel";

// export default function Profile() {
//   return (
//     <div className="flex justify-between gap-x-60">
//       <section className="bg-[#F79FBE] w-80 p-8 rounded-lg text-left">
//         <div className="mb-8">
//           <h1 className="font-bold text-2xl my-2">Mi perfil</h1>
//           <img src={"Vector.png"}></img>
//           <p>Editar foto</p>
//         </div>
//         <InputWithLabel
//           label="Nombre"
//           type="text"
//           placeholder="Martin"
//           name="userName"
//           iconClass="fa-user"
//         />
//         <InputWithLabel
//           label="Correo electrónico"
//           type="email"
//           placeholder="jonhDoe@gmail.com"
//           name="userMail"
//           iconClass="fa-envelope"
//         />
//         <InputWithLabel
//           label="Telefono"
//           type="number"
//           placeholder="116192342"
//           name="userPhone"
//           iconClass="fa-phone"
//         />
//       </section>
//       <section>
//         <div className="w-60">
//           <h1 className="font-bold text-xl my-2">Mis mascotas</h1>
//           <p className="font-bold text-sm">
//             Para poder continuar ingrese el perfil de su mascota
//           </p>
//           <NavLink to={"/mascotas"}>
//             <button className="bg-[#F65E7E] font-bold p-2 rounded-lg hover:scale-105 hover:ease-in duration-300">
//               Agregar nueva mascota
//             </button>
//           </NavLink>
//         </div>
//         <button
//           disabled
//           className="bg-[#F65E7E] mt-20 font-bold p-2 rounded-lg cursor-not-allowed	"
//         >
//           Buscar Mascotas
//         </button>
//       </section>
//     </div>
//   );
// }
