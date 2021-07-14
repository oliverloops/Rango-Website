import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Icons
import { BiWorld } from "react-icons/bi";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
//UI components
import Form from "../components/Form";

const About = () => {
  return (
    <>
      <AboutBlock />
      <ContactBlock />
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
      <div className="pb-12">
        <Navbar />
      </div>
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
            className="text-center text-xl md:text-2xl text-gray-600 p-4"
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
            className="text-center font-light md:text-sm text-gray-400 leading-relaxed max-w-prose md:p-4"
          >
            Somos una agencia de desarrollo de software y soluciones web. nos
            posicionamos como socios de nuestros clientes y les entregamos un
            valor significante con resultados tangibles.
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
            <p className="text-center text-xl md:text-2xl text-gray-600 px-2 py-5">
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
            className="story-text  font-light md:text-sm text-gray-400 leading-loose max-w-prose p-4 md:p-6"
          >
            <p className="pb-4">
              Comenzamos a trabajar juntos a inicios del 2020, con el objetivo
              de crear soluciones de software sofistacadas que mejoren e
              impulsen los negocios de nuestros clientes, es hasta inicios del
              año en curso que formalmente lanzamos Rango.
            </p>
            <p className="pb-4">
              Nuestro equipo diseña, planifica y desarrolla soluciones que van
              desde aplicaciones web, soluciones empresariales, herramientas
              internas y desarrollo de productos digitales.
            </p>
            <p className="pb-4">
              Así es como hoy por hoy ofrecemos servicios de desarrollo, diseño
              UI/UX y servicios de consultoría. Nos encantan los desafíos y
              resolver problemas para nuestros clientes sin importar la
              industría a la que se dediquen.
            </p>
          </motion.span>
        </div>
      </main>
    </>
  );
};

const ContactBlock = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-0 md:gap-2 px-6 py-14">
      <div className="col-start-1 row-start-2 md:row-start-1 md:row-end-3 px-0 md:px-8 py-4 md:py-0">
        <Form />
      </div>
      <div className="col-start-1 md:col-start-2 row-start-1 p-2 md:p-0 w-full md:w-3/4">
        <motion.h1
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
          className="font-sans font-black text-2xl md:text-3xl"
        >
          Contactános
        </motion.h1>
        <motion.p
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
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-sans text-md md:text-lg py-4"
        >
          Envíanos un correo con tus datos y cuentanos un poco más sobre tu
          idea, nos encantaría trabajar contigo.
        </motion.p>
      </div>
      <motion.div
        ref={domEl}
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
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden md:block md:col-start-2 md:row-start-2 md:p-4"
      >
        <Image
          src="/contact_us.png"
          width="332"
          height="230"
          alt="contactanos"
        />
      </motion.div>
    </div>
  );
};

export default About;
