function createLeftBarOpenButton(){
    let htmlLeftBarOpenButton = document.getElementById("left-bar-control-open")
    htmlLeftBarOpenButton.addEventListener('click', () => {
        let htmlLeftBar = document.getElementById("statistics-div")
        if(htmlLeftBar.clientWidth > 100){
            htmlLeftBar.style.width = "0"
            htmlLeftBarOpenButton.style.transform = "none"
        }else {
            htmlLeftBar.style.width = "500px"
            htmlLeftBarOpenButton.style.transform = "rotateZ(180deg)"
        }
    });

    let htmlRightBarOpenButton = document.getElementById("right-bar-control-open")
    htmlRightBarOpenButton.addEventListener('click', () => {
        let htmlRightBar = document.getElementById("right-wraper-div")
        if(htmlRightBar.clientWidth > 100){
            htmlRightBar.style.width = "0"
            htmlRightBarOpenButton.style.transform = "none"
        }else {
            console.log(1);
            htmlRightBar.style.width = "500px"
            htmlRightBarOpenButton.style.transform = "rotateZ(180deg)"
        }
    });
    let cubeAreaHtml = document.getElementById("cube-relative-area")
    cubeAreaHtml.addEventListener('click', (event) => {
        console.log(getComputedStyle(cubeAreaHtml)["visibility"]);
        if(getComputedStyle(cubeAreaHtml)["visibility"] == "hidden"){
            cubeAreaHtml.style.visibility == "visible"
        }else {
            cubeAreaHtml.style.visibility == "hidden"
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
    document.getElementById("history-body").replaceChildren();
    avgChart.data.datasets[0].data = []
    avgChart.data.datasets[1].data = []
    avgChart.data.datasets[2].data = []
    avgChart.data.datasets[3].data = []
    avgChart.data.labels = []
    avgChart.data.size = 0
    for (time in times){
        addTimeToChart(times[time], false)
        addTimeToHistory(times[time])

    }
    avgChart.update()
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

