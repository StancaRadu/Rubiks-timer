function createChart(){
    
    let htmlChart = document.getElementById("myChart")
    avgChart = new Chart(htmlChart, {
        type: "line",
        data: {
            labels:[],
            size: 0,
            datasets: [
                {   
                    label: "Solves",
                    data: [],
                    tension: 0.1,
                },
                {
                    label: "Ao5",
                    data: [],
                    tension: 0.1,
                },
                {
                    label: "Ao12",
                    data: [],
                    tension: 0.1,
                },
                {
                    label: "Ao50",
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
                    clip: true,

                    ticks:{
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
    avgChart.data.size += 1
    avgChart.data.labels.push(avgChart.data.size)
    avgChart.data.datasets[0].data.push({y:time["seconds"], x:avgChart.data.size})
    if (avgChart.data.size > 4){
        addAverageToChart(avgChart.data.datasets[0].data.slice(-5))
    }
    if (avgChart.data.size > 11){
        addAverageToChart(avgChart.data.datasets[0].data.slice(-12))
    }
    if (avgChart.data.size > 49){
        addAverageToChart(avgChart.data.datasets[0].data.slice(-50))
    }

    if (update) avgChart.update()

}

function addAverageToChart(solves_p){
    let solves = [];
    for (solve in solves_p){
        solves.push(solves_p[solve]["y"])
    }
    let average = doAverage(solves)
    if (solves.length == 5){
        avgChart.data.datasets[1].data.push({y:average, x:avgChart.data.size})
    }else if (solves.length == 12){
        avgChart.data.datasets[2].data.push({y:average, x:avgChart.data.size})
    }else if (solves.length == 50){
        avgChart.data.datasets[3].data.push({y:average, x:avgChart.data.size})
    }
}