function createScreensOpenButton(){
    let htmlLeftBarOpenButton = document.getElementById("left-screen-open-button")
    htmlLeftBarOpenButton.addEventListener('click', () => {
        let htmlLeftScreen = document.getElementById("left-screen")
        let htmlLeftInner = htmlLeftScreen.getElementsByClassName("screen-inner-wrapper")[0]
        if(htmlLeftInner.clientWidth > 100){
            htmlLeftInner.style.width = "0"
            htmlLeftBarOpenButton.style.transform = "none"
        }else {
            htmlLeftInner.style.width = "500px"
            htmlLeftBarOpenButton.style.transform = "rotateZ(180deg)"
        }
    });

    let htmlRightBarOpenButton = document.getElementById("right-screen-open-button")
    htmlRightBarOpenButton.addEventListener('click', () => {
        let htmlRightScreen = document.getElementById("right-screen")
        let htmlRightInner = htmlRightScreen.getElementsByClassName("screen-inner-wrapper")[0]
        if(htmlRightInner.clientWidth > 100){
            htmlRightInner.style.width = "0"
            htmlRightBarOpenButton.style.transform = "none"
        }else {
            htmlRightInner.style.width = "500px"
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

function changeScreen(screen, i){
    let parent = document.getElementById("centre-screen")
    let indidcator = document.getElementById("indicator")
    switch (i) {
        case 0:
            parent.style.backgroundColor = "var(--background-main-divs)"
            indidcator.style.backgroundColor = "var(--background-main-divs)"
            break;
    
        case 1:
            parent.style.backgroundColor = "var(--background-sec-divs)"
            indidcator.style.backgroundColor = "var(--background-sec-divs)"
            animate()
            break;
        
        case 2:
            parent.style.backgroundColor = "var(--background-third-divs)"
            indidcator.style.backgroundColor = "var(--background-third-divs)"
            break
    }
    let frame = document.getElementById("tabs")
    let screens = Array.prototype.slice.call(frame.children)
    screens.forEach(element => {
        document.getElementById(screen.id.split("-")[0]).classList.remove("hidden")
        
        indidcator.style.transform = `translateX(${i*100}%)`;
        if(element != screen && element.id != "indicator"){
            document.getElementById(element.id.split("-")[0]).classList.add("hidden")
        }
    });
}