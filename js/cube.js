class Cube{
    constructor(){
        this.pieces = {
            "cubl":{"y":yellow,"z":blue,"x":red},
            "cubr":{"y":yellow,"z":blue,"x":orange},
            "cufl":{"y":yellow,"z":green,"x":red},
            "cufr":{"y":yellow,"z":green,"x":orange},

            "cdbl":{"y":white,"z":blue,"x":red},
            "cdbr":{"y":white,"z":blue,"x":orange},
            "cdfl":{"y":white,"z":green,"x":red},
            "cdfr":{"y":white,"z":green,"x":orange},

            "eur":{"y":yellow,"x":orange},
            "eul":{"y":yellow,"x":red},
            "euf":{"y":yellow,"z":green},
            "eub":{"y":yellow,"z":blue},

            "edr":{"y":white,"x":orange},
            "edl":{"y":white,"x":red},
            "edf":{"y":white,"z":green},
            "edb":{"y":white,"z":blue},

            "efr":{"x":orange,"z":green},
            "ebr":{"x":orange,"z":blue},

            "efl":{"x":red,"z":green},
            "ebl":{"x":red,"z":blue},

            "mu":{"y":yellow},
            "md":{"y":white},
            "mr":{"x":orange},
            "ml":{"x":red},
            "mf":{"z":green},
            "mb":{"z":blue}
        }
        this.sequences = {
            "R":{
                "sequence":[
                    ["cubr","cufr"],
                    ["cufr","cdfr"],
                    ["cdfr","cdbr"],
                    ["cdbr","cubr"],
                    ["eur","efr"],
                    ["efr","edr"],
                    ["edr","ebr"],
                    ["ebr","eur"]],
                "special": "x"
            },
            "L":{
                "sequence":[
                    ["cubl","cdbl"],
                    ["cdbl","cdfl"],
                    ["cdfl","cufl"],
                    ["cufl","cubl"],
                    ["eul","ebl"],
                    ["ebl","edl"],
                    ["edl","efl"],
                    ["efl","eul"]],
                "special": "x"
            },
            "U":{
                "sequence":[   
                    ["cubr","cubl"],
                    ["cubl","cufl"],
                    ["cufl","cufr"],
                    ["cufr","cubr"],
                    ["eub","eul"],
                    ["eul","euf"],
                    ["euf","eur"],
                    ["eur","eub"]],
                "special": "y"
            },
            "D":{
                "sequence":[
                    ["cdbr","cdfr"],
                    ["cdfr","cdfl"],
                    ["cdfl","cdbl"],
                    ["cdbl","cdbr"],
                    ["edb","edr"],
                    ["edr","edf"],
                    ["edf","edl"],
                    ["edl","edb"]],
                "special": "y"
            },
            "F":{
                "sequence":[
                    ["cufr","cufl"],
                    ["cufl","cdfl"],
                    ["cdfl","cdfr"],
                    ["cdfr","cufr"],
                    ["euf","efl"],
                    ["efl","edf"],
                    ["edf","efr"],
                    ["efr","euf"]],
                "special": "z"
            },
            "B":{
                "sequence":[
                    ["cubr","cdbr"],
                    ["cdbr","cdbl"],
                    ["cdbl","cubl"],
                    ["cubl","cubr"],
                    ["ebr","edb"],
                    ["edb","ebl"],
                    ["ebl","eub"],
                    ["eub","ebr"]],
                "special": "z"
            },
            "M":{
                "sequence":[
                    ["mu","mb"],
                    ["mb","md"],
                    ["md","mf"],
                    ["mf","mu"],
                    ["eub","edb"],
                    ["edb","edf"],
                    ["edf","euf"],
                    ["euf","eub"]
                ],
                "specila":false
            }
        }

    }

    moveFormater(unformated){
        console.log(this.pieces.length);
        let slice, move, wide, direction, double;

    }

    doMove(move) {
        let modifier = 1
        let antiClockwise = false
        if (move.length == 2 & !isNaN(move[1])){
            modifier = parseInt(move[1])
        }else if(move.length == 2){
            antiClockwise = true;
        }
        move = move[0].toUpperCase()
        let sequence = this.sequences[move]["sequence"]
        let special = this.sequences[move]["special"]

        // console.log({
        //     "modifier":modifier,
        //     "move":move,
        //     "sequence":sequence,
        //     "special":special,
        //     "cube":this.pieces,
        //     "'":antiClockwise
        // });

        for (let i = 0; i < modifier; i++) {
            let newOrder = {}
            sequence.forEach(pair => {    
                const piece = antiClockwise ? pair[1] : pair[0]
                const swappedTo = antiClockwise ? pair[0] : pair[1]

                newOrder[piece] = {}

                for (const [newAxis, newColor] of Object.entries(this.pieces[swappedTo])) {
                    if (newAxis == special) {
                        newOrder[piece][special] = newColor
                        continue
                    }
                    if (!special){
                        for (const [oldAxis, oldColor] of Object.entries(this.pieces[piece])) {
                            ["x","y","z"].forEach(axis => {
                                if (![newAxis, oldAxis].includes(axis)) special = axis
                            });
                        }
                    }
                    let orientaion;
                    ["x","y","z"].forEach(axis => {
                        if (![newAxis, special].includes(axis)) orientaion = axis
                    });
                    newOrder[piece][orientaion] = newColor
                }
            });
            sequence.forEach(pair => {
                this.pieces[pair[0]] = newOrder[pair[0]]
            });
        }

    }
    translatePiecesToHTMLID(){
        let HTMLDictionary = {}
        let HTMLIDs = []
        for (const [pieceID, piece] of Object.entries(this.pieces)) {
            HTMLDictionary[pieceID] = {}
            for (const [squareID, square] of  Object.entries(piece)){
                const HTMLID = pieceID+squareID
                HTMLDictionary[pieceID][squareID] = HTMLID
                HTMLIDs.push(HTMLID)
            }
        }
        console.log(HTMLDictionary);
        return {"dictionry":HTMLDictionary,"array":HTMLIDs}
    }
    createHTMLCube(divID){
        const HTMLIDs = this.translatePiecesToHTMLID()["array"]
        const size = Math.sqrt(HTMLIDs.length/6)
        const cubeDiv = document.getElementById(divID);
        let faces = []
        for (let i = 0; i < 6; i++) {
            let gridArea = ["u","d","r","l","f","b"][i]
            let faceDiv = cubeDiv.getElementsByClassName(`cubeClass${size}-${gridArea}-div`)[0]
            let faceAreas = (getComputedStyle(faceDiv).gridTemplateAreas.replaceAll(`"`, "")).split(" ")
            HTMLIDs.forEach(ID => {
                if(faceAreas.includes(ID)){
                    let square = document.createElement("div")
                    square.id = ID
                    square.style.gridArea = ID                    
                    faceDiv.appendChild(square)
                }
            });
        }
    }
}

let cube1 = new Cube()
cube1.doMove("R2")
cube1.doMove("F'")
cube1.doMove("M")
cube1.createHTMLCube("class-cube")