import { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BiRocket, BiPaint } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Process = ({ step, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <motion.div
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
      transition={{
        duration: 0.7,
        delay: step === 1 ? 0.5 : step === 2 ? 0.65 : 0.8,
      }}
      className="grid grid-cols-auto grid-rows-auto gap-3 p-8"
    >
      {step === 1 ? (
        <div className="col-start-1 row-start-2  bg-purple-500 w-14 h-14 rounded-2xl">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center self-center text-white p-3">
              <BiPaint size={32} />
            </div>
          </div>
        </div>
      ) : step === 2 ? (
        <div className="col-start-1 row-start-2 bg-green-500 w-14 h-14 rounded-2xl">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center self-center text-white p-3">
              <FaLaptopCode size={32} />
            </div>
          </div>
        </div>
      ) : (
        <div className="col-start-1 row-start-2 bg-yellow-500 w-14 h-14 rounded-2xl">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center self-center text-white p-3">
              <BiRocket size={32} />
            </div>
          </div>
        </div>
      )}
      <div className="col-start-2 row-start-1 text-gray-300 text-sm">
        {step === 1
          ? "Planeación y Diseño"
          : step === 2
          ? "Desarrollo"
          : "Pruebas y Despliegue"}
      </div>
      <div className="col-start-2 row-start-2 text-sm max-w-xs">{children}</div>
      <div className="col-start-2 row-start-3 text-md font-bold">
        Paso {step}
      </div>
    </motion.div>
  );
};

export default Process;
