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

function create_navbars(){
    const navs = document.querySelectorAll('nav-bar')
    for (const nav of navs) 
    {
        const tabs = Array.from(nav.parentNode.querySelectorAll('tab'))
        for (const tab in tabs)
        {
            const button = document.createElement('c-button')
            button.onclick = function(){navTo(nav, tabs, tab)}
            button.style.backgroundColor = changeColor(tab)
            nav.appendChild(button)
        }
        const indicator = document.createElement('indicator')
        nav.appendChild(indicator)
    }
}

function navTo(nav, tabs, index)
{
    const tab = tabs[index]
    const indicator = nav.querySelector('indicator').style
    for (const check of tabs) check.classList.add('hidden')
    tab.classList.remove('hidden')
    tab.parentNode.style.backgroundColor = changeColor(index)
    indicator.transform = `translateX(${index*100}%)`;
    indicator.backgroundColor = changeColor(index)
}

function changeColor(ammount)
{
    return `hsl(calc(var(--main-hue) + var(--main-modifier)*${ammount}), var(--main-saturation), var(--main-lightness))`
}

function reverseScramble(scramble){
    let reversed = []
    for (const move of scramble) {
        if (move.includes('2')) reversed.push(move)
        else if (move.includes("'")) reversed.push(move.replace("'", ""))
        else if (!move.includes("'") && !move.includes('2')) reversed.push(`${move}'`)
    }
    return reversed.reverse()
}

export {scrambleToText, timeStampToDate, loadTimes, average, create_navbars, reverseScramble}