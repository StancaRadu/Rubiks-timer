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
    if(avgChart.data.size > 11){
        avg5cell.innerHTML = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(2);
        avg12cell.innerHTML = avgChart.data.datasets[2].data.slice(-1)[0]["y"].toFixed(2);
    }else if(avgChart.data.size > 4){
        avg5cell.innerHTML = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(2);
        avg12cell.innerHTML = "-";
    }else{
        avg5cell.innerHTML = "-";
        avg12cell.innerHTML = "-";
    }
    addOptions(options, time["timeOfSolving"], time["scramble"]);
}

function addOptions(cell, id, scramble){
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
            });
        }else if(i == 1){
            buttonDiv.innerHTML = "Retry"
            buttonDiv.addEventListener("click", function(e) {
                useScramble(scramble.toString().replaceAll(",", " "))
            });
        }
        mainDiv.append(buttonDiv)
    }
    

    cell.append(mainDiv)
}

let lastSorted = ""

function sortTable(th) {
    let rows, switching, shouldSwitch, i;
    let table = document.getElementById("history-table").lastElementChild;
    rows = table.rows
    switching = true;
    while (switching) {
        switching = false;
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("td")[th];
            y = rows[i + 1].getElementsByTagName("td")[th];
            if(isNaN(x.innerHTML)){
                console.log(x.innerHTML);
                let moved = rows[i]
                table.removeChild(rows[i])
                table.append(moved)
                continue    
            }
            if(lastSorted == th){
                if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }else{
                if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            table.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    if (lastSorted == th) {
        lastSorted = ""
    }else lastSorted = th
}

document.getElementById ("hh1").addEventListener ("click", () => {
    sortTable(1)
});
document.getElementById ("hh2").addEventListener ("click", () => {
    sortTable(2)
});
document.getElementById ("hh4").addEventListener ("click", () => {
    sortTable(4)
});
document.getElementById ("hh5").addEventListener ("click", () => {
    sortTable(5)
});