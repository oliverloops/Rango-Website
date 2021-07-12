import { motion, useAnimation } from "framer-motion";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Services = () => (
  <>
    <div className="pb-12">
      <Navbar />
    </div>
    <main className="p-12">
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
        transition={{ duration: 0.7, delay: 1.0 }}
        className="font-sans font-bold text-center text-xl md:text-2xl p-4"
      >
        <span className="marker-text-4">Nuestros Servicios</span>
      </motion.h1>
      <div className="flex flex-col justify-center md:p-10">
        <p className="text-lg md:px-8">
          Te acompañamos durante el desarrollo de tu proyecto y adaptamos la
          tecnología y metodología a los requerimientos que necesite
        </p>
        <p className="text-lg font-bold md:px-8">
          Imaginalo. Nosotros lo hacemos realidad.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Services;
