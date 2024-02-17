import Timer from "./Timer"
import Table from "./Table"
import * as Utils from "./utils"
import AvgChart from "./AvgChart"
import Database from "./Database"

let main = Object

window.onload = async function(){
    await Database.open()

    main.timers = [new Timer()]
    main.charts = [new AvgChart()]
    main.tables = [new Table("history-div", ["Seconds", "Avg.5", "Avg.12", "Avg.50"], ["delete", "expand"])]

    Utils.loadTimes()
}

export default main 