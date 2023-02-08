import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AdditiveBlending, Object3D } from 'three'
import { useTexture, Text3D } from '@react-three/drei'
import styles from '../styles/Three.module.css'
import threeFontJson from 'three/examples/fonts/helvetiker_bold.typeface.json'
import * as THREE from 'three'

//smokeを作成する
const Cloud = ({ position, rotationZ}) => {
    const tempObject = useMemo(() => new Object3D(), [])
    const ref = useRef()
    const texture = useTexture({map:'/assets/images/smoke2.png'})
    const { viewport } = useThree()

    useFrame(() => (ref.current.rotation.z += 0.001 ))

    const uniforms = {
        time: {
            type: 'f',
            value: 0
          },
          tex: {
            type: 't',
            value: null
          }
        };
    const num = 200;
    const obj = null;

    return (
        <mesh position={position} ref={ref}>
            <planeBufferGeometry
                attach='geometry'
                args={[10, 10]}
            />
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

const Texts = ({text, position}) => {
    const { viewport } = useThree()
    return (
        <mesh scale={viewport.width/8}>
            <Text3D position={position} font={threeFontJson}>
                {text}
                <meshNormalMaterial attach='material' color='#000000' />
            </Text3D>
        </mesh>
    )
}


//smokeオブジェクトをキャンバスに適用する
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
        <div style={{width: "100vw", height:"90vh"}}>
        <Canvas>
            
        <Texts text=" " position={[0, 0, 1]} />
        <Suspense fallback={null}>
            {[...Array(10)].map((_) =>
                <Cloud position={[Math.random()*3, Math.random()*3 , Math.random()*2]} rotationZ={Math.random()*Math.PI}/>
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