import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Layout components
import Navbar from "../layout/Navbar";
import ContactSection from "../layout/ContactSection";
import Footer from "../layout/Footer";
//Icons
import { BiCodeAlt } from "react-icons/bi";
import { GoServer } from "react-icons/go";
import { MdWeb } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";

const Services = () => (
  <>
    <div className="pb-12">
      <Navbar />
    </div>
    <Main />
    <ServicesBlock />
    <ContactSection />
    <Footer />
  </>
);

const Main = () => {
  return (
    <main>
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
          className="font-sans font-bold text-center text-xl md:text-2xl p-4"
        >
          <span className="marker-text-4">Nuestros Servicios</span>
        </motion.h1>
      </div>
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
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col px-8 md:px-12 md:py-4 md:max-w-6xl"
      >
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
            className="text-center font-semibold text-xl md:text-2xl text-gray-600 p-4"
          >
            Imaginalo. Nosotros lo hacemos realidad.
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
            className="md:text-center font-light md:text-sm text-gray-400 leading-relaxed max-w-prose md:p-4"
          >
            Te acompañamos durante el desarrollo de tu proyecto y adaptamos la
            tecnología y nuestras metodologias a los requerimientos que este
            necesite.
          </motion.p>
        </div>
      </motion.div>
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
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col px-8 md:px-12 md:py-4 md:max-w-6xl"
      >
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
            className="text-center font-semibold text-xl md:text-2xl text-gray-600 p-4"
          >
            Creamos tu visión e ideas con tecnologías seguras y escalables
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
            className="md:text-center font-light md:text-sm text-gray-400 leading-relaxed max-w-prose md:p-4"
          >
            Tu proyecto será contruido con una aproximación personalizada, a
            base de tecnologías basadas en JavaScript y usando soluciones web
            modernas como la arquitectura JAMstack.
          </motion.p>
        </div>
      </motion.div>
    </main>
  );
};

const ServicesBlock = () => {
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
        <BiCodeAlt className="text-yellow-300" size={32} />
      </div>
      <div className="col col-start-1 row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-medium">MODERNO</p>
      </div>
      <div className="col col-start-1 row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400 font-light">
          JAMstack esta basado en estandares y tecnologías de desarrollo
          modernas y es el futuro de las tecnologías web.
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-1 py-6">
        <GoServer className="text-yellow-300" size={32} />
      </div>
      <div className="col md:col-start-2 md:row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-medium">
          MAS VELOZ
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400 font-light">
          Es nuestra prioridad que tu sitio sea lo suficientemente rápido para
          garantizar un buen rendimiento, por eso confiamos en JAMstack.
        </p>
      </div>
      <div className="col md:col-start-3 md:row-start-1 py-6">
        <MdWeb className="text-yellow-300" size={32} />
      </div>
      <div className="col md:col-start-3 md:row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-medium">
          MEJOR PRECIO
        </p>
      </div>
      <div className="col md:col-start-3 md:row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400 font-light">
          Las soluciones bajo esta aproximación difieren de las tradicionales ya
          que el costo de infraestructura es mucho menor y bajo demanda.
        </p>
      </div>
    </motion.div>
  );
};

export default Services;
