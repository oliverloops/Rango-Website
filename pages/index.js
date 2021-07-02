import Link from "next/link";
import Image from "next/image";
//UI components
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 justify-items-start gap-2">
        <Navbar />
        <div className="col-start-1 row-start-2 p-8 pl-12">
          <h1 className="font-sans font-black text-5xl">
            Construímos tus ambiciosos productos digitales.
          </h1>
          <p className="pt-6 text-lg">
            Rango es una agencia de software. En Rango nosotros construímos el
            futuro, resolvemos problemas y creamos las mejores experiencias en
            web y móvil.
          </p>
        </div>
        <div className="col-start-2 row-start-2 place-self-center">
          <Image src="/rango_logo.png" width="300" height="300" />
        </div>
        <div className="col-start-1 row-start-3 p-4 pl-12">
          <button className="bg-yellow-300 rounded-full py-4 px-7">
            Contratános
          </button>
          <Link href="#">
            <a className="underline px-5">Nuestro portafolio</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
