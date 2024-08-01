import { useState } from 'react'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import * as dat from 'dat.gui'

import './App.css'

function App() {

  const renderer = new THREE.WebGLRenderer()

  renderer.shadowMap.enabled = true

  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const orbit = new OrbitControls(camera, renderer.domElement)

  //AXIS HELPER
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  //CAMERA
  camera.position.set(-10, 30, 30)
  orbit.update()

  //BOX
  const boxGeometry = new THREE.BoxGeometry()
  const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const box = new THREE.Mesh(boxGeometry, boxMaterial)
  scene.add(box)

  //PLANE
  const planeGeometry = new THREE.PlaneGeometry(30, 30)
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  scene.add(plane)
  plane.rotation.x = -0.5 * Math.PI
  plane.receiveShadow = true

  //GRID HELPER
  const gridHelper = new THREE.GridHelper(30)
  scene.add(gridHelper)

  //SPHERE
  const sphereGeometry = new THREE.SphereGeometry(4, 30, 30)
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff, wireframe: false })
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
  scene.add(sphere)
  sphere.position.x = -10
  sphere.castShadow = true

  //LIGHT
  const ambientLight = new THREE.AmbientLight(0x333333)
  scene.add(ambientLight)

  //DIRECTIONAL LIGHT
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  scene.add(directionalLight)
  directionalLight.position.set(-30, 50, 0)
  directionalLight.castShadow = true
  directionalLight.shadow.camera.bottom = -12


  //DIRECTIONAL LIGHT HELPER
  const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
  scene.add(dLightHelper)

  //DIRECTIONAL LIGHT SHADOW HELPER
  const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
  scene.add(dLightShadowHelper)


  //GUI
  const gui = new dat.GUI()

  const options = {
    sphereColor: '#ffea00',
    wireframe: false
  }

  gui.addColor(options, 'sphereColor').onChange((e) => {
    sphere.material.color.set(e)
  })

  gui.add(options, 'wireframe').onChange((e) => {
    sphere.material.wireframe = e
  })


  let step = 0
  let speed = 0.01

  const animate = (time: number) => {

    box.rotation.x = time / 1000
    box.rotation.y = time / 1000

    step += speed
    sphere.position.y = 10 * Math.abs(Math.sin(step))

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
