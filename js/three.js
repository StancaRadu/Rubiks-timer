import * as THREE from 'three'

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


// const light = new THREE.PointLight(0xffffff, 20, 1000)
const light = new THREE.AmbientLight( 0xffffff )
light.position.set(0, 0, 20)
scene.add(light)

const camera = new THREE.PerspectiveCamera(75)
camera.position.z = 10
scene.add(camera)


const renderer = new THREE.WebGLRenderer({canvas})


function animate(){
    requestAnimationFrame(animate)
    if (document.getElementById("td").classList.contains("hidden")) return;
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
    }
});
resizeObserver.observe(td);