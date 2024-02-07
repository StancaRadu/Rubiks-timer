import * as THREE from '../node_modules/three/build/three.module'

const canvas = document.getElementById("bg")


const scene = new THREE.Scene()

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83"
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light = new THREE.PointLight(0xffffff, 20, 1000)
light.position.set(0, 10, 10)
scene.add(light)

const camera = new THREE.PerspectiveCamera(45, 100/100)
camera.position.z = 10
scene.add(camera)


const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(100, 100);


function animate(){
    
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
