class Cube{
    constructor(){
        this.corners = {
            "cubl":{"t":"","b":"","":"l"},
            "cubr":{"t":"","b":"","":"r"},
            "cufl":{"t":"","f":"","":"l"},
            "cufr":{"t":"","f":"","":"r"},
        
            "cdbl":{"t":"","b":"","l":""},
            "cdbr":{"t":"","b":"","r":""},
            "cdfl":{"t":"","f":"","l":""},
            "cdfr":{"t":"","f":"","r":""}
        }
        this.sequences = {
            "R":{
                "sequence":[
                    ["cubr","cufr"],
                    ["cufr","cdfr"],
                    ["cdfr","cdbr"],
                    ["cdbr","cubr"]],
                "special": "r"
            },
            "L":{
                "sequence":[
                    ["cubl","cdbl"],
                    ["cdbl","cdfl"],
                    ["cdfl","cufl"],
                    ["cufl","cubl"]],
                "special": "l"
            },
            "U":{
                "sequence":[   
                    ["cubr","cubl"],
                    ["cubl","cufl"],
                    ["cufl","cufr"],
                    ["cufr","cubr"]],
                "special": "t"
            },
            "D":{
                "sequence":[
                    ["cdbr","cdfr"],
                    ["cdfr","cdfl"],
                    ["cdfl","cdbl"],
                    ["cdbl","cdbr"]],
                "special": "t"
            },
            "F":{
                "sequence":[
                    ["cufr","cufl"],
                    ["cufl","cdfl"],
                    ["cdfl","cdfr"],
                    ["cdfr","cufr"]],
                "special": "f"
            },
            "B":{
                "sequence":[
                    ["cubr","cdbr"],
                    ["cdbr","cdbl"],
                    ["cdbl","cubl"],
                    ["cubl","cubr"]],
                "special": "b"
            }
        }

    }

    doMove(move = "R2") {
        let modifier = 1
        if (move.length == 2 & !isNaN(move[1])){
            modifier = parseInt(move[1])
        }
        move = move[0].toUpperCase()
        console.log({"modifier":modifier,"move":move});

        
    }

}

let cube1 = new Cube()
cube1.doMove()