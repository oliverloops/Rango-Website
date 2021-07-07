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
      className="p-8"
    >
      <svg>
        <polygon points="50 3,100 28,100 75, 50 100,3 75,3 25" fill="black" />
      </svg>
      <Cube3D />
    </motion.div>
  );
};

export default cubescene;
