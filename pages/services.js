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
        className="font-sans font-bold text-center text-xl md:text-2xl"
      >
        <span className="marker-text-4">Nuestros Servicios</span>
      </motion.h1>
      <p>
        Te acompañamos durante el desarrollo de tu proyecto y adaptamos la
        tecnología a los requerimientos necesarios
      </p>
    </main>
    <Footer />
  </>
);

export default Services;
