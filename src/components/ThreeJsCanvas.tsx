
import { useState } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './ThreeJsCanvas.css'


export const ThreeJsCanvas = () => {

    //RENDERER
    const renderer = new THREE.WebGLRenderer()
    renderer.shadowMap.enabled = true
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    //SCENE
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    //const orbit = new OrbitControls(camera, renderer.domElement)

    scene.background = new THREE.Color(0x9473f0)

    //AXIS HELPER
    //const axesHelper = new THREE.AxesHelper(5)
    //scene.add(axesHelper)

    //CAMERA
    camera.position.set(0, 0, 5)
    //orbit.update()

    //BOX
    const boxGeometry = new THREE.BoxGeometry()
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xfffee6 })
    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    box.position.set(10, 5, -5)
    scene.add(box)

    //TORUS KNOT
    const geometry = new THREE.TorusKnotGeometry( 5, 1, 100, 16 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xfffee6 } ); 
    const torusKnot = new THREE.Mesh( geometry, material ); scene.add( torusKnot );
    torusKnot.position.set(-35, -15, -30)
    scene.add(torusKnot)


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
    //const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
    //scene.add(dLightHelper)

    //DIRECTIONAL LIGHT SHADOW HELPER
    //const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
    //scene.add(dLightShadowHelper)

    //GLTF LOADER
    const loader = new GLTFLoader()
    loader.load('../3dmodels/computer.glb', (gltf: any) => {
        const model = gltf.scene
        scene.add(model)
        model.position.set(0, 0, 0)
    }, undefined, (error: any) => {
        console.error(error)
    })

    let targetPosition: THREE.Vector3 | null = null;

    const moveSpeed = 0.1;

    const animate = (time: number) => {

        box.rotation.x = time / 1000
        box.rotation.y = time / 1000
        torusKnot.rotation.x = time / 1000
        torusKnot.rotation.y = time / 1000

        if (targetPosition) {
            //smothly move box to target position
            box.position.lerp(targetPosition, moveSpeed);

            //if box is close enough to target position, stop moving
            const distance = box.position.distanceTo(targetPosition);
            if (distance < 0.1) {
                targetPosition = null; //stop moving when close enough
            }
        }


        renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)



    const onDocumentMouseWheel = (event: any) => {
        if (!targetPosition) {
            //target position
            targetPosition = event.deltaY < 0
                ? new THREE.Vector3(10, 5, -5)
                : new THREE.Vector3(0, 0, 4);
        }
    }

    window.addEventListener('wheel', onDocumentMouseWheel)

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    return (
        <div className='body'>
        </div>
    );
}