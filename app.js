import Timer from "./js/Timer"
import Table from "./js/Table"
import * as Utils from "./js/utils"
import AvgChart from "./js/AvgChart"
import Database from "./js/Database"

let main = Object

window.onload = async function(){
    await Database.open()

    main.timers = [new Timer()]
    main.charts = [new AvgChart()]
    main.tables = [new Table("history-div", ["Seconds", "Avg.5", "Avg.12", "Avg.50"], ["delete", "expand"])]

    Utils.loadTimes()
}

export default main 