function createChart(){
    
    let htmlChart = document.getElementById("myChart")

    avgChart = new Chart(htmlChart, {
        type: "line",
        data: {
            labels:[],
            datasets: [
                {   
                    label: "Solves",
                    data: [],
                    tension: 0.1,
                },
                {
                    label: "Avg. 5",
                    data: [],
                    tension: 0.1,
                },
                {
                    label: "Avg. 12",
                    data: [],
                    tension: 0.1,
                },
                {
                    label: "Avg. 50",
                    data: [],
                    tension: 0.1,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "black"
                    }
                }
            },
            scales: {
                x: {
                    ticks:{
                        // callback: function(tick, index, array) {
                        //     return (index % 5) ? "" : tick;
                        // },
                        color: "black"
                    }
                },
                y:{
                    ticks:{
                        color: "black"
                    }
                }
            }
        }
    });     
}

function addTimeToChart(time, update = true) {
    avgChart.data.labels.push(avgChart.data.labels.length + 1)
    avgChart.data.datasets[0].data.push(time["seconds"])
    // avgChart.update();
    if (avgChart.data.labels.length > 4){
        addAverageToChart(avgChart.data.datasets[0].data.slice(-5))
    }
    if (avgChart.data.labels.length > 11){
        addAverageToChart(avgChart.data.datasets[0].data.slice(-12))
    }
    if (avgChart.data.labels.length > 49){
        addAverageToChart(avgChart.data.datasets[0].data.slice(-50))
    }

    if (update) avgChart.update()

}

function addAverageToChart(solves){
    let average = doAverage(solves)
    if (solves.length == 5){
        avgChart.data.datasets[1].data.push({y:average, x:avgChart.data.labels.length})
    }else if (solves.length == 12){
        avgChart.data.datasets[2].data.push({y:average, x:avgChart.data.labels.length})
    }else if (solves.length == 50){
        avgChart.data.datasets[3].data.push({y:average, x:avgChart.data.labels.length})
    }
}