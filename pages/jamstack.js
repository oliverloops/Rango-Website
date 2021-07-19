import { useEffect } from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Layout components
import Navbar from "../layout/Navbar";
import ContactSection from "../layout/ContactSection";
import Footer from "../layout/Footer";
//Icons
import { IoIosSpeedometer } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";

const Jamstack = () => {
  return (
    <>
      <Head>
        <title>Rango | JAMstack</title>
        <meta name="description" content="¿Qué es JAMstack?" />
        <meta property="og:title" content="¿Qué es JAMstack?" />
        <meta
          property="og:description"
          content="JAMstack es una aproximación moderna en el mundo del desarrollo web, gracias a esta aproximación podemos crear mejores soluciones que sean mucho mas economicas, rapidas de construir y que son óptimas para el crecimiento de tu empresa o proyecto a corto y largo plazo.

        "
        />
        <meta property="og:url" content="https://rango.dev/jamstack/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/rango_logo.png"></link>
      </Head>
      <div className="pb-12">
        <Navbar />
      </div>
      <Main />
      <ContactSection />
      <Footer />
    </>
  );
};

const Main = () => {
  return (
    <main className="md:pb-12">
      <div className="p-12">
        <motion.h1
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans font-black text-center text-2xl p-4"
        >
          <span className="marker-text-4">¿Qué es JAMstack?</span>
        </motion.h1>
      </div>
      <div className="flex flex-col items-center px-8">
        <motion.p
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-center font-black text-xl md:text-2xl text-gray-600 p-4"
        >
          Creamos experiencias JAMstack para tu negocio.
        </motion.p>
        <motion.p
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:text-center text-gray-400 leading-relaxed max-w-prose md:p-4"
        >
          JAMstack es una aproximación moderna en el mundo del desarrollo web,
          gracias a esta aproximación podemos crear mejores soluciones que sean
          mucho mas economicas, rapidas de construir y que son óptimas para el
          crecimiento de tu empresa o proyecto a corto y largo plazo.
        </motion.p>
      </div>
      <div className="flex flex-col items-center p-8">
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex items-center"
        >
          {/* <BiWorld className="text-gray-500" size={32} /> */}
          <p className="text-center text-xl font-black md:text-2xl text-gray-600 px-2 py-5">
            Construyamos ese sitio o aplicación web que has soñado
            <br />y mostremosela al mundo.
          </p>
        </motion.div>
        <motion.p
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:text-center text-gray-400 leading-relaxed max-w-prose md:p-4"
        >
          A tráves de la aproximación JAMstack podemos ayudarte a construir la
          solución digital que mejor se adapte a tus requerimientos. Es de esta
          manera que también podemos crearlo en tiempo record asegurando que tu
          sitio sea rápido y siempre se encuentre en línea.
        </motion.p>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="h-px w-80 bg-gray-200 my-4"
        ></motion.div>
      </div>
      <Features />
    </main>
  );
};

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="pageInitial"
      animate={controls}
      variants={{
        pageInitial: {
          opacity: 0,
          translateY: 100,
        },
        pageAnimate: {
          opacity: 1,
          translateY: 0,
        },
      }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="grid justify-items-center grid-cols-1 md:grid-cols-3 grid-rows-auto px-8"
    >
      <div className="col col-start-1 row-start-1 py-6">
        <RiStackFill className="text-yellow-300" size={32} />
      </div>
      <div className="col col-start-1 row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-bold">MODERNO</p>
      </div>
      <div className="col col-start-1 row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400">
          JAMstack esta basado en estandares y tecnologías de desarrollo
          modernas y es el futuro de las tecnologías web.
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-1 py-6">
        <IoIosSpeedometer className="text-yellow-300" size={32} />
      </div>
      <div className="col md:col-start-2 md:row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-bold">MAS VELOZ</p>
      </div>
      <div className="col md:col-start-2 md:row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400">
          Es nuestra prioridad que tu sitio sea lo suficientemente rápido para
          garantizar un buen rendimiento, por eso confiamos en JAMstack.
        </p>
      </div>
      <div className="col md:col-start-3 md:row-start-1 py-6">
        <FaMoneyBillWave className="text-yellow-300" size={32} />
      </div>
      <div className="col md:col-start-3 md:row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-bold">
          MENOR COSTO
        </p>
      </div>
      <div className="col md:col-start-3 md:row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400">
          Las soluciones bajo esta aproximación difieren de las tradicionales ya
          que el costo de infraestructura llega a ser mucho menor y bajo
          demanda.
        </p>
      </div>
    </motion.div>
  );
};

export default Jamstack;
