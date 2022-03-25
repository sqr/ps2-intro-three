/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/test.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Action"].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]}>
          <pointLight
            intensity={1000}
            decay={2}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          name="Camera"
          position={[5.72, 5.16, 21.94]}
          rotation={[1.15, 0.34, -0.64]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={44.1}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group position={[0.71, 0, -4.64]} rotation={[0, -1.53, 0]} />
        <group />
        <group name="lookAt" position={[0, 0, 15.34]} />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[0, 0, -11.96]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.002"]}
          position={[0, 0, 15.34]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/test.gltf");
