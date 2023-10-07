async function loadTimesIntoHistory() {
    times = await getTimeDB()
    for (time in times){
        var table = document.getElementById("history-table").getElementsByTagName("tbody")[0];

        var row = table.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = scrambleToText(times[time]["scramble"]);
        cell2.innerHTML = times[time]["seconds"];
        cell3.innerHTML = timeStampToDate(times[time]["timeOfSolving"]);
    }
}
async function addTimeToHistory(time) {
    var table = document.getElementById("history-table").getElementsByTagName("tbody")[0];

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = scrambleToText(time["scramble"]);
    cell2.innerHTML = time["seconds"];
    cell3.innerHTML = timeStampToDate(time["timeOfSolving"]);
}
