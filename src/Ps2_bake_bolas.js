/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  Trail,
} from "@react-three/drei";
import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import {
  EffectComposer,
  SelectiveBloom,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Model({ ...props }) {
  const group = useRef();
  const lightRef = useRef();
  const sphereRef1 = useRef();
  const sphereRef2 = useRef();
  const sphereRef3 = useRef();
  const { nodes, materials, animations } = useGLTF("/ps2_bake_bolas.glb");
  const { actions } = useAnimations(animations, group);
  const material = new MeshPhysicalMaterial({
    color: "#2d4ded",
    opacity: 1,
    roughness: 0,
    transmission: 1,
    thickness: 0.7,
  });
  const sphereMatRed = new MeshStandardMaterial({
    color: "red",
  });
  const sphereMatGreen = new MeshStandardMaterial({
    color: "green",
  });
  const sphereMatBlue = new MeshStandardMaterial({
    color: "blue",
  });
  useEffect(() => {
    for (let i in actions) {
      actions[i].play();
    }
  });
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group>
          <group position={[0, 8.34, 0]} rotation={[1.89, 0.88, -2.05]}>
            <pointLight
              ref={lightRef}
              name="Light1"
              intensity={3}
              decay={2}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group
            name="Camera"
            position={[-0.2, 10.28, 1.61]}
            rotation={[0.1, 0, 0]}
          >
            <PerspectiveCamera
              makeDefault={true}
              far={100}
              near={0.1}
              fov={49.43}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group />
          <mesh geometry={nodes.Grid.geometry} material={materials.pilares} />
          <mesh
            geometry={nodes.Plane.geometry}
            material={materials.Black}
            position={[0, 0.02, 0]}
            scale={[15.6, 1, 12.81]}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={material}
            position={[-2.22, 5.05, -0.25]}
            rotation={[-0.4, -0.28, 0.58]}
            scale={0.3}
          />
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={material}
            position={[2.98, 5.23, -0.61]}
            rotation={[-0.4, -0.28, 0.58]}
            scale={0.3}
          />
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={material}
            position={[-2.83, 5.87, 2.11]}
            rotation={[-0.4, -0.28, 0.58]}
            scale={0.3}
          />
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={material}
            position={[-0.29, 4.63, 0.92]}
            rotation={[-0.4, -0.28, 0.58]}
            scale={0.3}
          />
          <mesh
            name="Sphere"
            ref={sphereRef1}
            geometry={nodes.Sphere.geometry}
            material={sphereMatRed}
            position={[-0.05, 4.74, 3.25]}
            rotation={[-0.39, -0.01, 0.23]}
            scale={0.04}
          />
          <mesh
            name="Sphere001"
            ref={sphereRef2}
            geometry={nodes.Sphere001.geometry}
            material={sphereMatGreen}
            position={[0.16, 4.96, 2.63]}
            rotation={[-0.54, -0.06, 0.28]}
            scale={0.04}
          />
          <mesh
            name="Sphere002"
            ref={sphereRef3}
            geometry={nodes.Sphere002.geometry}
            material={sphereMatBlue}
            position={[-1.32, 4.69, -0.24]}
            rotation={[-0.11, -0.19, 0.16]}
            scale={0.03}
          />
        </group>
      </group>
      <Trail
        width={0.1} // Width of the line
        color={"red"} // Color of the line
        length={5} // Length of the line
        decay={1} // How fast the line fades away
        local={false} // Wether to use the target's world or local positions
        stride={0} // Min distance between previous and current point
        interval={3} // Number of frames to wait before next calculation
        target={sphereRef1} // Optional target. This object will produce the trail.
        attenuation={(width) => width} // A function to define the width in each point along it.
      />
      <EffectComposer>
        <DepthOfField
          focusDistance={1000}
          focalLength={25}
          bokehScale={3}
          height={2000}
        />
        {/*         <Bloom
          intensity={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.1}
          height={1000}
        /> */}
        <Vignette eskil={false} offset={0.1} darkness={0.9} />
        <SelectiveBloom
          lights={[lightRef]} // ?????? REQUIRED! all relevant lights
          selection={[sphereRef1, sphereRef2, sphereRef3]} // selection of objects that will have bloom effect
          width={1920} // render width
          height={1080} // render height
          selectionLayer={10} // selection layer
          intensity={5} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
    </>
  );
}

useGLTF.preload("/ps2_bake_bolas.glb");
