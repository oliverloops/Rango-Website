import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const button = useRef();
  const mobileMenu = useRef();

  const blockStyle = () => {
    if (
      button.current.className ===
      "flex flex-col justify-center w-full h-full menu-button-line-open"
    ) {
      button.current.className =
        "flex flex-col justify-center w-full h-full menu-button-line";

      mobileMenu.current.className =
        "flex flex-col md:hidden mobile-navbar-menu-closed absolute";
    } else {
      button.current.className =
        "flex flex-col justify-center w-full h-full menu-button-line-open";

      mobileMenu.current.className =
        "flex flex-col md:hidden mobile-navbar-menu-open absolute";
    }
  };

  return (
    <>
      <nav className="flex z-10 bg-white justify-between px-8 md:px-12 py-4 md:py-8">
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
            <a className="navlink px-4">Servicios</a>
          </Link>
          <Link href="#">
            <a className="navlink px-4">Portafolio</a>
          </Link>
          <Link href="#">
            <a className="navlink px-4">Acerca de Nosotros</a>
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
          <button onClick={blockStyle} className="menu-mobile-button">
            <div
              ref={button}
              className="flex flex-col justify-center w-full h-full menu-button-line"
            ></div>
          </button>
        </div>
      </nav>
      <ul
        ref={mobileMenu}
        className="flex flex-col md:hidden mobile-navbar-menu-open absolute"
      >
        <li className="p-4">
          <Link href="#">
            <a className="navlink px-4">Servicios</a>
          </Link>
        </li>
        <li className="p-4">
          <Link href="#">
            <a className="navlink px-4">Portafolio</a>
          </Link>
        </li>
        <li className="p-4">
          <Link href="#">
            <a className="navlink px-4">Acerca de Nosotros</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
