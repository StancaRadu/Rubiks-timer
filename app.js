import * as Utils from "./src/js/utils/utils"
import AvgChart from "./src/js/classes/AvgChart"
import Database from "./src/js/utils/Database"
import { Cube2d, Cube3d} from "./src/js/classes/Cube"
import UI from "./src/js/classes/UI"
import Solver from "./src/js/classes/Solver"

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

window.onload = async function()
{
    document.querySelector('#left-screen c-button').click()
    await Database.open()


    main.charts.push(new AvgChart())
    let default_table = UI.table(['Seconds', 'Avg. 5', "Avg. 12"])
    document.getElementById("statistics-div").appendChild(UI.sideApp([UI.sideTitle("History"), default_table.container]))
    await UI.decks(document.getElementById("algs-div"))
    
    let cube3d = new Cube3d("3D-cube")
    let cube2d = new Cube2d(document.getElementById("cube-div"), "scramble", "timer-div")
    main.cubes.push(...[cube3d, cube2d])
    let solver = new Solver(cube3d)

    cube2d.displayScramble(true)
    cube2d.move_using_()


    document.querySelector("#menu").onmousemove = (e) => 
    {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            
            target.style.setProperty('--mouse-x', `${x}px`)
        target.style.setProperty('--mouse-y', `${y}px`)
    }

    document.querySelectorAll("card-wrapper").forEach(wrapper =>
    {
        wrapper.onmousemove = (e) => {
            const { currentTarget: target } = e;
            
            const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            
            target.style.setProperty('--mouse-x', `${x}px`)
            target.style.setProperty('--mouse-y', `${y}px`)
        }
    });

    Utils.loadTimes()
    Utils.create_navbars()

    document.getElementById("website-loading").style.opacity = "0"
    document.getElementById("website-loading").style.display = "none"
}

export default main 