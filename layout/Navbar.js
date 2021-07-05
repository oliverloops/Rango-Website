import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 md:px-12 py-4 md:py-8 col-start-1">
      <div>
        <Link href="/">
          <a>
            <Image
              className="rango-home-logo"
              src="/rango_text.png"
              width="100"
              height="45"
              alt="rango text logo"
            />
          </a>
        </Link>
      </div>
      <div className="hidden md:block">
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
      <div className="md:hidden">
        <button className="menu-mobile-button">
          <div className="flex flex-col justify-center w-full h-full menu-button-line"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
