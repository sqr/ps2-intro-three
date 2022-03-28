import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import Escena from "./Gltf";
//import Model from "./Test";
//import Model from "./Ps2_baked_black";
import Model from "./Ps2_bake_bolas";
import {
  EffectComposer,
  SelectiveBloom,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import { Suspense } from "react";

ReactDOM.render(
  <Canvas>
    <Suspense fallback={null}>
      <Model />
      <fog name="Niebla" attach="fog" color="#060b21" near={2.5} far={10} />
    </Suspense>
  </Canvas>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
