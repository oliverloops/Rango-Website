import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
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
      action="https://formspree.io/f/xnqlbzav"
      method="post"
    >
      <label htmlFor="name" className="px-4 py-3 md:py-2 pt-6">
        <input
          name="Name"
          id="name"
          type="text"
          className="bg-gray-200 rounded-lg px-4 py-2 w-full"
          placeholder="Ingresa tu nombre"
        />
      </label>
      <label htmlFor="email" className="px-4 py-2">
        <input
          name="Email"
          id="email"
          type="email"
          className="bg-gray-200 rounded-lg px-4 py-2 w-full"
          placeholder="Ingresa tu correo electrónico"
        />
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
        <button type="submit" className="bg-yellow-300 rounded-full py-3 px-8">
          Enviar
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
