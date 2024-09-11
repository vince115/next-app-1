import { useEffect } from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Pyramid() {
  const { nodes } = useGLTF('model/level-react-draco.glb')
  const [matcap] = useMatcapTexture('489B7A_A0E7D9_6DC5AC_87DAC7', 1024)
  const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { mass: 5, tension: 200 } }), [])
  useEffect(() => {
    let timeout
    const rotate = () => {
      api.start({
        rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3],
      })
      timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 1000)
    }
    rotate()
    return () => void clearTimeout(timeout)
  }, [])
  return (
    <a.mesh geometry={nodes.Pyramid.geometry} position={[-0.8, 1.33, 0.25]} {...spring}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
  )
}

//這個 Pyramid 組件加載了一個金字塔模型，並通過隨機旋轉效果使其看起來在不斷旋轉。
