import DataBase from "./Database";
import main from "../../../app";

function scrambleToText(scramble){
    let toReturn = ""
    for (move in scramble){
        toReturn += `${scramble[move]} `
    }
    return toReturn.slice(0,-1)
}

function timeStampToDate(stamp){
    const date = new Date(stamp);
    return date.getDate() + '/' +  (date.getMonth()+1);
}

async function loadTimes(){
    let chart = main.charts[0].chart
    let avgChart = main.charts[0]
    let times = await DataBase.get()
    main.tables.forEach(table => {
        table.body.replaceChildren(table.body.firstChild)
        table.rows = []
        for (const time in times){
            table.addTime(times[time]);
        }
    });
    chart.data.datasets[0].data = []
    chart.data.datasets[1].data = []
    chart.data.datasets[2].data = []
    chart.data.datasets[3].data = []
    chart.data.labels = []
    chart.data.size = 0
    for (const time in times){
        avgChart.addTime(times[time], false)
    }

    chart.update()
}

function average(rows, seconds = false){  
    let length = rows.length 
    let exclude = Math.floor(Math.ceil((main.exclude_from_avg * length / 100)/2))
    let sum = 0
    let solves = []
    rows.forEach(time => {
        if (seconds) solves.push(time)
        else solves.push(time.seconds)
    });
    solves.sort()
    solves = solves.slice(exclude, length-exclude)
    solves.forEach(time => {
        sum += time
    });
    let avg = (sum / solves.length).toFixed(3)

    return avg
}

export {scrambleToText, timeStampToDate, loadTimes, average}