function openSide(button){
    let page = button.parentNode.parentNode
    lines = Array.prototype.slice.call(button.children[0].children)
    let vl,hl;
    lines.forEach(line => {
        if (line.classList.contains("vertical-line")) vl = line
        else if (line.classList.contains("horizontal-line")) hl = line
    });

    if (page.clientWidth > 0) {
        page.style.width = 0
        vl.style.transform = "rotateZ(270deg)"
        hl.style.transform = "rotateZ(360deg)"
    }
    else {
        page.style.width = "500px"
        vl.style.transform = "rotateZ(0)"
        hl.style.transform = "rotateZ(0)"
    }
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

function changePage(clicked){
    let navbar = clicked.parentNode
    let buttons = Array.prototype.slice.call(navbar.children)
    let indidcator = buttons.pop()
    let frame = navbar.parentNode
    let color = window.getComputedStyle(clicked).backgroundColor;
    
    let i = 0
    
    frame.style.backgroundColor = color
    indidcator.style.backgroundColor = color

    buttons.forEach(button => {
        let page = document.getElementById(button.id.split("-")[0])

        if (button == clicked){
            page.classList.remove("hidden")
            indidcator.style.transform = `translateX(${i*100}%)`;
        
        }else page.classList.add("hidden")
        
        i++
    });
}