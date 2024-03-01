import { average } from "../utils/utils";
import Chart from "chart.js/auto"
import main from "../../../app";


class AvgChart{
    static charts = []
    constructor(location){
    AvgChart.charts.push(this)
    let htmlChart = document.getElementById("myChart")
    this.chart = new Chart(htmlChart, {
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
                        // color: font_color
                    }
                }
            },
            scales: {
                x: {
                    clip: true,

                    ticks:{
                        // color: font_color
                    }
                },
                y:{
                    ticks:{
                        // color: font_color
                    }
                }
            }
        }
    }); 
    }
    addTime(time, update = true){
        this.chart.data.size += 1
        this.chart.data.labels.push(this.chart.data.size)
        this.chart.data.datasets[0].data.push({y:time["seconds"], x:this.chart.data.size})
        if (this.chart.data.size > 4){
            this.addAverage(this.chart.data.datasets[0].data.slice(-5))
        }
        if (this.chart.data.size > 11){
            this.addAverage(this.chart.data.datasets[0].data.slice(-12))
        }
        if (this.chart.data.size > 49){
            this.addAverage(this.chart.data.datasets[0].data.slice(-50))
        }
    
        if (update) this.chart.update()
    }
    addAverage(solves_p){
        let solves = [];
        for (const solve in solves_p){
            solves.push(solves_p[solve]["y"])
        }
        let avg = average(solves, true)
        if (solves.length == 5){
            this.chart.data.datasets[1].data.push({y:avg, x:this.chart.data.size})
        }else if (solves.length == 12){
            this.chart.data.datasets[2].data.push({y:avg, x:this.chart.data.size})
        }else if (solves.length == 50){
            this.chart.data.datasets[3].data.push({y:avg, x:this.chart.data.size})
        }
    }
}


export default AvgChart