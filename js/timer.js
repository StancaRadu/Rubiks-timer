import { rubik_set } from "./db";

function timer(){
    
    let ongoing;

    let seconds = 0;
    let tens = 0;
    let minutes = 0;
    
    let held = 0;
    let ready = 0;
    let reset = 0;
    let newscrable = 0;

    let htmlSeconds = document.getElementById("seconds")
    let htmlTens = document.getElementById("tens")
    let htmlMinutes = document.getElementById("minutes")
    let htmlTime = document.getElementById("time")
    let htmlTimer = document.getElementById("timer-div")
    let htmlScramble = document.getElementById("scramble")


    let cube = unscrambledCube()
    addCubeToHtml(cube)
    let scramble = generateScramble(20)
    
    
    document.addEventListener('keyup', (event) => {
        var code = event.code;

        if(code == "Space") {
            held = 0
            htmlTimer.style.color = "black"
            
            if(ready & !reset){

                seconds = 0;
                tens = 0;
                minutes = 0;

                ongoing = setInterval(startTimer, 10);
                newscrable = 1
                reset = 1
                ready = 0
            }else {
                reset = 0 
            }
        }
    });
    document.addEventListener('keydown', (event) => {
        var code = event.code;
        if(code == "Space") {
            held++

            if (reset) {
                if (newscrable){
                    cube = unscrambledCube()
                    scramble = generateScramble(20)
                    newscrable = 0
                }
                clearInterval(ongoing)
                console.log(rubikSolves);
                rubikSolves.push(`${minutes}.${seconds}.${tens}`)
                addData(avgChart, "Avg.5", parseInt(seconds))
                rubik_set("asdad", "SDa")

            }
            
            if (held < 3 & !reset) htmlTimer.style.color = yellow
            else if (held > 3 & !reset) {
                htmlTimer.style.color = green
                htmlMinutes.innerHTML = "";
                htmlSeconds.innerHTML = "00";
                htmlTens.innerHTML ="00";
                ready = 1
            }
        }
    });
    function startTimer(){
        tens++; 
        
        if(tens <= 9) htmlTens.innerHTML = "0" + tens;
        
        if (tens > 9) htmlTens.innerHTML = tens;

        
        if (tens > 99) {
            if (seconds < 59) seconds++    
            else {
                seconds = 0
                minutes++
                htmlMinutes.innerHTML = minutes + ":";
            }
            tens = 0;
            htmlTens.innerHTML = "0" + 0;
        }
        
        if (seconds > 9) htmlSeconds.innerHTML = seconds;
        else htmlSeconds.innerHTML = "0" + seconds;
    
    }
    function generateScramble(length){
        let moves = [
            [["R", "R'", "R2"],["L", "L'", "L2"]],
            [["F", "F'", "F2"],["B", "B'", "B2"]],
            [["U", "U'", "U2"],["D", "D'", "D2"]]
        ]

        let scramble = ""
        let lastMove
        let secondLastMove = [5,5,5]
        let currentMove = [
            Math.floor(Math.random() * 3),
            Math.floor(Math.random() * 2),
            Math.floor(Math.random() * 3)
        ]

        for (let i = 1; i < length; i++){
            lastMove = currentMove

            let set = Math.floor(Math.random() * 3)
            let side = Math.floor(Math.random() * 2)
            let move = Math.floor(Math.random() * 3)

            if(lastMove[0] == secondLastMove[0]){
                while(set == lastMove[0]){
                    set = Math.floor(Math.random() * 3)
                }
            }
            if(set == lastMove[0]){
                while(side == lastMove[1]){
                    side = Math.floor(Math.random() * 2)
                }
            }
            currentMove = [set, side, move]

            scramble += `${moves[set][side][move]} &nbsp;`

            secondLastMove = lastMove
        }
        scramble = scramble.slice(0,-7)
        htmlScramble.innerHTML = scramble
        let scramble_array = scramble.split(" &nbsp;")
        showMoves(scramble_array)
        return scramble_array
    }
    function addCubeToHtml(cube){
        for (piece in cube){
        
            const newDiv = document.createElement("div");
            newDiv.style.backgroundColor = cube[piece]
            newDiv.style.gridArea = piece
            newDiv.classList.add("cube-piece")
            newDiv.id = piece
            let faceDic = {
                "t": "top",
                "f": "front",
                "d": "down",
                "b": "back",
                "r": "right",
                "l": "left",
            }
            document.getElementById(faceDic[piece[0]]).appendChild(newDiv);
        }
    }
    function unscrambledCube() {
        
        let cube = {
                "fbl":green,
                "fbc":green,
                "fbr":green,
                "fcl":green,
                "fcc":green,
                "fcr":green,
                "ffl":green,
                "ffc":green,
                "ffr":green,
                "tbl":white,
                "tbc":white,
                "tbr":white,
                "tcl":white,
                "tcc":white,
                "tcr":white,
                "tfl":white,
                "tfc":white,
                "tfr":white,
                "bbl":blue,
                "bbc":blue,
                "bbr":blue,
                "bcl":blue,
                "bcc":blue,
                "bcr":blue,
                "bfl":blue,
                "bfc":blue,
                "bfr":blue,
                "dbl":yellow,
                "dbc":yellow,
                "dbr":yellow,
                "dcl":yellow,
                "dcc":yellow,
                "dcr":yellow,
                "dfl":yellow,
                "dfc":yellow,
                "dfr":yellow,
                "lbl":orange,
                "lbc":orange,
                "lbr":orange,
                "lcl":orange,
                "lcc":orange,
                "lcr":orange,
                "lfl":orange,
                "lfc":orange,
                "lfr":orange,
                "rbl":red,
                "rbc":red,
                "rbr":red,
                "rcl":red,
                "rcc":red,
                "rcr":red,
                "rfl":red,
                "rfc":red,
                "rfr":red
            }
        
        return cube
    } 
    function showMoves(moves){
        for (let move in moves){
            move = moves[move]
            if (move[0] == "R"){
                let spinCycle = [
                    "tbr", "tcr" , "tfr", 
                    "fbr", "fcr" , "ffr",
                    "dbr", "dcr" , "dfr",
                    "bfl", "bcl" , "bbl"
                ]
                let sideCycle = [
                    "rcl", "rfl", "rfc",
                    "rfr", "rcr", "rbr",
                    "rbc", "rbl"
                ]
                let modifier
                if (move == "R") { modifier = 3 }
                if (move == "R'") { modifier = -3 }
                if (move == "R2") { modifier = 6 }
                
                let initialSpinCycle = []
                let initialSideCycle = []
                for (let piece in spinCycle){
                    let piece_id = spinCycle[piece]
                    initialSpinCycle.push(cube[piece_id])
                }
                for (let piece in sideCycle){
                    let piece_id = sideCycle[piece]
                    initialSideCycle.push(cube[piece_id])
                }

                for (let piece in spinCycle){
                    piece_id = spinCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > spinCycle.length-1){ piece = piece - spinCycle.length }
                    if (piece < 0){ piece = spinCycle.length + piece }

                    cube[piece_id] = initialSpinCycle[piece]
                    document.getElementById(piece_id).style.background = initialSpinCycle[piece]
                }
                if (modifier == 3) modifier = 2
                else if ( modifier == -3 ) modifier = -2
                else modifier = 4
                for (let piece in sideCycle){
                    piece_id = sideCycle[piece]
                    
                    piece = parseInt(piece) + modifier

                    if (piece > sideCycle.length-1){ piece = piece - sideCycle.length }
                    if (piece < 0){ piece = sideCycle.length + piece }

                    cube[piece_id] = initialSideCycle[piece]
                    document.getElementById(piece_id).style.background = initialSideCycle[piece]
                }
            }
            if (move[0] == "U"){
                let spinCycle = [
                    "bbl", "bbc", "bbr",
                    "lbl", "lbc", "lbr",
                    "fbl", "fbc", "fbr",
                    "rbl", "rbc", "rbr"
                ]
                let sideCycle = [
                    "tcl", "tfl", "tfc",
                    "tfr", "tcr", "tbr",
                    "tbc", "tbl"
                ]
                let modifier
                if (move == "U") { modifier = 3 }
                if (move == "U'") { modifier = -3 }
                if (move == "U2") { modifier = 6 }
                
                let initialSpinCycle = []
                let initialSideCycle = []
                for (let piece in spinCycle){
                    let piece_id = spinCycle[piece]
                    initialSpinCycle.push(cube[piece_id])
                }
                for (let piece in sideCycle){
                    let piece_id = sideCycle[piece]
                    initialSideCycle.push(cube[piece_id])
                }

                for (let piece in spinCycle){
                    piece_id = spinCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > spinCycle.length-1){ piece = piece - spinCycle.length }
                    if (piece < 0){ piece = spinCycle.length + piece }

                    cube[piece_id] = initialSpinCycle[piece]
                    document.getElementById(piece_id).style.background = initialSpinCycle[piece]
                }
                if (modifier == 3) modifier = 2
                else if ( modifier == -3 ) modifier = -2
                else modifier = 4
                for (let piece in sideCycle){
                    piece_id = sideCycle[piece]
                    
                    piece = parseInt(piece) + modifier

                    if (piece > sideCycle.length-1){ piece = piece - sideCycle.length }
                    if (piece < 0){ piece = sideCycle.length + piece }

                    cube[piece_id] = initialSideCycle[piece]
                    document.getElementById(piece_id).style.background = initialSideCycle[piece]
                }
            }
            if (move[0] == "F"){
                let spinCycle = [
                    "tfr", "tfc", "tfl",
                    "lbr", "lcr", "lfr",
                    "dbl", "dbc", "dbr",
                    "rfl", "rcl", "rbl",
                ]
                let sideCycle = [
                    "fcl", "ffl", "ffc",
                    "ffr", "fcr", "fbr",
                    "fbc", "fbl"
                ]
                let modifier
                if (move == "F") { modifier = 3 }
                if (move == "F'") { modifier = -3 }
                if (move == "F2") { modifier = 6 }
                
                let initialSpinCycle = []
                let initialSideCycle = []
                for (let piece in spinCycle){
                    let piece_id = spinCycle[piece]
                    initialSpinCycle.push(cube[piece_id])
                }
                for (let piece in sideCycle){
                    let piece_id = sideCycle[piece]
                    initialSideCycle.push(cube[piece_id])
                }

                for (let piece in spinCycle){
                    piece_id = spinCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > spinCycle.length-1){ piece = piece - spinCycle.length }
                    if (piece < 0){ piece = spinCycle.length + piece }

                    cube[piece_id] = initialSpinCycle[piece]
                    document.getElementById(piece_id).style.background = initialSpinCycle[piece]
                }
                if (modifier == 3) modifier = 2
                else if ( modifier == -3 ) modifier = -2
                else modifier = 4
                for (let piece in sideCycle){
                    piece_id = sideCycle[piece]
                    
                    piece = parseInt(piece) + modifier

                    if (piece > sideCycle.length-1){ piece = piece - sideCycle.length }
                    if (piece < 0){ piece = sideCycle.length + piece }

                    cube[piece_id] = initialSideCycle[piece]
                    document.getElementById(piece_id).style.background = initialSideCycle[piece]
                }
            }
            if (move[0] == "L"){
                let spinCycle = [
                    "ffl", "fcl", "fbl",
                    "tfl", "tcl", "tbl",
                    "bbr", "bcr", "bfr",
                    "dfl", "dcl", "dbl",
                ]
                let sideCycle = [
                    "lbl", "lcl", "lfl",
                    "lfc", "lfr", "lcr",
                    "lbr", "lbc"
                ]
                let modifier
                if (move == "L") { modifier = 3 }
                if (move == "L'") { modifier = -3 }
                if (move == "L2") { modifier = 6 }
                
                let initialSpinCycle = []
                let initialSideCycle = []
                for (let piece in spinCycle){
                    let piece_id = spinCycle[piece]
                    initialSpinCycle.push(cube[piece_id])
                }
                for (let piece in sideCycle){
                    let piece_id = sideCycle[piece]
                    initialSideCycle.push(cube[piece_id])
                }

                for (let piece in spinCycle){
                    piece_id = spinCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > spinCycle.length-1){ piece = piece - spinCycle.length }
                    if (piece < 0){ piece = spinCycle.length + piece }

                    cube[piece_id] = initialSpinCycle[piece]
                    document.getElementById(piece_id).style.background = initialSpinCycle[piece]
                }
                if (modifier == 3) modifier = 2
                else if ( modifier == -3 ) modifier = -2
                else modifier = 4
                for (let piece in sideCycle){
                    piece_id = sideCycle[piece]
                    
                    piece = parseInt(piece) + modifier

                    if (piece > sideCycle.length-1){ piece = piece - sideCycle.length }
                    if (piece < 0){ piece = sideCycle.length + piece }

                    cube[piece_id] = initialSideCycle[piece]
                    document.getElementById(piece_id).style.background = initialSideCycle[piece]
                }
            }
            if (move[0] == "D"){
                let spinCycle = [
                    "ffr", "ffc", "ffl",
                    "lfr", "lfc", "lfl",
                    "bfr", "bfc", "bfl",
                    "rfr", "rfc", "rfl"
                ]
                let sideCycle = [
                    "dbl", "dcl", "dfl",
                    "dfc", "dfr", "dcr",
                    "dbr", "dbc"
                ]
                let modifier
                if (move == "D") { modifier = 3 }
                if (move == "D'") { modifier = -3 }
                if (move == "D2") { modifier = 6 }
                
                let initialSpinCycle = []
                let initialSideCycle = []
                for (let piece in spinCycle){
                    let piece_id = spinCycle[piece]
                    initialSpinCycle.push(cube[piece_id])
                }
                for (let piece in sideCycle){
                    let piece_id = sideCycle[piece]
                    initialSideCycle.push(cube[piece_id])
                }

                for (let piece in spinCycle){
                    piece_id = spinCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > spinCycle.length-1){ piece = piece - spinCycle.length }
                    if (piece < 0){ piece = spinCycle.length + piece }

                    cube[piece_id] = initialSpinCycle[piece]
                    document.getElementById(piece_id).style.background = initialSpinCycle[piece]
                }
                if (modifier == 3) modifier = 2
                else if ( modifier == -3 ) modifier = -2
                else modifier = 4
                for (let piece in sideCycle){
                    piece_id = sideCycle[piece]
                    
                    piece = parseInt(piece) + modifier

                    if (piece > sideCycle.length-1){ piece = piece - sideCycle.length }
                    if (piece < 0){ piece = sideCycle.length + piece }

                    cube[piece_id] = initialSideCycle[piece]
                    document.getElementById(piece_id).style.background = initialSideCycle[piece]
                }
            }
            if (move[0] == "B"){
                let spinCycle = [
                    "tbr", "tbc", "tbl",
                    "rfr", "rcr", "rbr",
                    "dfl", "dfc", "dfr",
                    "lbl", "lcl", "lfl"
                ]
                let sideCycle = [
                    "bbr", "bbc", "bbl",
                    "bcl", "bfl", "bfc",
                    "bfr", "bcr"
                ]
                let modifier
                if (move == "B") { modifier = 3 }
                if (move == "B'") { modifier = -3 }
                if (move == "B2") { modifier = 6 }
                
                let initialSpinCycle = []
                let initialSideCycle = []
                for (let piece in spinCycle){
                    let piece_id = spinCycle[piece]
                    initialSpinCycle.push(cube[piece_id])
                }
                for (let piece in sideCycle){
                    let piece_id = sideCycle[piece]
                    initialSideCycle.push(cube[piece_id])
                }
                for (let piece in spinCycle){
                    piece_id = spinCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > spinCycle.length-1){ piece = piece - spinCycle.length }
                    if (piece < 0){ piece = spinCycle.length + piece }

                    cube[piece_id] = initialSpinCycle[piece]
                    document.getElementById(piece_id).style.background = initialSpinCycle[piece]
                }
                if (modifier == 3) modifier = 2
                else if ( modifier == -3 ) modifier = -2
                else modifier = 4
                for (let piece in sideCycle){
                    piece_id = sideCycle[piece]
                    piece = parseInt(piece) + modifier

                    if (piece > sideCycle.length-1){ piece = piece - sideCycle.length }
                    if (piece < 0){ piece = sideCycle.length + piece }

                    cube[piece_id] = initialSideCycle[piece]
                    document.getElementById(piece_id).style.background = initialSideCycle[piece]
                }
            }
        }
    }
    
    

}