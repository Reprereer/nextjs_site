import { useFrame, extend } from '@react-three/fiber'
import React, {useRef, VFC, Suspense, useMemo } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { Object3D } from 'three'
import cloudImg from './images/smoke2.png'
extend(THREE)

const Cloud = () => {
    const tempObject = useMemo(() => new Object3D(), [])
    const ref = useRef()
    const texture = useTexture(cloudImg)

    const particles = useMemo(() => {
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
    return cloudParticles
    },[])

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { positionX, positionZ, rotationZ } = particle
            tempObject.position.set(positionX, 0, positionZ)
            tempObject.rotation.set(0, 0, rotationZ)
            tempObject.updateMatrix()
            ref.current.setMatrixAt(i, tempObject.matrix)
        })
        particles.forEach((particle) => (particle.rotationZ -= 0.001))
        ref.current.instanceMatrix.needsUpdate = true
    })
    
    const material = useMemo(
        () => 
        new THREE.RawShaderMaterial({
        uniforms: {
            time: {
                type: 'f',
                value: 0
              },
              tex: {
                type: 't',
                value: null
              }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    }),
    []
    )

    return (
        <mesh>
        <instancedMesh ref={ref} args={[null, null, 40]}>
            <planeBufferGeomerty attach="geometry" args={[500, 500]} />
            <meshLambertMaterial
                attach="material"
                texture={texture}
                depthWrte={false}
                transparent
                opacity={0.55}
            />
        </instancedMesh>
        </mesh>
    )
}

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

export default Cloud