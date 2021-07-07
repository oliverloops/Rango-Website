import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

//Rango Yellow Gradient
//linear-gradient(119.86deg, #FFB013 20.04%, #ECDB5E 85.9%)

const MyRotatingBox = () => {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      rotation={[Math.PI / 2, 0, 0]}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="#FFB013" />
      {/* <shaderMaterial
        args={[
          {
            uniforms: {
              color1: {
                value: ,
              },
              color2: {
                value: ,
              },
            },
            vertexShader: `
            varying vec2 vUv;
        
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
          `,
            fragmentShader: `
                uniform vec3 color1;
                uniform vec3 color2;
  
                varying vec2 vUv;
    
                void main() {
      
                    gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
                }
            `,
            wireframe: true,
          },
        ]}
      /> */}
    </mesh>
  );
};

const Cube3D = () => {
  return (
    <div id="canvas-container" style={{ height: "auto", width: "auto" }}>
      <Canvas orthographic camera={{ zoom: 40, position: [80, 20, 100] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <MyRotatingBox />
      </Canvas>
    </div>
  );
};

export default Cube3D;
