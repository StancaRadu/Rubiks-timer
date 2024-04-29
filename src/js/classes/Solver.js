import Cube from "./Cube";

export default class Solver{
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
    cross(){
        let pieces = ['DUM', 'DMR', 'DDM', 'DML']
        pieces.forEach(piece => {
            let position = this.findPiece(piece)
            console.log(position)
            console.log(Object.keys(this.cube.pieces));
        });
    }
    findPiece(piece){
        // let toReturn = []
        // pieces.forEach(piece => {
        //     toReturn.push(Object.keys(this.cube.pieces).find(key => this.cube.pieces[key].name === piece));
        // });
        // return toReturn
        let val = Object.keys(this.cube.pieces).find(key => this.cube.pieces[key].name === piece)
        return [val, this.cube.pieces[val]];
    }

}