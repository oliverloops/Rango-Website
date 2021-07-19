import { useEffect } from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Icons
import { BiWorld } from "react-icons/bi";
//Layout components
import Navbar from "../layout/Navbar";
import ContactSection from "../layout/ContactSection";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Rango | Acerca de Nostros</title>
        <meta name="description" content="Acerca de Nostros" />
        <meta property="og:title" content="Acerca de Nostros" />
        <meta
          property="og:description"
          content="Somos una agencia de desarrollo de software y un laboratorio creativo. nos posicionamos como socios de nuestros clientes y les entregamos un valor significante con resultados tangibles."
        />
        <meta property="og:url" content="https://rango.dev/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="pb-12">
        <Navbar />
      </div>
      <AboutBlock />
      <div id="contact-form">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

const AboutBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [domEl, inObserver] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  useEffect(() => {
    if (inObserver) controls.start("pageAnimate");
  }, [controls, inObserver]);

  return (
    <>
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
            <span className="marker-text-4">Acerca de Nosotros</span>
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
            Dale un vistazo de cerca a Rango.
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
            className="text-center text-gray-400 leading-relaxed max-w-prose md:p-4"
          >
            Somos una agencia de desarrollo de software y un laboratorio
            creativo. nos posicionamos como socios de nuestros clientes y les
            entregamos un valor significante con resultados tangibles.
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
            <BiWorld className="text-gray-500" size={32} />
            <p className="text-center text-xl font-black md:text-2xl text-gray-600 px-2 py-5">
              Nuestra historia
            </p>
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
            transition={{ duration: 0.7, delay: 0.65 }}
            className="h-px w-80 bg-gray-200"
          ></motion.div>
          <motion.span
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
            transition={{ duration: 0.7, delay: 0.7 }}
            className="story-text text-gray-400 leading-loose max-w-prose p-4 md:p-6"
          >
            <p className="pb-4">
              Comenzamos a trabajar juntos a inicios del 2020, con el objetivo
              de crear soluciones de software sofistacadas que mejoren e
              impulsen los negocios de nuestros clientes, es hasta inicios del
              año en curso que formalmente lanzamos Rango.
            </p>
            <p className="pb-4">
              Nuestro equipo diseña, planifica y desarrolla soluciones que van
              desde sitios a aplicaciones web, soluciones empresariales,
              herramientas internas además de diseño y desarrollo de productos
              digitales.
            </p>
            <p className="pb-4">
              Así es como hoy por hoy ofrecemos servicios de desarrollo web,
              diseño UI/UX y servicios de consultoría. Nos encantan los desafíos
              y resolver problemas para nuestros clientes sin importar la
              industría a la que se dediquen.
            </p>
          </motion.span>
        </div>
      </main>
    </>
  );
};

export default About;
