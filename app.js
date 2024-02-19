import Timer from "./js/Timer"
import Table from "./js/Table"
import * as Utils from "./js/utils"
import AvgChart from "./js/AvgChart"
import Database from "./js/Database"
import Cube3d from "./js/3dCube"

let main = Object

window.onload = async function(){
    await Database.open()

    await new Promise ((result) => {
        setTimeout(()=>{
            console.log(2);
            result()
            }, 1000)
    })

    document.getElementById("website-loading").style.opacity = "0"
    main.timers = [new Timer()]
    main.charts = [new AvgChart()]
    main.tables = [new Table("history-div", ["Seconds", "Avg.5", "Avg.12", "Avg.50"], ["delete", "expand"])]
    let cube3d = new Cube3d("scramble", "td-tab")
    main.cubes = [cube3d]

    Utils.loadTimes()
}

export default main 