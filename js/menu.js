let avgChart
function menu(){
    let htmlLeftBarOpenButton = document.getElementById("left-bar-open-button")
    let htmlChart = document.getElementById("myChart")
    let statisticsDiv = document.getElementById("statistics-div")

    htmlLeftBarOpenButton.addEventListener('click', (event) => {
        let htmlLeftBar = document.getElementById("statistics-div-hidden")
        
        if(htmlLeftBar.style.width == "500px"){
            htmlLeftBar.style.width = "0"
            htmlLeftBar.style.visibility = "hidden"
            htmlLeftBarOpenButton.style.transform = "none"
        }else {
            htmlLeftBar.style.width = "500px"
            htmlLeftBar.style.visibility = "visible"
            htmlLeftBarOpenButton.style.transform = "rotateZ(180deg)"
        }
        
    });


    const xValues = [100,200,300,400,500,600,700,800,900,1000];

    avgChart = new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Avg.5",
            data: [],
            borderColor: "green",
            fill: false
        },{
            label: "Avg.12",
            data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
            borderColor: "purple",
            fill: false
        },{
            label: "Avg.50",
            data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "Black"
            }
        }
    }
    });
    

}



function addData(chart, label, newData) {
    // chart.data.datasets.forEach((dataset) => {
    //     dataset.data.push(newData);
    // });
    chart.data.datasets[0].data.push(newData)
    console.log(newData);

    console.log(chart.data.datasets[0].data);

    chart.update();
}