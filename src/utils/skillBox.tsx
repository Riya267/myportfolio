import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useRef, useState } from 'react'

const Ball = (props: { imgUrl: any }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  const [image] = useTexture([props.imgUrl])

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 2 : 1.5}
      onClick={(event) => setActive(!active)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={image} color={'white'} />
    </mesh>
  )
}

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Ball imgUrl={icon} />
    </Canvas>
  )
}

export default BallCanvas
