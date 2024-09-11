import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
//useGLTF:用來加載 GLTF 模型。
//useSpring:用來創建動畫。這裡它被用來設置 rotation-z 的動畫，並且設置了摩擦係數
//useEffect:在組件加載後，設置了一個函數 wander 來隨機改變 rotation-z 的值。
// 這裡使用 api.start 來啟動動畫，每隔 1 到 6 秒隨機改變 rotation-z 的角度。

export default function Camera() {
  const { nodes, materials } = useGLTF('model/level-react-draco.glb')
  const [spring, api] = useSpring(() => ({ 'rotation-z': 0, config: { friction: 40 } }), [])
  useEffect(() => {
    let timeout
    const wander = () => {
      api.start({ 'rotation-z': Math.random() })
      timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000)
    }
    wander()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <a.group position={[-0.58, 0.83, -0.03]} rotation={[Math.PI / 2, 0, 0.47]} {...spring}>
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  )
}
