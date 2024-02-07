import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const canvas = document.getElementById("bg")
let td = document.getElementById("td")

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshStandardMaterial()
const mesh = new THREE.Mesh(geometry, material)
const light = new THREE.AmbientLight( white )
const camera = new THREE.PerspectiveCamera(75)
const renderer = new THREE.WebGLRenderer({canvas})
const controls = new OrbitControls(camera, canvas)


controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
camera.position.z = 10
camera.position.y = 5
camera.position.x = 5
renderer.setPixelRatio(1)

scene.add(mesh)
scene.add(light)
scene.add(camera)

function animate(){
    requestAnimationFrame(animate)
    if (document.getElementById("td").classList.contains("hidden")) return;
    controls.update()
    renderer.render(scene, camera)
}
const resizeObserver = new ResizeObserver((entries) => {
    let size = {
        width: td.clientWidth,
        height: td.clientHeight
    }
    renderer.setSize(size.width, size.height);
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
});


resizeObserver.observe(td);
animate()
