import UI from "./UI"
import AvgChart from "./AvgChart"
import main from "../../../app"
import Database from "../utils/Database"

class Table{
    static tables = []
    constructor(location, heads, buttons){
        main.hi = ":)"
        this.location = location
        this.heads = heads
        this.buttons = buttons
        this.createHeader()
        Table.tables.push(this)
    }

    createHeader(){
        const header = document.createElement("div")
        const index = document.createElement("div")
        const body = document.createElement("div")

        if (this.buttons) header.style.gridTemplateColumns = `3rem repeat(${this.heads.length + 1}, minmax(0, 1fr))`
        index.innerHTML = "No."

        header.classList.add("table-header")
        index.classList.add("table-head")
        body.classList.add("table-body")

        header.appendChild(index)

        this.heads.forEach(head => {
            const head_div = document.createElement("div")
            head_div.classList.add("table-head")
            head_div.innerHTML = head
            header.appendChild(head_div)
        });

        document.getElementById(this.location).appendChild(header)
        document.getElementById(this.location).appendChild(body)

        this.body = body
    }

    addTime(values){
        let avgChart = main.charts[0]["chart"]
        if(avgChart.data.size > 49){
            values["avg.50"] = avgChart.data.datasets[3].data.slice(-1)[0]["y"].toFixed(3);
            values["avg.12"] = avgChart.data.datasets[2].data.slice(-1)[0]["y"].toFixed(3);
            values["avg.5"] = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(3);
        }else if(avgChart.data.size > 11){
            values["avg.12"] = avgChart.data.datasets[2].data.slice(-1)[0]["y"].toFixed(3);
            values["avg.5"] = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(3);
        }else if(avgChart.data.size > 4){
            values["avg.5"] = avgChart.data.datasets[1].data.slice(-1)[0]["y"].toFixed(3);
        }

        const buttons_div = document.createElement("div")
        const index = document.createElement("div")
        const body = document.getElementById(this.location).getElementsByClassName("table-body")[0]
        const row = document.createElement("div")

        if (this.buttons) row.style.gridTemplateColumns = `3rem repeat(${this.heads.length + 1}, minmax(0, 1fr))`
        index.innerHTML = body.childNodes.length + 1
        row.classList.add("table-row")
        index.classList.add("table-cell")
        buttons_div.classList.add("table-cell")
        buttons_div.classList.add("padding-2")

        row.appendChild(index)

        this.heads.forEach(head => {
            const cell = document.createElement("div")
            cell.classList.add("table-cell")
            cell.classList.add(head.toLowerCase())
            row.appendChild(cell)
            if (head.toLowerCase() in values) {
                cell.innerHTML = values[head.toLowerCase()  ]
            }
        });

        let button = UI.button("delete")
        button.params = values
        button.addEventListener("click", function(){
            Database.delete(values["timeOfSolving"])
        })
        buttons_div.appendChild(button)
        button = UI.button("expand")
        buttons_div.appendChild(button)


        row.appendChild(buttons_div)
        body.insertBefore(row, body.firstChild)
    }
}

export default Table