import * as THREE from '../node_modules/three/src/Three.js'
import gsap from '../node_modules/gsap/index.js'
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

const td = document.getElementById("td")
const canvas = document.getElementById("bg")

const scene = new THREE.Scene()
const light = new THREE.AmbientLight( white )
const camera = new THREE.PerspectiveCamera(50)
const renderer = new THREE.WebGLRenderer({canvas, alpha: true })
const controls = new OrbitControls(camera, canvas)


controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
camera.position.z = 8
camera.position.y = 4
camera.position.x = 2
renderer.setPixelRatio(2)

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


class Cube3d extends Cube{
    constructor(){
        super("3d")
    }
    created3dPieces() {
        let faces = ["F", "B", "T", "B", "R", "L"]
        let colors = [green, blue, yellow, white, orange, red]
        let axes = ["z", "z", "x", "x", "y", "y"]
        let p1 = [-1, 0, 1]
        let p2 = [-1, 0, 1]
        let pf = [1.5, -1.5, 1.5, -1.5, 1.5, -1.5]
        let p1d = {[-1]: "R", 0: "M", 1: "L"}
        let p2d = {[-1]: "U", 0: "M", 1: "D"}
        let rotation = -0.5 * Math.PI;

        for (let index = 0; index < 6; index++) {
            p1.forEach(c1 => {
                p2.forEach(c2 => {

                    const sticker = new THREE.PlaneGeometry(1, 1);
                    const color = new THREE.MeshBasicMaterial({color: colors[index], side: THREE.DoubleSide} );
                    const mesh = new THREE.Mesh(sticker, color)
                    
                    let id = `${faces[index]}${p2d[c2]}${p1d[c1]}`

                    let cf = pf[index]
                    
                    let y;
                    let x;
                    let z;
                    let axis = axes[index]
                    switch (axis) {
                        case "x":
                            x = c1
                            y = cf
                            z = c2
                            mesh.rotation.x = rotation
                            break;
                    
                        case "y":
                            x = cf
                            y = c1
                            z = c2
                            mesh.rotation.y = rotation
                            break;

                        case "z":
                            x = c1
                            y = c2
                            z = cf
                            break;
                    }
                    mesh.position.x = x
                    mesh.position.y = y
                    mesh.position.z = z

                    this.pieces[id] = mesh

                    scene.add(mesh)
                });
            });
        }
    }
}

let cube = new Cube3d()
cube.created3dPieces()

console.log(cube);