import {useState} from 'react'

export default function BtnSilder() {
  const [matchDogs, setMatchDogs] = useState(false)

  const handleMatch = () =>{
    setMatchDogs(!matchDogs)
  }

  return (
    <>
    {matchDogs ?     
    <section className="">
      <img src={"congrats.png"} onClick={handleMatch} className='absolute top-0	left-0 w-full z-2 h-screen z-50' />
      <div className='p-10 rounded-2xl	 w-96 h-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 absolute z-50 m-auto'>
        <div className="px-10 mb-8 flex place-content-around">
          <img src={"perrito1.jpg"} className='w-20 rounded-full'/>
          <img src={"perrito2.jpg"} className='w-20 rounded-full'/>
        </div>
        <h1 className='uppercase font-bold'>Pet Match</h1>
        <p className='font-bold my-8'>Ponte en contacto con el dueño de la mascota para concretar su cita </p>
        <a href="https://web.whatsapp.com/" target='_blank'>
          <img src={"Contact.png"} className='m-auto hover:cursor-pointer'/>
          </a>
      </div>
    </section>
    :""}
    <figcaption className="w-[736px] m-auto px-28 flex place-content-between items-center ">
      <button className="bg-gray-300 rounded-full	p-3">
        <img src="Bones.png" ></img>
      </button>
      <button className="bg-gray-300 rounded-full	p-3" onClick={handleMatch}>
        <img src="Pawprint.png"></img>
      </button>
      <button className="bg-gray-300 rounded-full	p-3 hover:cursor-not-allowed	" disabled>
        <img src="Contact.png"></img>
      </button>
    </figcaption>
    </>

  )
}
