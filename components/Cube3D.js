import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial, OrbitControls } from "@react-three/drei";
//import glsl from "babel-plugin-glsl/macro";

const glsl = () => {
  if (typeof window === undefined) {
    return React.lazy(() => import("babel-plugin-glsl/macro"));
  }
};

//Rango Yellow Gradient
//linear-gradient(119.86deg, #FFB013 20.04%, #ECDB5E 85.9%)

const MyRotatingBox = () => {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.x = a;
  });

  const GradientMaterial = shaderMaterial(
    {
      time: 0,
      color: new THREE.Color("#FFB013"),
    }, // vertex shader
    glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, // fragment shader
    glsl`
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
    }
  `
  );

  extend({ GradientMaterial });

  return (
    <mesh
      visible
      // rotation={[Math.PI / 2, 0, 0]}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      {/* <meshStandardMaterial
        color="#FFB013"
        uniforms={{ color1: "blue", color2: "purple" }}
      /> */}
      <OrbitControls />
      <gradientMaterial attach="material" color="#FFB013" time={1} />
    </mesh>
  );
};

const Cube3D = () => {
  return (
    <div
      className="absolute"
      id="canvas-container"
      style={{ height: "auto", width: "auto" }}
    >
      <Canvas orthographic camera={{ zoom: 40, position: [80, 20, 100] }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <MyRotatingBox />
      </Canvas>
    </div>
  );
};

export default Cube3D;
