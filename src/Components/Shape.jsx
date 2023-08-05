import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { useCubeTexture, MeshDistortMaterial, Sphere } from "@react-three/drei";
import HeaderText from "./HeaderText";

const Shape = () => {
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/images/" }
  );
  return (
    <>
      <Canvas>
        <PresentationControls>
          <Sphere args={[1.3, 64, 64]}>
            <MeshDistortMaterial
              color={"#090909"}
              roughness={0.1}
              metalness={1}
              bumpScale={0.005}
              clearcoat={1}
              clearcoatRoughness={1}
              radius={1.2}
              distort={0.5}
              envMap={envMap}
            />
          </Sphere>
        </PresentationControls>
      </Canvas>
      <HeaderText />
    </>
  );
};

export default Shape;
