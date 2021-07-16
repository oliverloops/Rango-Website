import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
//Utils
import usePortal from "../utils/usePortal";

const Form = ({ id }) => {
  const [state, handleSubmit] = useForm("contactForm");

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <>
      {/* {state.succeeded ? (
        <Modal container={container}>
          <div className="bg-white shadow-md w-8 h-8 p-4">
            <p>I'm a modal</p>
          </div>
        </Modal>
      ) : (
        <></>
      )} */}
      <Modal id={id}>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: "-38rem",
            },
            pageAnimate: {
              opacity: 1,
              translateY: "-32rem",
            },
          }}
          transition={{ duration: 0.7 }}
          className="flex justify-center w-full"
        >
          <p className="text-center bg-white shadow-lg rounded-xl w-40 h-14 p-4">
            ¡Hecho!{" "}
            <span role="img" aria-label="thumb">
              👍
            </span>
          </p>
        </motion.div>
      </Modal>
      <motion.form
        ref={ref}
        initial="pageInitial"
        animate={controls}
        variants={{
          pageInitial: {
            opacity: 0,
            translateY: 250,
          },
          pageAnimate: {
            opacity: 1,
            translateY: 0,
          },
        }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-col justify-center rounded-3xl md:rounded-2xl shadow-lg p-2 md:p-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="px-4 py-3 md:py-2 pt-6">
          <input
            name="Name"
            id="name"
            type="text"
            className="bg-gray-200 rounded-lg px-4 py-2 w-full"
            placeholder="Ingresa tu nombre"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>
        <label htmlFor="email" className="px-4 py-2">
          <input
            name="Email"
            id="email"
            type="email"
            className="bg-gray-200 rounded-lg px-4 py-2 w-full"
            placeholder="Ingresa tu correo electrónico"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label htmlFor="phone" className="px-4 py-2">
          <input
            name="Phone"
            id="phone"
            type="number"
            className="bg-gray-200 rounded-lg px-4 py-2 w-full"
            placeholder="Ingresa tu número telefónico (opcional)"
          />
        </label>
        <label htmlFor="text" className="px-4 py-2">
          <textarea
            name="Text"
            id="text"
            type="text"
            className="bg-gray-200 rounded-lg px-4 py-2 w-full"
            placeholder="Aquí puedes agregar más detalles, la idea que tengas en mente o preguntas que tengas al respecto."
          />
        </label>
        <div className="flex justify-center p-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-yellow-300 rounded-full py-3 px-8"
          >
            Enviar
          </button>
        </div>
      </motion.form>
    </>
  );
};

const Modal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Form;
