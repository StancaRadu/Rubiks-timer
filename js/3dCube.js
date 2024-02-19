import * as THREE from 'three'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

let green = "hsl(100, 90%, 50%)"
let white = "hsl(0, 0%, 100%)"
let blue = "hsl(225, 90%, 50%)"
let yellow = "hsl(65, 90%, 50%)"
let red = "hsl(0, 90%, 50%)"
let orange = "hsl(30, 90%, 50%)"

class Canvas3d{
    constructor(location){
        this.parent = document.getElementById(location)
        this.canvas = document.createElement("canvas")
        this.canvas.classList.add("bg")
        this.parent.appendChild(this.canvas)

        this.scene = new THREE.Scene()
        this.light = new THREE.AmbientLight( white )
        this.camera = new THREE.PerspectiveCamera(50)
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, alpha: true })
        this.controls = new OrbitControls(this.camera, this.canvas)
        this.defaults()
        this.addResizer(this, this.parent)
        this.animate(this)
    }
    cameraPosition(positions){
        for (const key in positions) {
            switch (key) {
                case "x":
                    this.camera.position.x = positions[key]
                    break;
                case "y":
                    this.camera.position.y = positions[key]
                    break;
                case "z":
                    this.camera.position.z = positions[key]
                    break;
            }
        }
    }
    defaults(){
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.scene.add(this.light)
        this.scene.add(this.camera)
        this.cameraPosition({x:2, y:3, z:8})
        this.controls.enableDamping = true;
        this.controls.enablePan = false;
        this.controls.enableZoom = false;

    }
    animate(canvas){
        requestAnimationFrame(()=>{canvas.animate(canvas)})
        if(canvas.parent.classList.contains("hidden")) return;
        canvas.controls.update()
        canvas.renderer.render(canvas.scene, canvas.camera)
    }
    addResizer(canvas, location){
        const resizeObserver = new ResizeObserver((entries) => {
            let size = {
                width: location.clientWidth,
                height: location.clientHeight
            }
            canvas.renderer.setSize(size.width, size.height);
            canvas.camera.aspect = size.width / size.height
            canvas.camera.updateProjectionMatrix()
        });
        resizeObserver.observe(location)
    }
}
class Cube3d extends Cube{

    constructor(scramble_position, location){
        super("3d", scramble_position)
        this.canvas = new Canvas3d(location)
        this.moving = false
        this.addKeyInputs(this)
        this.create3dPieces()
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
                    this.canvas.scene.add(mesh)
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
        this.canvas.scene.add(group)

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
            cube.canvas.scene.add(group.children[length-index])
        }
        cube.updatePieces(move)
        cube.moving = false
    }
    addKeyInputs(cube){
        document.addEventListener('keyup', (event) => {
            if (this.canvas.parent.classList.contains("hidden")) return
            if (event.code == "KeyM")  cube.move("R")
            if (event.code == "KeyU") cube.move("R'")
            if (event.code == "KeyS") cube.move("D")
            if (event.code == "KeyG") console.log(cube.generateScramble())
        });
    }
}

export default Cube3d

