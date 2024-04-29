import { resolve } from "chart.js/helpers";
import Cube from "./Cube";

export default class Solver{
    static brain = {

    }
    constructor(cube){
        this.cube = cube
        console.log(this.cube)
        this.addKeyInput()
    }

    addKeyInput(){
        document.addEventListener('keyup', (event) => {
            if (this.cube.canvas.parent.classList.contains("hidden")) return
            if (event.code == "KeyP") {
                this.solve()
            }
        });
    }

    solve(){
        this.cross()
    }
    async cross(){
        let pieces = ['DUM', 'DMR', 'DDM', 'DML']
        let move = null
        for (const piece of pieces){
            let a = 0
            while (true){
                a++
                let position = this.findPiece(piece)
                if (['L', 'R', 'B'].includes(position[0])){
                    console.log(position);
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
                    switch (position[2]) {
                        case 'L':
                            while (true){
                                if (!pieces.includes(this.cube.pieces['UML'].name)) {
                                    await this.cube.move("L'")
                                    break
                                }
                                else {
                                    if (pieces.includes(this.cube.pieces['UDM'].name))  await this.cube.move("U'")
                                    else await this.cube.move('U')
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
                                    if (pieces.includes(this.cube.pieces['UDM'].name))  await this.cube.move("U'")
                                    else await this.cube.move('U')
                                }
                            }
                            break
                        
                        case 'M':
                            switch (position[1]){
                                case 'U':
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
                                case 'D':
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
                            }
                    }
                }
                if (a=10) break
            }
        }
    }
    findPiece(piece){
        // let toReturn = []
        // pieces.forEach(piece => {
        //     toReturn.push(Object.keys(this.cube.pieces).find(key => this.cube.pieces[key].name === piece));
        // });
        // return toReturn
        let position = Object.keys(this.cube.pieces).find(key => this.cube.pieces[key].name === piece)
        return position;
    }

}