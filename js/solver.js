class Cube{
    constructor(){
        this.pieces = {
            "cubl":{"y":"yellow","z":"blue","x":"red"},
            "cubr":{"y":"yellow","z":"blue","x":"orange"},
            "cufl":{"y":"yellow","z":"green","x":"red"},
            "cufr":{"y":"yellow","z":"green","x":"orange"},
        
            "cdbl":{"y":"white","z":"blue","x":"red"},
            "cdbr":{"y":"white","z":"blue","x":"orange"},
            "cdfl":{"y":"white","z":"green","x":"red"},
            "cdfr":{"y":"white","z":"green","x":"orange"}
        }
        this.sequences = {
            "R":{
                "sequence":[
                    ["cubr","cufr"],
                    ["cufr","cdfr"],
                    ["cdfr","cdbr"],
                    ["cdbr","cubr"]],
                "special": "x"
            },
            "L":{
                "sequence":[
                    ["cubl","cdbl"],
                    ["cdbl","cdfl"],
                    ["cdfl","cufl"],
                    ["cufl","cubl"]],
                "special": "x"
            },
            "U":{
                "sequence":[   
                    ["cubr","cubl"],
                    ["cubl","cufl"],
                    ["cufl","cufr"],
                    ["cufr","cubr"]],
                "special": "y"
            },
            "D":{
                "sequence":[
                    ["cdbr","cdfr"],
                    ["cdfr","cdfl"],
                    ["cdfl","cdbl"],
                    ["cdbl","cdbr"]],
                "special": "y"
            },
            "F":{
                "sequence":[
                    ["cufr","cufl"],
                    ["cufl","cdfl"],
                    ["cdfl","cdfr"],
                    ["cdfr","cufr"]],
                "special": "z"
            },
            "B":{
                "sequence":[
                    ["cubr","cdbr"],
                    ["cdbr","cdbl"],
                    ["cdbl","cubl"],
                    ["cubl","cubr"]],
                "special": "z"
            }
        }

    }

    doMove(move = "R") {
        let modifier = 1
        if (move.length == 2 & !isNaN(move[1])){
            modifier = parseInt(move[1])
        }else if(move.length == 2){
            modifier = -1;
        }
        move = move[0].toUpperCase()
        let sequence = this.sequences[move]["sequence"]
        let special = this.sequences[move]["special"]
        let toSwap = [];
        ["x","y","z"].forEach(element => {
            if (element != special) toSwap.push(element);
        });
        let copy = {}
        
        
        for (let i = 0; i < modifier; i++) {
            copy = {}
            sequence.forEach(pair => {
                copy = Object.assign(copy, this.pieces[pair[0]]);
                // copy[pair[0]] = this.pieces[pair[0]]
                console.log(copy);
            });
            sequence.forEach(pair => {
                this.pieces[pair[0]][special] = copy[pair[1]][special]
                this.pieces[pair[0]][toSwap[0]] = copy[pair[1]][toSwap[1]]
                this.pieces[pair[0]][toSwap[1]] = copy[pair[1]][toSwap[0]]
            });
        }
        

        console.log(this.pieces);
        console.log(copy);

        console.log({
            "modifier":modifier,
            "move":move,
            "sequence":sequence,
            "special":special,
            "permutations":toSwap,
            "copy":copy
        });

    }

}

let cube1 = new Cube()
cube1.doMove()