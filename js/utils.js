import DataBase from "./Database";
import main from "../app";

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
    let history = main.tables[0]
    let avgChart = main.charts[0]
    let times = await DataBase.get()
    history.body.replaceChildren();
    chart.data.datasets[0].data = []
    chart.data.datasets[1].data = []
    chart.data.datasets[2].data = []
    chart.data.datasets[3].data = []
    chart.data.labels = []
    chart.data.size = 0
    for (const time in times){
        avgChart.addTime(times[time], false)
        history.addTime(times[time], avgChart.chart);

    }

    chart.update()
}

function doAverage(solves){
    solves = solves.sort().slice(1,-1)
    let average = 0
    for (const solve in solves){
        let time = solves[solve]
        average += time
    }
    average /= solves.length

    return average
}

export {scrambleToText, timeStampToDate, loadTimes, doAverage}