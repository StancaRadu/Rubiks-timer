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

    id.innerHTML = time["seconds"];
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
    options.innerHTML = "";
}
