import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Layout components
import Navbar from "../layout/Navbar";
import ContactSection from "../layout/ContactSection";
import Footer from "../layout/Footer";
//Icons
import { BiCodeAlt } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";

const Services = () => (
  <>
    <Head>
      <title>Rango | Servicios</title>
      <meta name="description" content="Nuestros Servicios" />
      <meta property="og:title" content="Nuestros Servicios" />
      <meta
        property="og:description"
        content="Creamos tu visión e ideas con tecnologías seguras y escalables"
      />
      <meta property="og:url" content="https://rango.dev/services/" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/rango_logo.png"></link>
    </Head>
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
          className="font-sans font-black text-center text-2xl p-4"
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
        className="flex flex-col px-8 md:px-12 md:py-4"
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
            className="text-center font-black text-xl md:text-2xl text-gray-600 p-4"
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
            className="md:text-center text-gray-400 leading-relaxed max-w-prose md:p-4"
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
        className="flex flex-col px-8 md:px-12 md:py-4"
      >
        <div className="flex flex-col items-center px-8 pt-8">
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
            className="md:text-center text-gray-400 leading-relaxed max-w-prose md:p-4"
          >
            Tu proyecto será contruido con una aproximación personalizada, a
            base de tecnologías basadas en JavaScript y usando soluciones web
            modernas como la arquitectura JAMstack.
          </motion.p>
          <div className="text-center py-4 md:py-2">
            <Link href="/jamstack">
              <a className="text-blue-400 font-bold">
                ¿Cómo JAMstack mejoraría mi negocio? &rarr;
              </a>
            </Link>
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
            transition={{ duration: 0.7, delay: 0.65 }}
            className="h-px w-80 bg-gray-200 my-6 md:my-4"
          ></motion.div>
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
      className="grid justify-items-center grid-cols-1 md:grid-cols-2 grid-rows-auto gap-2 p-8 md:p-14"
    >
      <div className="col col-start-1 row-start-1 place-self-center bg-green-100 text-green-500 rounded-xl w-12 h-12 my-4">
        <div className="flex justify-center self-center p-2">
          <BiCodeAlt size={32} />
        </div>
      </div>
      <div className="col col-start-1 row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-bold">
          Desarrollo Web
        </p>
      </div>
      <div className="col col-start-1 row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400 md:w-80">
          Construímos aplicaciones para resolver desde problemas simples hasta
          complejos basados en las necesidades de su negocio.
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-1  place-self-center bg-purple-100 text-purple-500 rounded-xl w-12 h-12 my-4">
        <div className="flex justify-center self-center p-2">
          <MdBusiness size={32} />
        </div>
      </div>
      <div className="col md:col-start-2 md:row-start-2">
        <p className="text-gray-600 text-lg md:text-md font-bold">
          Soluciones Empresariales
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-3 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400  md:w-80">
          Creamos software para distintos tipos de negocios, sin importar si su
          negocio provee soluciones a otras empresas o a consumidores.
        </p>
      </div>
      <div className="col md:col-start-1 md:row-start-4 place-self-center bg-red-100 text-red-500 rounded-xl w-12 h-12 my-4">
        <div className="flex justify-center self-center p-2">
          <MdWeb size={32} />
        </div>
      </div>
      <div className="col md:col-start-1 md:row-start-5">
        <p className="text-gray-600 text-lg md:text-md font-bold">
          Diseño UI/UX
        </p>
      </div>
      <div className="col md:col-start-1 md:row-start-6 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400  md:w-80">
          Llevar ideas a la realidad es una cosa, pero hacerlas atractivas es
          otra. por eso creamos productos que se ven y se usan de lo mejor.
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-4 place-self-center bg-blue-100 text-blue-500 rounded-xl w-12 h-12 my-4">
        <div className="flex justify-center self-center p-2">
          <HiChartBar size={32} />
        </div>
      </div>
      <div className="col md:col-start-2 md:row-start-5">
        <p className="text-gray-600 text-lg md:text-md font-bold">
          SEO y Analytics
        </p>
      </div>
      <div className="col md:col-start-2 md:row-start-6 px-8 py-3">
        <p className="text-center md:text-sm text-gray-400 md:w-80">
          Hacemos que sus ideas no solo se vean y funcionen bien, también nos
          preocupamos por posicionar su marca en internet.
        </p>
      </div>
    </motion.div>
  );
};

export default Services;
