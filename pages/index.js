import Link from "next/link";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
//UI components
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 grid-auto-rows justify-items-start py-16 gap-2">
        <div className="col-start-1 row-start-1 p-8 pl-12">
          <h1 className="font-sans font-black text-5xl">
            Construímos tus ambiciosos productos digitales.
          </h1>
          <p className="pt-6 text-lg">
            Rango es una agencia de software. En Rango nosotros construímos el
            futuro, resolvemos problemas y creamos las mejores experiencias en
            web y móvil.
          </p>
        </div>
        <div className="col-start-2 row-start-1 place-self-center">
          <Image src="/rango_logo.png" width="300" height="300" />
        </div>
        <div className="col-start-1 row-start-2 p-4 pl-12">
          <Link href="#">
            <a>
              <button className="bg-yellow-300 rounded-full py-4 px-7">
                Contratános
              </button>
            </a>
          </Link>
          <Link href="#">
            <a className="underline px-5">Nuestro portafolio</a>
          </Link>
        </div>
      </div>
      <DownArrow />
      <ServicesBlock />
      <DownArrow />
    </>
  );
};

const ServicesBlock = () => (
  <div className="grid grid-cols-2 grid-auto-rows justify-items-start py-12 gap-2">
    <div className="col-start-1 row-start-1 p-8 pl-12">
      <h1 className="font-sans font-black text-5xl">
        Hacemos tus ideas realidad con alguno de nuestros servicios.
      </h1>
      <p className="pt-6 text-lg">
        Ya sea que necesites un sitio web que se adapte a tus necesidades,
        mejorar alguna de tus plataformas o llevar tu visionaría idea a la
        realidad, nosotros lo hacemos por ti.
      </p>
    </div>
  </div>
);

const DownArrow = () => (
  <div className="flex justify-center px-8 py-14">
    <svg className="animate-bounce w-6 h-6">
      <BsArrowDown size={26} />
    </svg>
  </div>
);
export default Home;
