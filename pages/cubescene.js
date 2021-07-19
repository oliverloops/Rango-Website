import Image from "next/image";
import { motion } from "framer-motion";
import Cube3D from "../components/Cube3D";

const cubescene = () => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          translateY: -100,
        },
        pageAnimate: {
          opacity: 1,
          translateY: 0,
        },
      }}
      transition={{ duration: 0.7 }}
      className="flex justify-center w-auto h-auto p-8"
    >
      {/* <svg
        className="flex justify-center mx-12 my-4"
        style={{ width: "auto", height: "200" }}
      >
        <polygon
          points="200 6,300 30,300 128, 200 165,100 135,100 32"
          fill="black"
        />
      </svg> */}
      <Image
        src="/hexagon_black.svg"
        width="200"
        height="200"
        alt="rango hex"
      />
      <Cube3D />
    </motion.div>
  );
};

export default cubescene;
