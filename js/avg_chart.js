function createChart(){
    
    let htmlChart = document.getElementById("myChart")
    let statisticsDiv = document.getElementById("statistics-div")

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
            
    loadTimesIntoChart()
}

async function loadTimesIntoChart() {
    times = await getTimeDB()
    avgChart.data.labels = []
    avgChart.data.datasets[0].data = []
    for (time in times){
        addTimeToChart(times[time])
    }
}

function addTimeToChart(time) {
    avgChart.data.labels.push(avgChart.data.labels.length + 1)
    avgChart.data.datasets[0].data.push(time["seconds"])
    avgChart.update();
    if (avgChart.data.labels.length > 4){
        averageLast(avgChart.data.datasets[0].data.slice(-5))
    }
    if (avgChart.data.labels.length > 11){
        averageLast(avgChart.data.datasets[0].data.slice(-12))
    }
    if (avgChart.data.labels.length > 49){
        averageLast(avgChart.data.datasets[0].data.slice(-50))
    }
}

function averageLast(solves){
    solves = solves.sort().slice(1,-1)
    let average = 0
    for (solve in solves){
        let time = solves[solve]
        average += time
    }
    average /= solves.length

    if (solves.length == 3){
        avgChart.data.datasets[1].data.push(average)
    }else if (solves.length == 10){
        avgChart.data.datasets[2].data.push(average)
    }else if (solves.length == 48){
        avgChart.data.datasets[3].data.push(average)
    }

    avgChart.update()
}