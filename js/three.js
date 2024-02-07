import * as THREE from '../node_modules/three/build/three.module'

const canvas = document.getElementById("bg")
let td = document.getElementById("td")


const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83"
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


const light = new THREE.PointLight(0xffffff, 20, 1000)
light.position.set(0, 10, 10)
scene.add(light)

const camera = new THREE.PerspectiveCamera(75)
camera.position.z = 10
scene.add(camera)


const renderer = new THREE.WebGLRenderer({canvas})


function animate(){
    requestAnimationFrame(animate)
    if (document.getElementById("td").classList.contains("hidden")) return;
    console.log("animating");
    mesh.rotation.x += 0.002
    mesh.rotation.y += 0.002
    renderer.render(scene, camera)
}
animate()


const resizeObserver = new ResizeObserver((entries) => {
    for(const entry of entries){
        let size = {
            width: td.clientWidth,
            height: td.clientHeight
        }
        renderer.setSize(size.width, size.height);
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()
        console.log(size);
    }
});
resizeObserver.observe(td);