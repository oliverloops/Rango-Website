import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 py-8 col-start-1">
      <div>
        <Link href="/">
          <a>
            <Image
              src="/rango_text.png"
              width="100"
              height="45"
              alt="rango text"
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href="#">
          <a className="px-4">Servicios</a>
        </Link>
        <Link href="#">
          <a className="px-4">Portafolio</a>
        </Link>
        <Link href="#">
          <a className="px-4">Acerca de Nosotros</a>
        </Link>
        <Link href="#">
          <a>
            <button className="bg-yellow-300 rounded-full py-4 px-7">
              Contactanos
            </button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
