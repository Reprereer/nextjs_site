import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Object3D } from 'three'
import { useTexture } from '@react-three/drei'

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

const Cloud = ({ position, rotationZ}) => {
    const tempObject = useMemo(() => new Object3D(), [])
    const ref = useRef()
    const texture = useTexture({map:'/assets/images/smoke2.png'})

    useFrame(() => (ref.current.rotation.z += 0.001 ))

    return (
        <mesh position={position} ref={ref}>
            <planeBufferGeometry attach='geometry' args={[10, 10]} />
            <meshLambertMaterial
                attach='material'
                {...texture}
                opacity={0.5}
                depthWrite={false}
                transparent
            />
        </mesh>
    )
}

const ThreeSample = () => {
    const cloudParticles = []
        for (let p = 0; p < 50; p++) {
            const positionX = Math.random() * 800 - 400
            const positionZ = Math.random() * 500 - 500
            const rotationZ = Math.random() * 2 * Math.PI
    
            cloudParticles.push({
                positionX,
                positionZ,
                rotationZ,
            })
        }

    return (
        <div style={{width: "50vw", height:"50vh"}}>
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
            {[...Array(40)].map((_) =>
                <Cloud position={[Math.random()*2, Math.random()*2 , Math.random()*2]} rotationZ={Math.random()*Math.PI}/>
            )}
        </Suspense>
        </Canvas>
        </div>
    )
}

export default ThreeSample;


const vertexShader = `
    attribute vec3 position;
    attribute vec2 uv;
    attribute vec3 instancePosition;
    attribute float delay;
    attribute float rotate;
  
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;
    uniform float time;
  
    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vColor;
    varying float vBlink;
  
    const float duration = 200.0;
  
    mat4 calcRotateMat4Z(float radian) {
        return mat4(
            cos(radian), -sin(radian), 0.0, 0.0,
            sin(radian), cos(radian), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
    }
    vec3 convertHsvToRgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
  
    void main(void) {
        float now = mod(time + delay * duration, duration) / duration;
  
        mat4 rotateMat = calcRotateMat4Z(radians(rotate * 360.0) + time * 0.1);
        vec3 rotatePosition = (rotateMat * vec4(position, 1.0)).xyz;
  
        vec3 moveRise = vec3(
            (now * 2.0 - 1.0) * (2500.0 - (delay * 2.0 - 1.0) * 2000.0),
            (now * 2.0 - 1.0) * 2000.0,
            sin(radians(time * 50.0 + delay + length(position))) * 30.0
        );
        vec3 updatePosition = instancePosition + moveRise + rotatePosition;
  
        vec3 hsv = vec3(time * 0.1 + delay * 0.2 + length(instancePosition) * 100.0, 0.5 , 0.8);
        vec3 rgb = convertHsvToRgb(hsv);
        float blink = (sin(radians(now * 360.0 * 20.0)) + 1.0) * 0.88;
  
        vec4 mvPosition = modelViewMatrix * vec4(updatePosition, 1.0);
  
        vPosition = position;
        vUv = uv;
        vColor = rgb;
        vBlink = blink;
  
        gl_Position = projectionMatrix * mvPosition;
    }
`

const fragmentShader =`
    precision highp float;
  
    uniform sampler2D tex;

    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vColor;
    varying float vBlink;

    void main() {
        vec2 p = vUv * 2.0 - 1.0;

        vec4 texColor = texture2D(tex, vUv);
        vec3 color = (texColor.rgb - vBlink * length(p) * 0.8) * vColor;
        float opacity = texColor.a * 0.36;

        gl_FragColor = vec4(color, opacity);
    }
`