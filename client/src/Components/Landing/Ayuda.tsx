import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

const data = [
{
    titulo: "¿De qué trata ThinderPet?",
    descripcion: "Facilitamos la selección de padres adecuados, e instamos a los usuarios a proporcionar información sobre las posibles enfermedades o rasgos de carácter que la futura mascota podría heredar. Estamos comprometidos a hacer que la experiencia sea lo más transparente y satisfactoria para todos nuestros usuarios."
},
{
    titulo: "¿Qué fotos debería usar para mi mascota en ThinderPet?",
    descripcion: "Comparte las fotos más adorables de tu mascota en ThinderPet, donde todos pueden apreciar a esa mascota que todos desean ver."
},
{
    titulo: "¿Cómo funciona ThinderPet?",
    descripcion: "ThinderPet te permite conectar con otras mascotas cercanas utilizando una tecnología basada en la ubicación, y puedes ajustar tus filtros según el género y la distancia que desees."
},
{
    titulo: "¿Qué debería poner en la biografía de mi mascota?",
    descripcion: "La biografía es una ventana que muestra la personalidad de tu mascota. Si la escritura no es lo tuyo, simplemente crea una lista de las cosas que más te gustan de tu fiel compañero."
},
{
    titulo: "Tengo más preguntas: ¿qué hago?",
    descripcion: "No dudes en ponerte en contacto con nosotros directamente a través del correo electrónico ThinderPet@gmail.com. Estamos aquí para ayudarte con cualquier pregunta o comentario que tengas."
}
];
export default function Ayuda() {
  return (
    <section className='px-6' id='ayuda'>
		<h1 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl my-10 mobile:my-4">Ayuda</h1>
		<Accordion className="w-3/4 m-auto text-left my-4 mobile:w-full">
			{data.map((item, index) => (
				<AccordionItem className="border-2 p-4 rounded-lg mt-4" key={index}>
				<AccordionItemHeading>
						<AccordionItemButton className="font-bold font-sans flex items-center">
						{item.titulo}
						</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
						<p className="mt-4">{item.descripcion}</p>
				</AccordionItemPanel>
				</AccordionItem>
			))}
		</Accordion>
    </section>

  )
}
