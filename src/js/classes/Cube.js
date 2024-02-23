import Canvas3d from "./Canvas";
import Timer from "./Timer";
import * as THREE from "three"
import gsap from "gsap";

let green = "hsl(100, 90%, 50%)"
let white = "hsl(0, 0%, 100%)"
let blue = "hsl(225, 90%, 50%)"
let yellow = "hsl(65, 90%, 50%)"
let red = "hsl(0, 90%, 50%)"
let orange = "hsl(30, 90%, 50%)"

export default class Cube{

    static ammount = 0
    static moves = {
        R : {
            pieces: [
                "FDR", "FMR", "FUR", "UDR", "UMR", "UUR", "BUL", "BML", "BDL", "DDR", "DMR", "DUR",
                "RUR", "RUM", "RUL", "RMR", "RMM", "RML", "RDR", "RDM", "RDL"
            ],
            pairs: [
                ["UDR", "FDR"], ["BUL", "UDR"], ["DDR", "BUL"], ["FDR", "DDR"],
                ["UUR", "FUR"], ["BDL", "UUR"], ["DUR", "BDL"], ["FUR", "DUR"],
                ["UMR", "FMR"], ["BML", "UMR"], ["DMR", "BML"], ["FMR", "DMR"],

                ["RDL", "RDR"], ["RDR", "RUR"], ["RUR", "RUL"], ["RUL", "RDL"],
                ["RML", "RUM"], ["RUM", "RMR"], ["RMR", "RDM"], ["RDM", "RML"]
            ],
            axes: { x: -1, y: 0, z: 0 }
        },
        D : {
            pieces: [
                "FDR", "FDM", "FDL", "LDR", "LDM", "LDL", "BDR", "BDM", "BDL", "RDR", "RDM", "RDL",
                "DUR", "DUM", "DUL", "DMR", "DMM", "DML", "DDR", "DDM", "DDL"
            ],
            pairs: [
                ["FDL", "LDL"], ["LDL", "BDL"], ["BDL", "RDL"], ["RDL", "FDL"],
                ["FDR", "LDR"], ["LDR", "BDR"], ["BDR", "RDR"], ["RDR", "FDR"],
                ["FDM", "LDM"], ["LDM", "BDM"], ["BDM", "RDM"], ["RDM", "FDM"],

                ["DDL", "DUL"], ["DUL", "DUR"], ["DUR", "DDR"], ["DDR", "DDL"],
                ["DUM", "DMR"], ["DMR", "DDM"], ["DDM", "DML"], ["DML", "DUM"]
            ],
            axes: { x: 0, y: -1, z: 0 }
        }
    }
    static move_decoder(move){
        let side = move[0]
        let times = /\d/.test(move) ? parseInt(move.replace(/\D/g,'')) : 1;
        let prime = move.includes("'") ? -1 : 1

        if (!(side in Cube.moves)) return

        return { side: side, times: times, prime: prime }
    }

    constructor(type, scramble_location=null, timer_location=null){
        this.id = Cube.ammount;
        Cube.ammount++;

        this.scramble_location = scramble_location
        this.scramble;
        this.pieces = {
            "FUL": null,"FUM": null, "FUR": null, "FML": null, "FMM": null, "FMR": null, "FDL": null, "FDM": null, "FDR": null,
            "BUL": null, "BUM": null, "BUR": null, "BML": null, "BMM": null, "BMR": null, "BDL": null, "BDM": null, "BDR": null, 
            "UUL": null, "UUM": null, "UUR": null, "UML": null, "UMM": null, "UMR": null, "UDL": null, "UDM": null, "UDR": null, 
            "DUL": null, "DUM": null, "DUR": null, "DML": null, "DMM": null, "DMR": null, "DDL": null, "DDM": null, "DDR": null, 
            "RUL": null, "RUM": null, "RUR": null, "RML": null, "RMM": null, "RMR": null, "RDL": null, "RDM": null, "RDR": null,
            "LUL": null, "LUM": null, "LUR": null, "LML": null, "LMM": null, "LMR": null, "LDL": null, "LDM": null, "LDR": null
        }

        this.type = type;

        this.location;

        if (timer_location) {
            this.timer = new Timer(timer_location, this)
        }

    }

    move(move){
        let side = move[0]
        let times = /\d/.test(move) ? parseInt(move.replace(/\D/g,'')) : 1;
        let prime = move.includes("'") ? true : false

        if (!(side in Cube.moves)) return
    }
    updatePieces(move){
        move = Cube.move_decoder(move)
        let side = move["side"]
        let prime = move["prime"]

        const copy = Object.assign({}, this.pieces);
        console.log(copy);
        Cube.moves[side]["pairs"].forEach(pair => {
            if (prime == -1) this.pieces[pair[0]] = copy[pair[1]]
            if (prime == 1) this.pieces[pair[1]] = copy[pair[0]]
        });
    }
    generateScramble(lenght = 20){
        let moves = [
            ["R", "L"],
            ["U", "D"], 
            ["F", "B"]
        ]

        let scramble = []
        let samemove = 0
        let last_p;
        let last;
        while (scramble.length < lenght){

            let double = Math.floor(Math.random()*2)
            double = double ? "2" : ""
            let prime = Math.floor(Math.random()*2)
            prime = (prime && !double) ? "'" : ""
            let move1 = 3
            let move2 = 3

            while (!([0,1,2].includes(move1))) {
                move1 = Math.floor(Math.random()*3)
            }
            while (!([0,1].includes(move2))) {
                move2 = Math.floor(Math.random()*2)
            }


            if (move1 == last_p && move2 == last) continue

            if (move1 == last_p) {
                samemove++
                if (samemove > 1) continue
            }else samemove = 0

            last_p = move1
            last = move2

            let move = moves[move1][move2] + double + prime
            scramble.push(move)
        }
        this.scramble = scramble
        return scramble
    }
    displayScramble(new_scramble){
        let scramble = this.scramble
        if (new_scramble) scramble = this.generateScramble()
        let text = "";
        scramble.forEach(move => {
            text += move + " "
        });
        text = text.slice(0, -1)

        document.getElementById(this.scramble_location).innerHTML = text
    }


}

export class Cube2d extends Cube{
    constructor(){
        super("2d")
        
    }
}

export class Cube3d extends Cube{

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
