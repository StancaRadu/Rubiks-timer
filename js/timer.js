import DataBase from "./Database"

let htmlSeconds = document.getElementById("seconds")
let htmlMiliseconds = document.getElementById("tens")
let htmlMinutes = document.getElementById("minutes")
let htmlTimer = document.getElementById("timer-div")
let htmlScramble = document.getElementById("scramble")
let htmlInstructions = document.getElementById("instructions-span")
let green = "hsl(100, 90%, 50%)"
// let white = "hsl(0, 0%, 100%)"
// let blue = "hsl(225, 90%, 50%)"
let yellow = "hsl(65, 90%, 50%)"
// let red = "hsl(0, 90%, 50%)"
// let orange = "hsl(30, 90%, 50%)"
class Timer{
    constructor(){
        this.wait_to_start = .8
        this.sTime = 0;
        this.nTime = 0;
        this.time = 0;
        this.held = 0;
        this.waited = false;
        this.ready = true;
        this.counting = false;
        this.interval;

        document.addEventListener('keyup', (event) => {
            if (document.getElementById("timer").classList.contains("hidden")) return
            if (event.code == "Space" && !this.counting && this.ready && this.waited){
                this.ready = false;
                htmlInstructions.innerHTML = "Press space"
                this.start()
            }
            else if (!this.ready){
                cube.displayScramble(true)
                this.ready = true;
                htmlInstructions.innerHTML = "Hold space"
            }
            if(event.code == "Space"){
                this.held = 0
                htmlInstructions.style.color = "black"
            }
        });
        document.addEventListener('keydown', (event) => {
            console.log("keydown");
            if (document.getElementById("timer").classList.contains("hidden")) return
            if (event.code == "Space" && !this.counting){
                event.preventDefault();
                htmlInstructions.style.color = yellow
                if (!this.held){
                    this.held = new Date().getSeconds()
                }
                let remaining = this.wait_to_start - (new Date().getSeconds() - this.held + new Date().getMilliseconds()/1000)
                if(remaining <= 0){
                    htmlInstructions.innerHTML = "Release"
                    htmlInstructions.style.color = green
                    this.waited = true
                }else this.waited = false
            }
            if (this.counting && event.code == "Space"){
                event.preventDefault();
                this.stop()
                this.waited = false
            }
        });
    }

    start(){
        if (this.counting) return
        this.sTime = 0;
        this.nTime = 0;
        this.time = 0;
        this.ready = false;
        this.counting = true;

        this.sTime = new Date().getTime();
        this.interval = setInterval(this.count, 10, this);
    }
    display(timer, time = 0){
        if (!time){
            time = ((timer.nTime - timer.sTime)/1000)
                .toFixed(2)
                .toString()
                .split(".")
        }

        let minutes = Math.floor(time[0] / 60)
        let seconds = time[0] % 60
        let miliseconds = parseInt(time[1])

        let dminutes = minutes > 0 ? `${minutes}:` : ""
        let dseconds = seconds > 9 ? `${seconds}` : `0${seconds}`
        let dmiliseconds = miliseconds > 9 ?  `${miliseconds}` : `0${miliseconds}`

        htmlMinutes.innerHTML = dminutes
        htmlSeconds.innerHTML = dseconds
        htmlMiliseconds.innerHTML = dmiliseconds

        let solveTime = parseFloat(`${time[0]}.${time[1]}`)
    }
    count(timer){
        timer.nTime = new Date().getTime();
        timer.time = timer.nTime - timer.sTime
        timer.display(timer)
    }   
    stop(){
        if (!this.counting) return
        this.counting = false;
        clearInterval(this.interval)

        this.log(this.time/1000)
    }
    log(time){
        DataBase.add("sd", time)
    }
}

export default Timer