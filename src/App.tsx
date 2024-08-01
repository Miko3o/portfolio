import { useState } from 'react'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

import './App.css'

function App() {

  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const orbit = new OrbitControls(camera, renderer.domElement)

  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  camera.position.set(0, 2, 5)
  orbit.update()

  const boxGeometry = new THREE.BoxGeometry()
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const box = new THREE.Mesh(boxGeometry, boxMaterial)
  scene.add(box)

  box.rotation.x = 5;
  box.rotation.y = 5;

  const animate = (time: number) => {
    requestAnimationFrame(animate)

    box.rotation.x = time / 1000
    box.rotation.y = time / 1000

    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(animate)

  return (
    <div className='mainPage'>
      hi
    </div>
  )
}

export default App
