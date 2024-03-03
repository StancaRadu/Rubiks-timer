import * as Utils from "./src/js/utils/utils"
import AvgChart from "./src/js/classes/AvgChart"
import Database from "./src/js/utils/Database"
import { Cube2d, Cube3d} from "./src/js/classes/Cube"
import UI from "./src/js/classes/UI"

let main = Object
main.style = getComputedStyle(document.body)
main.exclude_from_avg = 10
main.scramble_length = 20
main.timer_wait = 300
main.colors = {
    green: main.style.getPropertyValue('--c-green'),
    white: main.style.getPropertyValue('--c-white'),
    blue: main.style.getPropertyValue('--c-blue'),
    yellow: main.style.getPropertyValue('--c-yellow'),
    red: main.style.getPropertyValue('--c-red'),
    orange: main.style.getPropertyValue('--c-orange')
}
main.tables = []
main.charts = []
main.cubes = []

window.onload = async function(){
    await Database.open()
    document.getElementById("website-loading").style.opacity = "0"
    document.getElementById("website-loading").style.display = "none"

    main.charts.push(new AvgChart())
    
    let cube3d = new Cube3d("td-tab")
    let cube2d = new Cube2d(document.getElementById("cube-div"), "scramble", "timer-div")
    main.cubes.push(...[cube3d, cube2d])
    
    cube2d.displayScramble(true)
    cube2d.move_with()

    Utils.loadTimes()

    // UI.__add_tracker(document.getElementById("add-tracker"))

    document.querySelector("#menu").onmousemove = (e) => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${x}px`)
        target.style.setProperty('--mouse-y', `${y}px`)
    }
    await Utils.create_deck(document.querySelector("deck"))

    document.querySelectorAll("card-wrapper").forEach(wrapper => {
        wrapper.onmousemove = (e) => {
            const { currentTarget: target } = e;
    
            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
    
            target.style.setProperty('--mouse-x', `${x}px`)
            target.style.setProperty('--mouse-y', `${y}px`)
        }
    });

    for (const tab of document.querySelector("#menu").getElementsByClassName("tab")) {
        tab.addEventListener("click", (e) =>{
        })
    }
    

}

export default main 