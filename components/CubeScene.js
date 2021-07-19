import React from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

//Rango Yellow Gradient
//linear-gradient(119.86deg, #FFB013 20.04%, #ECDB5E 85.9%)
const CubeScene = () => {
  return (
    <div className="flex justify-center w-auto h-auto p-8">
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
        transition={{ duration: 0.7, delay: 2.0 }}
      >
        <Image
          src="/hexagon_black.svg"
          width="190"
          height="190"
          alt="rango hex"
        />
      </motion.div>
      <Cube />
    </div>
  );
};

const MyRotatingBox = () => {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      visible
      // rotation={[Math.PI / 2, 0, 0]}
      scale={1}
      ref={myMesh}
    >
      <boxBufferGeometry args={[2.15, 2.15, 2.15]} />
      <meshStandardMaterial color="#FFB013" />
      <OrbitControls enableZoom={false} />
    </mesh>
  );
};

const Cube = () => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          translateY: -150,
        },
        pageAnimate: {
          opacity: 1,
          translateY: 0,
        },
      }}
      transition={{ duration: 0.7, delay: 2.5 }}
      className="absolute py-4"
      id="canvas-container"
      style={{ height: "auto", width: "auto" }}
    >
      <Canvas orthographic camera={{ zoom: 40, position: [60, 40, 100] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <directionalLight color="#FF5733" position={[0, 0, 5]} />
        <MyRotatingBox />
      </Canvas>
    </motion.div>
  );
};

export default CubeScene;
