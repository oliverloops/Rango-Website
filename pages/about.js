import { motion, useAnimation } from "framer-motion";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const About = () => (
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
      <p>Something to say...</p>
    </main>
    <Footer />
  </>
);

export default About;
