import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import Cloud from './fogshader'

const Thing = () => {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.z += 0.01))
    return (
        <mesh
            ref={ref}
            onClick={e => console.log('click')}
            onPointerOver={e => console.log('hover')}
            onPointerOut={e => console.log('unhover')}
        >
            <planeBufferGeometry attach='geometry' args={[1, 1]} />
            <meshBasicMaterial
                attach='material'
                color='hotpink'
                opacity={0.5}
                transparent
            />
        </mesh>
    )
}

const ThreeSample = () => {
    return (
        <Canvas>
            <directionalLight
          color="#ff1100"
          intensity={1.2}
          position={[0, 0, 200]}
        />
        <directionalLight
          color="#ff1100"
          intensity={0.2}
          position={[0, 0, -200]}
          rotation={[1, 0, 0]}
        />
        <ambientLight color="#555555" intensity={0.5} />
        <pointLight
          color="#d40027"
          intensity={30}
          position={[-200, 0, -40]}
          distance={500}
          decay={1.5}
        />
        <pointLight
          color="#d8547e"
          intensity={30}
          position={[100, 0, -40]}
          distance={500}
          decay={1}
        />
        <pointLight
          color="#ff0048"
          intensity={30}
          position={[300, 0, -50]}
          distance={500}
          decay={1.5}
        />
        <Suspense fallback={null}>
          <Cloud />
        </Suspense>
        </Canvas>
    )
}

export default ThreeSample;