function createLeftBarOpenButton(){
    let htmlLeftBarOpenButton = document.getElementById("left-bar-control-open")
    htmlLeftBarOpenButton.addEventListener('click', () => {
        let htmlLeftBar = document.getElementById("statistics-div")
        
        if(htmlLeftBar.style.width == "500px"){
            htmlLeftBar.style.width = "0"
            htmlLeftBar.style.height = "0"
            htmlLeftBarOpenButton.style.transform = "none"
        }else {
            htmlLeftBar.style.width = "500px"
            htmlLeftBar.style.height = "auto"
            htmlLeftBarOpenButton.style.transform = "rotateZ(180deg)"
        }
        
    });
}

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
    times = await getTimeDB()
    for (time in times){
        addTimeToHistory(times[time])
        addTimeToChart(times[time])
    }
}

function doAverage(solves){
    solves = solves.sort().slice(1,-1)
    let average = 0
    for (solve in solves){
        let time = solves[solve]
        average += time
    }
    average /= solves.length

    return average
}