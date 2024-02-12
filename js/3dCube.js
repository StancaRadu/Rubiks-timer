import * as THREE from '../node_modules/three/src/Three.js'
import gsap from '../node_modules/gsap/src/index.js'
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
camera.position.y = 3
camera.position.x = 2
renderer.setPixelRatio(window.devicePixelRatio)

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

    constructor(scramble_position){
        super("3d", scramble_position)
        this.moving = false
    }

    create3dPieces(){
        let ROTATION = -0.5 * Math.PI;

        const faces = {
            "F": { "color": green, "axis": "z", "ud": [1, 0, -1], "lr": [-1, 0, 1]}, 
            "B": { "color": blue, "axis": "z", "ud": [1, 0, -1], "lr": [1, 0, -1]}, 
            "U": { "color": yellow, "axis": "y", "ud": [-1, 0, 1], "lr": [-1, 0, 1]}, 
            "D": { "color": white, "axis": "y", "ud": [1, 0, -1], "lr": [-1, 0, 1]}, 
            "L": { "color": red, "axis": "x", "ud": [1, 0, -1], "lr": [-1, 0, 1]}, 
            "R": { "color": orange, "axis": "x", "ud": [1, 0, -1], "lr": [1, 0, -1]}, 
        }
        const UD_letters = ["U", "M", "D"]
        const LR_letters = ["L", "M", "R"]

        for (const face_id in faces) {
            const face = faces[face_id]
            for (let udi = 0; udi < 3; udi++) {
                for (let lri = 0; lri < 3; lri++) {
                    const ID = face_id + UD_letters[udi] + LR_letters[lri]

                    const sticker = new THREE.PlaneGeometry(1, 1);
                    const color = new THREE.MeshBasicMaterial({color: face["color"], side: THREE.DoubleSide} );
                    const mesh = new THREE.Mesh(sticker, color)

                    switch (face["axis"]) {
                        case "x":
                            mesh.position.x = face_id == "R" ? 1.5 : -1.5
                            mesh.position.y = face["ud"][udi]
                            mesh.position.z = face["lr"][lri]
                            mesh.rotation.y = ROTATION
                            
                            break;
                    
                        case "y":
                            mesh.position.x = face["lr"][lri]
                            mesh.position.y = face_id == "U" ? 1.5 : -1.5
                            mesh.position.z = face["ud"][udi]
                            mesh.rotation.x = ROTATION
                            
                            break;

                        case "z":
                            mesh.position.x = face["lr"][lri]
                            mesh.position.y = face["ud"][udi]
                            mesh.position.z = face_id == "F" ? 1.5 : -1.5

                            break;
                    }

                    this.pieces[ID] = mesh
                    scene.add(mesh)
                }
                
            }
        }
        
    }

    move(move_raw){
        if (this.moving) return
        this.moving = true

        let move = Cube.move_decoder(move_raw)
        let rotation = 0.5 * Math.PI
        let side = move["side"]
        let times = move["times"]
        let prime = move["prime"]
        move = Cube.moves[side]

        let group = new THREE.Group

        move["pieces"].forEach(piece => {
            group.add(this.pieces[piece])
        });
        scene.add(group)

        for (let i = 0; i < times; i++) {
            gsap.to(group.rotation, {
                x: move["axes"]["x"] * rotation * prime,
                y: move["axes"]["y"] * rotation * prime,
                z: move["axes"]["z"] * rotation * prime,

                onComplete: this.updateMatrix,
                onCompleteParams: [group, this, move_raw],
                
                duration: 0.3
            })
        }
    }

    updateMatrix(group, cube, move){
        group.children.forEach(piece => {
            let p_coords = new THREE.Vector3
            let r_coords = new THREE.Euler
            let quaternion = new THREE.Quaternion

            piece.getWorldPosition(p_coords)
            piece.getWorldQuaternion(quaternion)
            r_coords.setFromQuaternion(quaternion)

            piece.position.x = p_coords["x"]
            piece.position.y = p_coords["y"]
            piece.position.z = p_coords["z"]
            piece.rotation.x = r_coords["x"]
            piece.rotation.y = r_coords["y"]
            piece.rotation.z = r_coords["z"]

        });
        let length = group.children.length
        for (let index = 1; index < length+1; index++) {
            scene.add(group.children[length-index])
        }
        cube.updatePieces(move)
        cube.moving = false
    }
}

let cube3d = new Cube3d("scramble")
cube3d.create3dPieces()    

document.addEventListener('keyup', (event) => {
    if (document.getElementById("td").classList.contains("hidden")) return
    if (event.code == "KeyM")  cube3d.move("R")
    if (event.code == "KeyU") cube3d.move("R'")
    if (event.code == "KeyS") cube3d.move("D")
    if (event.code == "KeyG") console.log(cube3d.generateScramble())
});

// cube3d.move("B'")
// cube3d.move("D'")