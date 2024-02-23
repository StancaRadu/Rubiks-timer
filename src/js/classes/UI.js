import main from "../../../app"
import Database from "../utils/Database"
import { average } from "../utils/utils"

class UI{
    constructor(){

    }
    static button(type){
        const button = document.createElement("c-button")

        const graphic = document.createElement("graphic")
        const line1 = document.createElement("line")
        const line2 = document.createElement("line")

        graphic.appendChild(line1)
        graphic.appendChild(line2)

        switch (type) {
            case "expand":
                graphic.classList.add("expand-graphic")
                line1.classList.add("expand-graphic-line")
                line1.classList.add("diagonal-incline")

                line2.classList.add("expand-graphic-line")
                line2.classList.add("diagonal-decline")
                break;
        
            case "delete":
                graphic.classList.add("delete-graphic")
                line1.classList.add("delete-graphic-line")
                line1.classList.add("diagonal-incline")

                line2.classList.add("delete-graphic-line")
                line2.classList.add("diagonal-decline")
                break;
        }

        button.appendChild(graphic)
        return button
    }

    static table(location, fields){
        fields.unshift("No.")
        fields.push("")
        let table = {}

        table.rows = []
        table.fields = fields

        table.create = function(){
            table.parent = document.getElementById(location)
        
            table.body = document.createElement("table-body")
            table.header = document.createElement("table-row")

            table.body.style.gridTemplateColumns = `50px repeat(${fields.length-2}, 1fr) 50px`
            table.header.id = "header"
            table.header.cells = []
            table.parent.appendChild(table.body)
            table.body.appendChild(table.header)

            table.fields.forEach(header => {
                let avg = parseInt(header.replace(/^\D+/g, ''))
                
                let cell = document.createElement("cell")
                
                cell.innerHTML = header
                cell.sorted = false
                table.header.appendChild(cell)
                table.header.cells.push(cell)
                if (Boolean(header)){
                    if(avg) cell.int = avg
                    else cell.int = 1   
                    cell.addEventListener("click", function(){
                        if (cell.int <= table.rows.length) table.sort(cell)
                    })
                }

            });
        }
        table.addTime = function(values){
            const row = document.createElement("table-row")
            row.seconds = values["seconds"]
            row.params = values
            table.rows.push(row)
            table.body.insertBefore(row, table.body.firstChild.nextSibling)
            table.fields.forEach(header => {
                let cell = document.createElement("cell")
                let avg = parseInt(header.replace(/^\D+/g, ''))

                if (header == "No.") {
                    cell.innerHTML = table.rows.length
                    row.params[header] = table.rows.length
                }else if(header == "Seconds"){
                    cell.innerHTML = row.seconds
                    row.params[header] = cell.innerHTML
                }else if (!isNaN(avg)) {
                    if (table.rows.length >= avg){
                        cell.innerHTML = average(table.rows.slice(table.rows.length-avg))
                    }else cell.inner = ""
                    row.params[header] = cell.innerHTML
                }else if(header == ""){
                    let button = UI.button("delete")
                    button.addEventListener("click", function(){
                        Database.delete(row.params["timeOfSolving"])
                    })
                    cell.appendChild(button)
                }
               
                row.appendChild(cell)
            });
        } 
        table.sort = function(cell){
            if (cell.sorted) {
                table.rows = table.rows.reverse()
                table.rows = (table.rows.slice(cell.int-1)).concat(table.rows.slice(0, cell.int-1))
                table.body.replaceChildren(table.body.firstChild, ...table.rows)
                cell.sorted = false

                return
            }
            const sorter = cell.innerHTML
            let highest = table.rows[table.rows.length - 1]
            table.rows.forEach(row =>{
                if(row.params[sorter] > highest.params[sorter] && !isNaN(row.params[sorter])) highest = row
            })
            let ordered = [highest]
            table.rows.forEach(solve => {
                
                const toAdd = solve.params[sorter]
                let index = 0
                while (true){   
                    let inspected = ordered[index].params[sorter]
                    if (highest == solve) {
                        break
                    }
                    if (!toAdd) {
                        ordered.push(solve)
                        break
                    }
                    if (ordered.length == 1) {
                        ordered.unshift(solve)
                        break
                    }
                    if (toAdd <= inspected) {
                        ordered.splice(index, 0, solve)
                        break
                    }
                    index++
                }
            });
            table.header.cells.forEach(cell => {
                cell.sorted = false
            });
            cell.sorted = true
            
            table.rows = ordered
            table.body.replaceChildren(table.body.firstChild, ...ordered)
        }

        table.create()

        return table
    }
}

export default UI
