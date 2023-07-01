import { useCubeTexture, MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/images/" }
  );
  return (
    <>
      <Sphere args={[1.3, 64, 64]}>
        <MeshDistortMaterial
          color={"#010101"}
          roughness={0.1}
          metalness={1}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          distort={0.4}
          envMap={envMap}
        />
      </Sphere>
    </>
  );
};

export default Shape;
