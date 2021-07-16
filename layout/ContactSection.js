import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//UI components
import Form from "../components/Form";

const ContactSection = () => {
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
    <div
      id="grid-parent"
      className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-0 md:gap-2 px-6 py-14"
    >
      <div className="col-start-1 row-start-2 md:row-start-1 md:row-end-3 px-0 md:px-8 py-4 md:py-0">
        <Form id={"grid-parent"} />
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
          className="font-sans text-gray-600 text-md md:text-lg py-4"
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

export default ContactSection;
