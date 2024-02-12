class Cube{

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

    constructor(type, scramble_position){
        this.id = Cube.ammount;
        Cube.ammount++;

        this.scramble_position = scramble_position
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

        document.getElementById(this.scramble_position).innerHTML = text
    }


}

class Cube2d extends Cube{
    constructor(){
        super("2d")
        
    }
}

let cube = new Cube("2d", "scramble")
cube.displayScramble(true)
console.log(cube.scramble);
