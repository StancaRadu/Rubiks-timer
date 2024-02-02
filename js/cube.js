// class Cube{
//     constructor(type){
//         this.pieces = {
//             "cubl":{"y":white,"z":blue,"x":orange},
//             "cubr":{"y":white,"z":blue,"x":red},
//             "cufl":{"y":white,"z":green,"x":orange},
//             "cufr":{"y":white,"z":green,"x":red},

//             "cdbl":{"y":yellow,"z":blue,"x":orange},
//             "cdbr":{"y":yellow,"z":blue,"x":red},
//             "cdfl":{"y":yellow,"z":green,"x":orange},
//             "cdfr":{"y":yellow,"z":green,"x":red},

//             "eur":{"y":white,"x":red},
//             "eul":{"y":white,"x":orange},
//             "euf":{"y":white,"z":green},
//             "eub":{"y":white,"z":blue},

//             "edr":{"y":yellow,"x":red},
//             "edl":{"y":yellow,"x":orange},
//             "edf":{"y":yellow,"z":green},
//             "edb":{"y":yellow,"z":blue},

//             "efr":{"x":red,"z":green},
//             "ebr":{"x":red,"z":blue},

//             "efl":{"x":orange,"z":green},
//             "ebl":{"x":orange,"z":blue},

//             "mu":{"y":white},
//             "md":{"y":yellow},
//             "mr":{"x":red},
//             "ml":{"x":orange},
//             "mf":{"z":green},
//             "mb":{"z":blue}
//         }
//         this.sequences = {
//             "R":{
//                 "sequence":[
//                     ["cubr","cufr"],
//                     ["cufr","cdfr"],
//                     ["cdfr","cdbr"],
//                     ["cdbr","cubr"],
//                     ["eur","efr"],
//                     ["efr","edr"],
//                     ["edr","ebr"],
//                     ["ebr","eur"]],
//                 "special": "x"
//             },
//             "L":{
//                 "sequence":[
//                     ["cubl","cdbl"],
//                     ["cdbl","cdfl"],
//                     ["cdfl","cufl"],
//                     ["cufl","cubl"],
//                     ["eul","ebl"],
//                     ["ebl","edl"],
//                     ["edl","efl"],
//                     ["efl","eul"]],
//                 "special": "x"
//             },
//             "U":{
//                 "sequence":[   
//                     ["cubr","cubl"],
//                     ["cubl","cufl"],
//                     ["cufl","cufr"],
//                     ["cufr","cubr"],
//                     ["eub","eul"],
//                     ["eul","euf"],
//                     ["euf","eur"],
//                     ["eur","eub"]],
//                 "special": "y"
//             },
//             "D":{
//                 "sequence":[
//                     ["cdbr","cdfr"],
//                     ["cdfr","cdfl"],
//                     ["cdfl","cdbl"],
//                     ["cdbl","cdbr"],
//                     ["edb","edr"],
//                     ["edr","edf"],
//                     ["edf","edl"],
//                     ["edl","edb"]],
//                 "special": "y"
//             },
//             "F":{
//                 "sequence":[
//                     ["cufr","cufl"],
//                     ["cufl","cdfl"],
//                     ["cdfl","cdfr"],
//                     ["cdfr","cufr"],
//                     ["euf","efl"],
//                     ["efl","edf"],
//                     ["edf","efr"],
//                     ["efr","euf"]],
//                 "special": "z"
//             },
//             "B":{
//                 "sequence":[
//                     ["cubr","cdbr"],
//                     ["cdbr","cdbl"],
//                     ["cdbl","cubl"],
//                     ["cubl","cubr"],
//                     ["ebr","edb"],
//                     ["edb","ebl"],
//                     ["ebl","eub"],
//                     ["eub","ebr"]],
//                 "special": "z"
//             },
//             "M":{
//                 "sequence":[
//                     ["mu","mb"],
//                     ["mb","md"],
//                     ["md","mf"],
//                     ["mf","mu"],
//                     ["eub","edb"],
//                     ["edb","edf"],
//                     ["edf","euf"],
//                     ["euf","eub"]
//                 ],
//                 "specila":false
//             }
//         }
//         this.type = type;
//         this.scramble;
//         this.scrambles = []
//     }

//     generateScramble(length){
//         let moves = [
//                     [["R", "R'", "R2"],["L", "L'", "L2"]],
//                     [["F", "F'", "F2"],["B", "B'", "B2"]],
//                     [["U", "U'", "U2"],["D", "D'", "D2"]]
//                 ]
            
//                 let scramble = ""
//                 let lastMove;
//                 let secondLastMove = [5,5,5]
//                 let currentMove = [
//                     Math.floor(Math.random() * 3),
//                     Math.floor(Math.random() * 2),
//                     Math.floor(Math.random() * 3)
//                 ]
                
//                 for (let i = 0; i < length; i++){
//                     lastMove = currentMove
            
//                     let set = Math.floor(Math.random() * 3)
//                     let side = Math.floor(Math.random() * 2)
//                     let move = Math.floor(Math.random() * 3)
            
//                     if(lastMove[0] == secondLastMove[0]){
//                         while(set == lastMove[0]){
//                             set = Math.floor(Math.random() * 3)
//                         }
//                     }
//                     if(set == lastMove[0]){
//                         while(side == lastMove[1]){
//                             side = Math.floor(Math.random() * 2)
//                         }
//                     }
//                     currentMove = [set, side, move]
            
//                     scramble += `${moves[set][side][move]} `
            
//                     secondLastMove = lastMove
//                 }
//                 scramble = scramble.slice(0,-1)
//                 // htmlScramble.innerHTML = scramble
//                 let scramble_array = scramble.split(" ")
//                 return scramble_array
//     }
//     moveFormater(unformated){
//         console.log(this.pieces.length);
//         let slice, move, wide, direction, double;

//     }
//     doMoves(moves) {
//         moves.forEach(move => {
//             let modifier = 1
//             let antiClockwise = false
//             if (move.length == 2 & !isNaN(move[1])){
//                 modifier = parseInt(move[1])
//             }else if(move.length == 2){
//                 antiClockwise = true;
//             }
//             move = move[0].toUpperCase()
//             let sequence = this.sequences[move]["sequence"]
//             let special = this.sequences[move]["special"]

//             console.log({
//                 "modifier":modifier,
//                 "move":move,
//                 "sequence":sequence,
//                 "special":special,
//                 "cube":this.pieces,
//                 "'":antiClockwise
//             });

//             for (let i = 0; i < modifier; i++) {
//                 let newOrder = {}
//                 sequence.forEach(pair => {    
//                     const piece = antiClockwise ? pair[1] : pair[0]
//                     const swappedTo = antiClockwise ? pair[0] : pair[1]

//                     newOrder[piece] = {}

//                     for (const [newAxis, newColor] of Object.entries(this.pieces[swappedTo])) {
//                         if (newAxis == special) {
//                             newOrder[piece][special] = newColor
//                             continue
//                         }
//                         if (!special){
//                             for (const [oldAxis, oldColor] of Object.entries(this.pieces[piece])) {
//                                 ["x","y","z"].forEach(axis => {
//                                     if (![newAxis, oldAxis].includes(axis)) special = axis
//                                 });
//                             }
//                         }
//                         let orientaion;
//                         ["x","y","z"].forEach(axis => {
//                             if (![newAxis, special].includes(axis)) orientaion = axis
//                         });
//                         newOrder[piece][orientaion] = newColor
//                     }
//                 });
//                 sequence.forEach(pair => {
//                     this.pieces[pair[0]] = newOrder[pair[0]]
//                 });
//             }
//         });
//         this.addColorsToHTMLCube()
//     }
//     translatePiecesToHTMLID(){
//         let HTMLDictionary = {}
//         let HTMLIDs = []
//         for (const [pieceID, piece] of Object.entries(this.pieces)) {
//             HTMLDictionary[pieceID] = {}
//             for (const [squareID, square] of  Object.entries(piece)){
//                 const HTMLID = pieceID+squareID
//                 HTMLDictionary[pieceID][squareID] = HTMLID
//                 HTMLIDs.push(HTMLID)
//             }
//         }
//         return {"dictionary":HTMLDictionary,"array":HTMLIDs}
//     }
//     createHTMLCube(divID){
//         const HTMLIDs = this.translatePiecesToHTMLID()["array"]
//         const size = Math.sqrt(HTMLIDs.length/6)
//         const cubeDiv = document.getElementById(divID);
//         let faces = []
//         for (let i = 0; i < 6; i++) {
//             let gridArea = ["u","d","r","l","f","b"][i]
//             let faceDiv = cubeDiv.getElementsByClassName(`cubeClass${size}-${gridArea}-div`)[0]
//             let faceAreas = (getComputedStyle(faceDiv).gridTemplateAreas.replaceAll(`"`, "")).split(" ")
//             HTMLIDs.forEach(ID => {
//                 if(faceAreas.includes(ID)){
//                     let square = document.createElement("div")
//                     square.id = ID
//                     square.style.gridArea = ID                    
//                     square.classList.add("cubeClass-square-div")                
//                     faceDiv.appendChild(square)
//                 }
//             });
//         }
//         this.addColorsToHTMLCube()
//     }
//     addColorsToHTMLCube(){
//         for (const [piece, value] of Object.entries(this.pieces)) {
//             for (const [key, value] of Object.entries(this.pieces[piece])) {
//                 let square = document.getElementById(piece+key)
//                 let color = value
//                 square.style.backgroundColor = color
//             }
//         }
//     }
// }
class Puzzle{
    constructor(){

    }
}
let cubes = 0
class Cube{
    constructor(type,size = 3){
        cubes++;
        this.id = cubes;

        this.type = type;
        this.size = size;

        this.location;

    }
    createHTML(location, parent = true){
        location = document.getElementById(location)
        if (parent){
            let div = document.createElement("div");
            div.id = `cube${this.size}${this.id}`;
            location.appendChild(div);
            location = div;
        }
        this.location = location
        location.classList.add("cube-wrapper")
        ["u","d","r","l","f","b"].forEach(face => {
            let div = document.createElement("div");
            div.classList.add()
        });

        console.log(location);
    }
}
let cube = new Cube()
cube.createHTML("show-scramble", false)
