import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <nav className="flex z-10 bg-white justify-between w-full px-8 md:px-12 py-4 fixed">
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: -40,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
        <div className="hidden md:block">
          <div className="flex">
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  translateY: -40,
                },
                pageAnimate: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="self-center"
            >
              <Link href="/services">
                <a className="mx-4">Servicios</a>
              </Link>
            </motion.div>
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  translateY: -40,
                },
                pageAnimate: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="self-center"
            >
              <Link href="#">
                <a className="mx-4">Portafolio</a>
              </Link>
            </motion.div>
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  translateY: -40,
                },
                pageAnimate: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="self-center"
            >
              <Link href="/about">
                <a className="mx-4">Acerca de Nosotros</a>
              </Link>
            </motion.div>
            <Link href="#">
              <a>
                <motion.button
                  initial="pageInitial"
                  animate="pageAnimate"
                  variants={{
                    pageInitial: {
                      opacity: 0,
                      translateY: -40,
                    },
                    pageAnimate: {
                      opacity: 1,
                      translateY: 0,
                    },
                  }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-yellow-300 rounded-full py-4 px-7"
                >
                  Contáctanos
                </motion.button>
              </a>
            </Link>
          </div>
        </div>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: -40,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden"
        >
          <button onClick={blockStyle} className="menu-mobile-button">
            <div
              ref={button}
              className="flex flex-col justify-center w-full h-full menu-button-line"
            ></div>
          </button>
        </motion.div>
      </nav>
      <ul
        ref={mobileMenu}
        className="flex flex-col md:hidden mobile-navbar-menu-closed fixed"
      >
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-3">
            <Link href="/services">
              <a className="text-xl font-light">Servicios</a>
            </Link>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <Link href="#">
              <a className="text-xl font-light">Portafolio</a>
            </Link>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <Link href="/about">
              <a className="text-xl font-light">Acerca de Nosotros</a>
            </Link>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <Link href="/#contact-form">
              <a className="text-xl font-light">Contáctanos</a>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
