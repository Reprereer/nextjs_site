import * as CANNON from 'cannon'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRender } from '@react-three/fiber'

// Cannon-world context provider
const context = React.createContext()
export default function Provider({ children }) {
  // Set up physics
  const [world] = useState(() => new CANNON.World())
  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase()
    world.solver.iterations = 10
    world.gravity.set(0, 0, -25)
  }, [world])

  // Run world stepper every frame
  useRender(() => world.step(1 / 60))
  // Distribute world via context
  return <context.Provider value={world} children={children} />
}