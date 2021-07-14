import { motion, useAnimation } from "framer-motion";
//Icons
import { BiWorld } from "react-icons/bi";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const About = () => {
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
          <p className="text-center text-xl md:text-2xl text-gray-600 p-4">
            Dale un vistazo de cerca a Rango.
          </p>
          <p className="text-center font-light text-gray-400 max-w-prose md:p-4">
            Somos una agencia de desarrollo de software y soluciones web. nos
            posicionamos como socios de nuestros clientes y les entregamos un
            valor significante con resultados tangibles.
          </p>
        </div>
        <div className="flex flex-col items-center p-8">
          <div className="flex items-center">
            <BiWorld className="text-gray-500" size={32} />
            <p className="text-center text-xl md:text-2xl text-gray-600 px-2 py-5">
              Nuestra historia
            </p>
          </div>
          <div className="h-px w-80 bg-gray-200"></div>
          <p className="text-center font-light text-gray-400 max-w-prose md:p-4">
            Comenzamos a trabajar juntos a inicios de 2020, con el objetivo de
            crear soluciones de software sofistacados que mejoren e impulsen los
            negocios de nuestros clientes.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
