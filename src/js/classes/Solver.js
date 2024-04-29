import Cube from "./Cube";

export class Solver{
    constructor(cube){
        print(cube)
        this.addKeyInput()
    }

    addKeyInput(){
        document.addEventListener('keyup', (event) => {
            if (this.canvas.parent.classList.contains("hidden")) return
            if (event.code == "KeyP") {
                this.solve()
            }
        });
    }

    solve(){
        print(2)
    }
}