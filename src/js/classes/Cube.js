import Canvas3d from "./Canvas";
import Timer from "./Timer";
import * as THREE from "three"
import gsap from "gsap";
import main from "../../../app";

class __cl{
    constructor(){
        this.structure = {
            pieces: {
                F:{
                    stickers: {
                        FMM: null,
                    },
                },
                B:{
                    stickers: {
                        BMM: null,
                    },
                },
                U:{
                    stickers: {
                        UMM: null,
                    },
                },
                D:{
                    stickers: {
                        DMM: null,
                    },
                },
                L:{
                    stickers: {
                        LMM: null,
                    },
                },
                R:{
                    stickers: {
                        RMM: null,
                    },
                },

                FDL:{
                    stickers: {
                        FDL: null,
                        LDR: null,
                        DUL: null,
                    },
                    relations: {
                        F: {
                            piece: "FUL",
                            stickers: ["FDL", "FUL"]
                        },
                        D: {},
                        L: {},
                    }
                },
                FDR:{
                    stickers: {
                        FDR: null,
                        RDL: null,
                        DUR: null,
                    },
                },
                FUL:{
                    stickers: {
                        FUL: null,
                        LUR: null,
                        UDL: null,
                    },
                },
                FUR:{
                    stickers: {
                        FUR: null,
                        RUL: null,
                        UDR: null,
                    },
                },
                FL:{
                    stickers: {
                        FML: null,
                        LMR: null,
                    },
                },
                FR:{
                    stickers: {
                        FMR: null,
                        RML: null,
                    },
                },
                FU:{
                    stickers: {
                        FUM: null,
                        UDM: null,
                    },
                },
                FD:{
                    stickers: {
                        FDM: null,
                        DUM: null,
                    },
                },

                BDL:{
                    stickers: {
                        BDL: null,
                        RDL: null,
                        DDR: null,
                    },
                },
                BDR:{
                    stickers: {
                        BDR: null,
                        LDL: null,
                        DDR: null,
                    },
                },
                BUL:{
                    stickers: {
                        BUL: null,
                        LUL: null,
                        UUL: null,
                    },
                },
                BUR:{
                    stickers: {
                        BUR: null,
                        LUL: null,
                        UUL: null,
                    },
                },
                BL:{
                    stickers: {
                        BML: null,
                        RMR: null,
                    },
                },
                BR:{
                    stickers: {
                        BMR: null,
                        LML: null,
                    },
                },
                BU:{
                    stickers: {
                        BUM: null,
                        UUM: null,
                    },
                },
                BD:{
                    stickers: {
                        BDM: null,
                        DDM: null,
                    },
                },

                LU:{
                    stickers: {
                        LUM: null,
                        UML: null,
                    },
                },
                LD:{
                    stickers: {
                        LDM: null,
                        DML: null,
                    },
                },
                RU:{
                    stickers: {
                        RUM: null,
                        UMR: null,
                    },
                },
                RD:{
                    stickers: {
                        LDR: null,
                        DMR: null,
                    },
                },
            },
            stickers_id: [
                "FUL", "FUM", "FUR", "FML", "FMM", "FMR", "FDL", "FDM", "FDR",
                "BUL", "BUM", "BUR", "BML", "BMM", "BMR", "BDL", "BDM", "BDR", 
                "UUL", "UUM", "UUR", "UML", "UMM", "UMR", "UDL", "UDM", "UDR", 
                "DUL", "DUM", "DUR", "DML", "DMM", "DMR", "DDL", "DDM", "DDR", 
                "RUL", "RUM", "RUR", "RML", "RMM", "RMR", "RDL", "RDM", "RDR",
                "LUL", "LUM", "LUR", "LML", "LMM", "LMR", "LDL", "LDM", "LDR",
            ],
        }
    }

    find(sticker){

    }
    interator(){
        for (const piece in this.structure['pieces']) {
            for (const sticker in this.structure["pieces"][piece]["stickers"]) {
            }
        }
    }
}
class Sticker{
}
class Piece{
}


export default class Cube{

    static ammount = 0
    static moves = {
        F : {
            pieces: [
                "UDL", "UDM", "UDR", "RUL", "RML", "RDL", "DUR", "DUM", "DUL", "LDR", "LMR", "LUR",
                "FUR", "FUM", "FUL", "FMR", "FMM", "FML", "FDR", "FDM", "FDL"
            ],
            pairs: [
                ["UDR", "RDL"], ["RDL", "DUL"], ["DUL", "LUR"], ["LUR", "UDR"],
                ["UDL", "RUL"], ["RUL", "DUR"], ["DUR", "LDR"], ["LDR", "UDL"],
                ["UDM", "RML"], ["RML", "DUM"], ["DUM", "LMR"], ["LMR", "UDM"],

                ["FUR", "FDR"], ["FDR", "FDL"], ["FDL", "FUL"], ["FUL", "FUR"],
                ["FUM", "FMR"], ["FMR", "FDM"], ["FDM", "FML"], ["FML", "FUM"]
            ],
            axes: { x: 0, y: 0, z: -1 },
        },
        B : {
            pieces: [
                "UUL", "UUM", "UUR", "RUR", "RMR", "RDR", "DDR", "DDM", "DDL", "LDL", "LML", "LUL",
                "BUR", "BUM", "BUL", "BMR", "BMM", "BML", "BDR", "BDM", "BDL"
            ],
            pairs: [
                ["UUL", "LDL"], ["LDL", "DDR"], ["DDR", "RUR"], ["RUR", "UUL"],
                ["UUR", "LUL"], ["LUL", "DDL"], ["DDL", "RDR"], ["RDR", "UUR"],
                ["UUM", "LML"], ["LML", "DDM"], ["DDM", "RMR"], ["RMR", "UUM"],

                ["BUL", "BUR"], ["BUR", "BDR"], ["BDR", "BDL"], ["BDL", "BUL"],
                ["BUM", "BMR"], ["BMR", "BDM"], ["BDM", "BML"], ["BML", "BUM"]
            ],
            axes: { x: 0, y: 0, z: 1 },
        },
        R : {
            pieces: [
                "FDR", "FMR", "FUR", "UDR", "UMR", "UUR", "BUL", "BML", "BDL", "DDR", "DMR", "DUR",
                "RUR", "RUM", "RUL", "RMR", "RMM", "RML", "RDR", "RDM", "RDL"
            ],
            pairs: [
                ["FUR", "UUR"], ["UUR", "BDL"], ["BDL", "DUR"], ["DUR", "FUR"],
                ["FDR", "UDR"], ["UDR", "BUL"], ["BUL", "DDR"], ["DDR", "FDR"],
                ["FMR", "UMR"], ["UMR", "BML"], ["BML", "DMR"], ["DMR", "FMR"],

                ["RUL", "RUR"], ["RUR", "RDR"], ["RDR", "RDL"], ["RDL", "RUL"],
                ["RUM", "RMR"], ["RMR", "RDM"], ["RDM", "RML"], ["RML", "RUM"]
            ],
            axes: { x: -1, y: 0, z: 0 },
        },
        L : {
            pieces: [
                "FDL", "FML", "FUL", "UDL", "UML", "UUL", "BUR", "BMR", "BDR", "DDL", "DML", "DUL",
                "LUR", "LUM", "LUL", "LMR", "LMM", "LML", "LDR", "LDM", "LDL"
            ],
            pairs: [
                ["FUL", "DUL"], ["DUL", "BDR"], ["BDR", "UUL"], ["UUL", "FUL"],
                ["FDL", "DDL"], ["DDL", "BUR"], ["BUR", "UDL"], ["UDL", "FDL"],
                ["FML", "DML"], ["DML", "BMR"], ["BMR", "UML"], ["UML", "FML"],

                ["LUL", "LUR"], ["LUR", "LDR"], ["LDR", "LDL"], ["LDL", "LUL"],
                ["LUM", "LMR"], ["LMR", "LDM"], ["LDM", "LML"], ["LML", "LUM"]
            ],
            axes: { x: 1, y: 0, z: 0 },
        },
        D : {
            pieces: [
                "FDR", "FDM", "FDL", "LDR", "LDM", "LDL", "BDR", "BDM", "BDL", "RDR", "RDM", "RDL",
                "DUR", "DUM", "DUL", "DMR", "DMM", "DML", "DDR", "DDM", "DDL"
            ],
            pairs: [
                ["FDR", "RDR"], ["RDR", "BDR"], ["BDR", "LDR"], ["LDR", "FDR"],
                ["FDL", "RDL"], ["RDL", "BDL"], ["BDL", "LDL"], ["LDL", "FDL"],
                ["FDM", "RDM"], ["RDM", "BDM"], ["BDM", "LDM"], ["LDM", "FDM"],

                ["DUL", "DUR"], ["DUR", "DDR"], ["DDR", "DDL"], ["DDL", "DUL"],
                ["DML", "DUM"], ["DUM", "DMR"], ["DMR", "DDM"], ["DDM", "DML"]
            ],
            axes: { x: 0, y: 1, z: 0 },
        },
        U : {
            pieces: [
                "FUR", "FUM", "FUL", "RUR", "RUM", "RUL", "BUR", "BUM", "BUL", "LUR", "LUM", "LUL",
                "UUR", "UUM", "UUL", "UMR", "UMM", "UML", "UDR", "UDM", "UDL"
            ],
            pairs: [
                ["FUL", "LUL"], ["LUL", "BUL"], ["BUL", "RUL"], ["RUL", "FUL"],
                ["FUR", "LUR"], ["LUR", "BUR"], ["BUR", "RUR"], ["RUR", "FUR"],
                ["FUM", "LUM"], ["LUM", "BUM"], ["BUM", "RUM"], ["RUM", "FUM"],

                ["UUL", "UUR"], ["UUR", "UDR"], ["UDR", "UDL"], ["UDL", "UUL"],
                ["UUM", "UMR"], ["UMR", "UDM"], ["UDM", "UML"], ["UML", "UUM"]
            ],
            axes: { x: 0, y: -1, z: 0 },
        }
    }
    static faces = ["F", "B", "U", "D", "L", "R"]
         
    static move_decoder(move){
        let side = move[0]
        let times = /\d/.test(move) ? parseInt(move.replace(/\D/g,'')) : 1;
        let prime = move.includes("'") ? -1 : 1

        try{
            if (!(side in Cube.moves))  throw "this move doesn't exist";
            return { side: side, times: times, prime: prime }
        }catch( message ){
            console.warn(`${message}: ${side}`);
            return
        }
        

    }

    // STATIC
    
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

    updatePieces(move){
        move = Cube.move_decoder(move)
        let side = move["side"]
        let prime = move["prime"]
        let times = move["times"]
        for (let i = 0; i < times; i++) {
            let copy_i = {}
            for (const id in this.pieces) {
                let piece = this.pieces[id]
                copy_i[id] = piece
            }
            Cube.moves[side]["pairs"].forEach(pair => {
                if (prime == 1) {
                    this.pieces[pair[1]] = copy_i[pair[0]]
                }
                else if (prime == -1) {
                    this.pieces[pair[0]] = copy_i[pair[1]]
                }
                
            });
        }
    }
    generateScramble(lenght = main.scramble_length){
        let moves = [
            ["R", "L"],
            ["U", "D"], 
            ["F", "B"]
        ]

        let scramble = []
        let same_set = 0
        let last_set;
        let last_side;
        while (scramble.length < lenght){

            let double = Math.floor(Math.random()*2)
            double = double ? "2" : ""
            let prime = Math.floor(Math.random()*2)
            prime = (prime && !double) ? "'" : ""
            
            let set = Math.floor(Math.random()*3)
            let side = Math.floor(Math.random()*2)

            if (set == last_set && side == last_side) continue

            if (set == last_set) { if (++same_set > 1) continue }
            else same_set = 0

            last_set = set
            last_side = side

            let move = moves[set][side] + double + prime
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
    constructor(location, scramble_location, timer_location, type = "normal"){
        super("2d", scramble_location, timer_location)
        this.location = location
        this.colors = {
            F: main.colors['green'],
            B: main.colors['blue'],
            U: main.colors['yellow'],
            D: main.colors['white'],
            L: main.colors['red'],
            R: main.colors['orange']
        }
        if (type == "normal") { this.create() }
        else if ( type = "top" ) { this.create_small() }

    }
    create(){
        this.cube = document.createElement("cube")
        this.location.appendChild(this.cube)
        let faces = ["F", "B", "U", "D", "L", "R"]
        let stickers = ["UL", "UM", "UR", "ML", "MM", "MR","DL", "DM", "DR"]
        for (let i = 0; i < 6; i++) {
            let face = document.createElement("face")
            face.classList.add(faces[i])
            this.cube.appendChild(face)
            for (let j = 0; j < 9; j++) {
                let sticker = document.createElement("sticker")
                sticker.classList.add(stickers[j])
                sticker.style.backgroundColor = this.colors[faces[i]]
                face.appendChild(sticker)
                let id = faces[i] + stickers[j]
                this.pieces[id] = sticker
            }
        }
    }
    create_small(){
        this.cube = this.location
        let faces = ["U", "F", "B", "L", "R"]
        let stickers = ["UL", "UM", "UR", "ML", "MM", "MR","DL", "DM", "DR"]
        let side_stickers = ["UL", "UM", "UR"]
        let face = document.createElement("face")
        face.classList.add(faces[0])
        this.cube.appendChild(face)
        for (let j = 0; j < 9; j++) {
            let sticker = document.createElement("sticker")
            sticker.classList.add(stickers[j])
            sticker.style.backgroundColor = this.colors[faces[0]]
            face.appendChild(sticker)
            let id = faces[0] + stickers[j]
            this.pieces[id] = sticker
        }
        for (let i = 1; i < 6; i++) {
            let face = document.createElement("face")
            face.classList.add(faces[i])
            this.cube.appendChild(face)
            for (let j = 0; j < 3; j++) {
                let sticker = document.createElement("sticker")
                sticker.classList.add(side_stickers[j])
                sticker.style.backgroundColor = this.colors[faces[i]]
                face.appendChild(sticker)
                let id = faces[i] + side_stickers[j]
                this.pieces[id] = sticker
            }
        }

    }
    move(move){
        this.updatePieces(move)
        this.clearFaces()
        for (const id in this.pieces) {
            let face = id[0]
            let location = id.slice(1,3)
            let html = this.cube.querySelector(`face.${face}`)
            this.pieces[id].className = ""
            this.pieces[id].classList.add(location)
            html.append(this.pieces[id])
            // html.style.backgroundColor = 
        }
    }
    move_using_(scramble = this.scramble){
        for ( const move of scramble ) {
            this.move(move)
        }
    }
    clearFaces(){
        ["F", "B", "U", "D", "L", "R"].forEach(face => {
            let html = this.cube.querySelector(`face.${face}`)
            if (html) html.replaceChildren()
        });
    }

}

export class Cube3d extends Cube{
    static keys = {
        KeyN: "F",
        KeyV: "F'",
        KeyO: "B",
        KeyW: "B'",
        KeyJ: "U",
        KeyF: "U'",
        KeyS: "D",
        KeyL: "D'",
        KeyC: "L",
        KeyT: "L'",
        KeyU: "R",
        KeyM: "R'",
    }

    constructor(location, scramble_position, timer_location){
        super("3d", scramble_position, timer_location)
        this.canvas = new Canvas3d(location)
        this.moving = false
        this.set_moving = false
        this.faces = {
            "F": { "color": main.colors["green"], "axis": "z", "ud": [1, 0, -1], "lr": [-1, 0, 1]}, 
            "B": { "color": main.colors["blue"], "axis": "z", "ud": [1, 0, -1], "lr": [1, 0, -1]}, 
            "U": { "color": main.colors["yellow"], "axis": "y", "ud": [-1, 0, 1], "lr": [-1, 0, 1]}, 
            "D": { "color": main.colors["white"], "axis": "y", "ud": [1, 0, -1], "lr": [-1, 0, 1]}, 
            "L": { "color": main.colors["red"], "axis": "x", "ud": [1, 0, -1], "lr": [-1, 0, 1]}, 
            "R": { "color": main.colors["orange"], "axis": "x", "ud": [1, 0, -1], "lr": [1, 0, -1]}, 
        }
        this.addKeyInputs(this)
        this.create3dPieces()
    }

    create3dPieces(){
        let ROTATION = -0.5 * Math.PI;

        
        const UD_letters = ["U", "M", "D"]
        const LR_letters = ["L", "M", "R"]

        for (const face_id in this.faces) {
            const face = this.faces[face_id]
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

    async move(move_raw){
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
        const ready = new Promise((resolve) => {
            gsap.to(group.rotation, {
                x: move["axes"]["x"] * rotation * prime * times,
                y: move["axes"]["y"] * rotation * prime * times,
                z: move["axes"]["z"] * rotation * prime * times,

                onComplete:() => {
                    this.updateMatrix(group, this, move_raw)
                    setTimeout(() => {
                        resolve("ready");
                    }, 50);
                },
                
                duration: 0.3 * times
            })
        })
        return await ready
    }

    async move_using_(scramble = this.scramble){
        if (this.set_moving) return
        this.set_moving = true
        for ( const move of scramble ) {
            await this.move(move)
        }
        this.set_moving = false
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
        for (let index = length-1; index >= 0; index--) {
            cube.canvas.scene.add(group.children[index])
        }
        cube.updatePieces(move)
        cube.moving = false
    }
    addKeyInputs(cube){
        document.addEventListener('keyup', (event) => {
            if (this.canvas.parent.classList.contains("hidden")) return
            if (event.code == "KeyG") {
                console.log(cube.generateScramble())
                cube.move_using_()
            }
            if (!(Object.keys(Cube3d.keys).includes(event.code))) return
            cube.move(Cube3d.keys[event.code])
        });
    }

}


