import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Layout components
import Navbar from "../layout/Navbar";
import ContactSection from "../layout/ContactSection";
import Footer from "../layout/Footer";

const Jamstack = () => {
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
      <Main />
      <Footer />
    </>
  );
};

const Main = () => {
  return (
    <main>
      <p className="py-12">Tell me something about JAMstack...</p>
    </main>
  );
};

export default Jamstack;
