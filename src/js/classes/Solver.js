import { resolve } from "chart.js/helpers";
import Cube from "./Cube";

export default class Solver{
    static brain = {
        sledge: ['U', 'R', "U'", "R'"],
        distances: {
            F:{R:"'", B:2, L:""}, 
            R:{B:"'", L:2, F:""}, 
            B:{L:"'", F:2, R:""}, 
            L:{F:"'", R:2, B:""}, 
        }
    }
    constructor(cube){
        this.cube = cube
        this.addKeyInput()
    }

    addKeyInput(){
        document.addEventListener('keyup', (event) => {
            if (this.cube.canvas.parent.classList.contains("hidden")) return
            if (event.code == "KeyP") this.solve()
        });
    }

    async solve(){
        // console.log( await this.cross())
        console.log( await this.corners())
    }

    async cross(){
        const pieces = ['DUM', 'DMR', 'DDM', 'DML']
        const connections = [
            ['UDM', 'FMM'], ['UMR', 'RMM'], ['UUM', 'BMM'], ['UML', 'LMM'],
            ['DUM', 'FMM'], ['DMR', 'RMM'], ['DDM', 'BMM'], ['DML', 'LMM']
        ]
        function findConnection(id){
            for (let connection in connections){ 
                connection = connections[connection]
                if (connection[0] === id) return connection[1]
            }
        }
        const m_distance = {
            FMM:{RMM:"'", BMM:2, LMM:""},
            RMM:{FMM:"", BMM:"'", LMM:2},
            BMM:{RMM:"", FMM:2, LMM:"'"},
            LMM:{RMM:2, BMM:"", FMM:"'"},
        }
        
        for (const piece of pieces){
            let a = 0
            while (true){
                a++
                let position = this.findPiece(piece)
                if (['L', 'R', 'B'].includes(position[0])){
                    switch (position[0]) {
                        case 'L':
                            await this.cube.move("Y'")

                            break;
                        case 'R':
                            await this.cube.move("Y")

                            break;
                        case 'B':
                            await this.cube.move("Y2")

                            break;
                    }
                }

                position = this.findPiece(piece)
                if (position[0] === 'F'){
                    while (true){
                        position = this.findPiece(piece)
                        if (position[0] === 'U') break
                        switch (position[2]) {
                            case 'L':
                                while (true){
                                    if (!pieces.includes(this.cube.pieces['UML'].name)) {
                                        await this.cube.move("L'")
                                        break
                                    }
                                    else {
                                        if (pieces.includes(this.cube.pieces['UDM'].name))  await this.cube.move("U'")
                                        else await this.cube.move("U")
                                    }
                                }
                                break;
                        
                            case 'R':
                                while (true){
                                    if (!pieces.includes(this.cube.pieces['UMR'].name)) {
                                        await this.cube.move("R")
                                        break
                                    }
                                    else {
                                        if (pieces.includes(this.cube.pieces['UDM'].name))  await this.cube.move("U")
                                        else await this.cube.move("U'")
                                    }
                                }
                                break
                            
                            case 'M':
                                switch (position[1]){
                                    case 'U':
                                        while (true){
                                            if (!pieces.includes(this.cube.pieces['UDM'].name)) {
                                                await this.cube.move("F")
                                                break
                                            }
                                            else {
                                                if (pieces.includes(this.cube.pieces['UML'].name))  await this.cube.move("U")
                                                else await this.cube.move("U'")
                                            }
                                        }
                                        break
                                    case 'D':
                                        while (true){
                                            if (!pieces.includes(this.cube.pieces['UDM'].name)) {
                                                await this.cube.move("F'")
                                                break
                                            }
                                            else {
                                                if (pieces.includes(this.cube.pieces['UML'].name))  await this.cube.move("U")
                                                else await this.cube.move("U'")
                                            }
                                        }
                                        break
                                }
                                break
                        }
                    }
                }
                if (a=10) break
            }
        }

        let placed = 0
        while (true){
            if (placed === 4 || placed > 20) break
            for (const piece of pieces){
                let position = this.findPiece(piece)
                let current_connection = findConnection(position)
                let natural_connection = this.findPiece(findConnection(piece))

                if (current_connection === natural_connection && position[0] === 'D') {
                    placed++
                    continue
                }

                if (position[0] === 'D') continue

                if (typeof m_distance[current_connection][natural_connection] !== 'undefined') await this.cube.move(`U${ m_distance[current_connection][natural_connection]}`)
                await this.cube.move(`${natural_connection[0]}2`)
                placed++
            }
        }
        return "done"
    }
    async corners(){
        const pieces = ['DUL', 'DUR', 'DDR', 'DDL']
        const targets = ['FUR', 'UDR', 'RUL']
        const connections = {DUL: 'FMM', DUR: 'RMM', DDR: 'BMM', DDL: 'LMM'}
        let placed = 0
        while (true){
            if (placed === 4 || placed > 4) break
            for (const piece of pieces){

                while (true){
                    let connection_location = this.findPiece(connections[piece])
                    let location = this.findPiece(piece)
    
                    if (location[1] === 'U' || location[0] === 'U'){
                        const modifier = Solver.brain.distances['R'][connection_location[0]]
                        if (typeof modifier !== 'undefined') await this.cube.move(`Y${modifier}`)
                        
                        while (true){
                            location = this.findPiece(piece)
                            if(targets.includes[location]){}
                        }
                    }



                    console.log(1)
                    break
                }
                placed++
            }
        }
        return "done"
    }
    findPiece(piece){
        return Object.keys(this.cube.pieces).find(key => this.cube.pieces[key].name === piece);
    }

}