import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const canvas = document.getElementById("bg")
let td = document.getElementById("td")


const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",
    wireframe: true
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


const light = new THREE.AmbientLight( 0xffffff )
light.position.set(0, 0, 20)
scene.add(light)

const camera = new THREE.PerspectiveCamera(75)
camera.position.z = 10
scene.add(camera)



const renderer = new THREE.WebGLRenderer({canvas})
renderer.setPixelRatio(2)


function animate(){
    requestAnimationFrame(animate)
    if (document.getElementById("td").classList.contains("hidden")) return;
    controls.update()
    renderer.render(scene, camera)
}
animate()

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;

const resizeObserver = new ResizeObserver((entries) => {
    for(const entry of entries){
        let size = {
            width: td.clientWidth,
            height: td.clientHeight
        }
        renderer.setSize(size.width, size.height);
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()
    }
});
resizeObserver.observe(td);