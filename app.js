import Table from "./src/js/classes/Table"
import * as Utils from "./src/js/utils/utils"
import AvgChart from "./src/js/classes/AvgChart"
import Database from "./src/js/utils/Database"
import Cube, { Cube2d, Cube3d} from "./src/js/classes/Cube"
import UI from "./src/js/classes/UI"

let main = Object
main.exclude_from_avg = 10

window.onload = async function(){
    await Database.open()

    await new Promise ((result) => {
        setTimeout(()=>{
            result()
        }, 0)
        // }, 500)
    })

    document.getElementById("website-loading").style.opacity = "0"

    await new Promise ((result) => {
        setTimeout(()=>{
            result()
        }, 0)
        // }, 1000)
    })

    document.getElementById("website-loading").style.display = "none"

    
    main.charts = [new AvgChart()]
    // main.tables = [new Table("history-div", ["Seconds", "Avg.5", "Avg.12", "Avg.50"], ["delete", "expand"])]
    main.tables = [UI.table("history-div", ["Seconds"]), UI.table("history-div2", ["Ao 3", "Ao 5", "Ao 10"])]
    
    let cube3d = new Cube3d("scramble", "td-tab")
    let cube2d = new Cube("2d", "scramble-div", "timer-div")
    main.cubes = [cube3d, cube2d]

    cube2d.displayScramble(true)

    Utils.loadTimes()
}

export default main 