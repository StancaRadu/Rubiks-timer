import DataBase from "./Database";
import main from "../../../app";
import { Cube2d } from "../classes/Cube";

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

async function create_deck(deck) {
    const algs = (await fetch("../../public/static-DB/algs.json")).json()
    
    deck.innerHTML = ''

    for (const name of Object.keys(await algs)) {
        const wrapper = document.createElement("card-wrapper")
        let cube_area = document.createElement("cube_area")
        wrapper.innerHTML = `
            <card>
                <h1>${name}</h1>
            </card>
        `
        let card = wrapper.children[0]
        card.insertBefore(cube_area, card.children[0])
        let cube = new Cube2d(cube_area, null, null, "top")

        deck.appendChild(wrapper)
    }

}

export {scrambleToText, timeStampToDate, loadTimes, average, create_deck}