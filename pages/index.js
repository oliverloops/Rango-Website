import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 justify-items-center gap-2">
      <div className="col-start-1 row-start-2 p-8 pl-10">
        <h1 className="font-sans font-black text-5xl">
          Construímos tus ambiciosos productos digitales.
        </h1>
        <p className="pt-5 text-justify text-lg">
          Rango es una agencia de software. En Rango nosotros construímos el
          futuro, resolvemos problemas y creamos las mejores experiencias en web
          y móvil.
        </p>
      </div>
      <div className="col-start-2 row-start-2">
        <Image src="/rango_logo.png" width="300" height="300" />
      </div>
      <div className="col-start-1 row-start-3">
        <button>Contratános</button>
        <Link href="#">
          <a>Nuestro portafolio</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
