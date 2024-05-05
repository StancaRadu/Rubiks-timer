import main from "../../../app"
import Database from "../utils/Database"
import { average, loadTimes, reverseScramble } from "../utils/utils"
import { Cube2d } from "./Cube"

class UI{
    constructor(){

    }
    static button(type, styles = {}){
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
            
            case "add":
                button.classList.add("carved")
                graphic.classList.add("add-graphic")
                line1.classList.add("vertical-line")
        }

        button.appendChild(graphic)

        for (const style in styles) {
            title.style[style] = styles[style]
        }

        return button
    }

    static table(fields, styles = {}){
        fields.unshift("No.")
        fields.push("")
        let table = {}

        table.rows = []
        table.fields = fields

        table.create = function(){
            table.container = document.createElement("side-content")
            table.body = document.createElement("table-body")
            table.header = document.createElement("table-row")

            table.container.appendChild(table.body)
            table.container.style.resize = "none"

            table.body.style.gridTemplateColumns = `50px repeat(${fields.length-2}, 1fr) 50px`
            table.header.id = "header"
            table.header.cells = []
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
                    cell.style.overflow = "hidden"
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
        for (const style in styles) {
            table[style] = styles[style]
        }
        main.tables.push(table)
        loadTimes()
        return table
    }

    static sideApp(children, styles = {}){
        let app = document.createElement("side-app")
        app.classList.add("carved")
        for (const style in styles) {
            title.style[style] = styles[style]
        }
        app.replaceChildren(...children)
        return app
    }

    static async decks(location, styles = {}){
        let decks = await (await fetch("../static-DB/algs.json")).json()

        for (const title in decks) {
            const deck = document.createElement('deck')
            location.appendChild(deck)
            for (const style in styles) deck.style[style] = styles[style]

            const title_card = document.createElement('title-card')
            deck.appendChild(title_card)

            let description = decks[title]['description']
            let algs = decks[title]['algs']

            for (const alg in algs) {
                const wrapper = document.createElement('card-wrapper')
                wrapper.innerHTML = `
                    <card>
                        <cube_area></cube_area>
                        <h1>${alg}</h1>
                    </card>
                    `
                let cube_area = wrapper.querySelector("cube_area")
                let cube = new Cube2d(cube_area, null, null, "top")
                cube.move_using_(reverseScramble(algs[alg]))
                wrapper.addEventListener("click", (e)=>{
                    main.cubes[0].move_using_(algs[alg])
                })
                deck.appendChild(wrapper)
                
            }
            title_card.innerHTML = `<h1>${title}</h1><div><div id='title-card-description'>${description}</div></div>`

            function scrollFunction() {
                if (deck.scrollLeft > 8) {
                    title_card.style.width = '2lh'
                    title_card.querySelector('h1').style.transform = 'rotate(90deg)'
                    title_card.querySelector('#title-card-description').style.transform = 'rotate(90deg) translateY(200%)'
                } else if (deck.scrollLeft === 0){
                    title_card.style.width = '20ch'
                    title_card.querySelector('h1').style.transform = 'none'
                    title_card.querySelector('#title-card-description').style.transform = 'none'
                }
            }

            deck.onscroll = function(){ scrollFunction() }
        }

    }

    static sideTitle(text, styles = {}){
        let title = document.createElement("h1")
        title.classList.add("left-oc-header")
        title.innerHTML = text
        for (const style in styles) {
            title.style[style] = styles[style]
        }
        return title
    }
    
    static tracker_picker(styles = {}){
        let picker = document.createElement("picker")

        picker.innerHTML = `
            <div id="table-picker">
                <h1>Table</h1>
                <ul>
                    <li>Display solves(times) saved in the databse</li>
                    <li>Delete solves</li>
                    <li>Sort solves</li>
                    <li>Show averages</li>
                </ul>
            </div>
            <div id="chart-picker">
                <h1>Chart</h1>
                <ul>
                    <li>:)</li>
                    <li>:)</li>
                    <li>:)</li>
                    <li>:)</li>
                </ul>
            </div>
        `
        
        for (const style in styles) {
            picker.style[style] = styles[style]
        }
        return picker
    }

    static __add_tracker(button){
        button.addEventListener("click", (event)=>{
            document.getElementById("statistics-div")
                .insertBefore(UI.sideApp(), button.parentNode)
                .appendChild(UI.table(["Seconds", "Avg.3", "Avg.5", "Avg.12"]).container)
        })
    }
}

export default UI
