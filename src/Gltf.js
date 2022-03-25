import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PerspectiveCamera, useAnimations } from "@react-three/drei";
import React, { useRef, useEffect } from "react";

function Escena() {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, "./ps2-intro-three_0001.gltf");
  console.log(gltf);
  const { actions } = useAnimations(gltf.animations, group);
  console.log(actions);
  useEffect(() => {}, []);

  return (
    <>
      <PerspectiveCamera makeDefault name="Camera1" />
      <primitive object={gltf.scene} />
    </>
  );
}

export default Escena;
