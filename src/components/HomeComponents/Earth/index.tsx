import { useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three'

export const Earth = ({ position = [] }: any) => {
  const [earthday, earthnight]: any = useLoader(TextureLoader, [
    'earthday.jpeg',
    'earthnight.jpeg',
  ])
  const ref = useRef<any>()

  useFrame(() => {
    ref.current.rotation.x += 0.002
  })

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial map={false ? earthday : earthnight} />
    </mesh>
  )
}
