//src/components/ThreeZoom.js
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import Level from "../components/ThreeZoom/Level";
import Sudo from "../components/ThreeZoom/Sudo";
import Camera from "../components/ThreeZoom/Camera";
import Cactus from "../components/ThreeZoom/Cactus";
import Icon from "../components/ThreeZoom/Icon";
import Pyramid from "../components/ThreeZoom/Pyramid";
import "./ThreeZoom/styles.css";

export default function ThreeZoom() {
  return (
    <Canvas className="bg-transparent" 
    flat dpr={[1, 2]} 
    camera={{ fov: 25, position: [0, 0, 8] }}>
      <ambientLight />
      <PresentationControls
        snap
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[0, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
        
      >
        <group position-y={-0.75} dispose={null}>
          <Level />
          <Sudo />
          <Camera />
          <Cactus />
          <Icon />
          <Pyramid />
        </group>
      </PresentationControls>
    </Canvas>
  );
}
