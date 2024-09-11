//場景
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useSpring } from '@react-spring/three'

export default function Level() {
  const { nodes } = useGLTF('model/level-react-draco.glb')
  const { camera } = useThree()
  useSpring(
    () => ({
      from: { y: camera.position.y + 5 },
      to: { y: camera.position.y },
      config: { friction: 100 },
      onChange: ({ value }) => ((camera.position.y = value.y), camera.lookAt(0, 0, 0)),
    }),
    [],
  )
  return <mesh geometry={nodes.Level.geometry} material={nodes.Level.material} position={[-0.38, 0.69, 0.62]} rotation={[Math.PI / 2, -Math.PI / 9, 0]} />
}

//這個 Level 組件加載了一個 GLTF 模型並顯示在 3D 場景中，同時通過 useSpring 來平滑地調整相機的 y 位置，使其在動畫過程中始終面向場景的中心。
