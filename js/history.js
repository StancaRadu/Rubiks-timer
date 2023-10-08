function addTimeToHistory(time) {
    const table = document.getElementById("history-table").getElementsByTagName("tbody")[0];

    const row = table.insertRow(0);
    
    const id = row.insertCell(0);
    const index = row.insertCell(1);
    const seconds = row.insertCell(2);
    const date = row.insertCell(3);
    const avg5cell = row.insertCell(4);
    const avg12cell = row.insertCell(5);
    const options = row.insertCell(6);

    const nbOfSolves = avgChart.data.datasets[0].data
    id.hidden = "hidden"
    id.innerHTML = time["timeOfSolving"];
    index.innerHTML = table.childElementCount;
    seconds.innerHTML = time["seconds"];
    date.innerHTML = timeStampToDate(time["timeOfSolving"]);
    if(nbOfSolves.length > 11){
        avg5cell.innerHTML = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(2);
        avg12cell.innerHTML = avgChart.data.datasets[2].data.slice(-1)[0]["y"].toFixed(2);
    }else if(nbOfSolves.length > 4){
        avg5cell.innerHTML = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(2);
        avg12cell.innerHTML = "-";
    }else{
        avg5cell.innerHTML = "-";
        avg12cell.innerHTML = "-";
    }
    addOptions(options, time["timeOfSolving"]);
}

function addOptions(cell, id){
    const mainDiv = document.createElement("div")
    mainDiv.style.display = "flex"
    mainDiv.style.columnGap = "5px"
    mainDiv.style.width = "200px"
    mainDiv.style.height = "1rem"

    for (let i = 0; i < 4; i++) {
        const buttonDiv = document.createElement("button")
        buttonDiv.style.display = "flex"
        buttonDiv.style.justifyContent = "center"
        buttonDiv.style.alignItems = "center"
        buttonDiv.style.flexGrow = "1"
        buttonDiv.style.border = "1px solid black"
        buttonDiv.style.backgroundColor = "var(--accent3)"
        if (i == 0) {
            buttonDiv.innerHTML = "X"
            buttonDiv.addEventListener("click", function() {
                deleteTimeDB(id)
            }, false);
        }
        mainDiv.append(buttonDiv)
    }
    

    cell.append(mainDiv)
}