import DataBase from "./Database"

let green = "hsl(100, 90%, 50%)"
let yellow = "hsl(65, 90%, 50%)"
class Timer{
    constructor(id = "timer-div"){
        this.div = document.getElementById(id)

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
            if (this.div.classList.contains("hidden")) return
            if (event.code == "Space" && !this.counting && this.ready && this.waited){
                this.ready = false;
                this.instructions.innerHTML = "Press space"
                this.start()
            }
            else if (!this.ready){
                cube.displayScramble(true)
                this.ready = true;
                this.instructions.innerHTML = "Hold space"
            }
            if(event.code == "Space"){
                this.held = 0
                this.instructions.style.color = "black"
            }
        });
        document.addEventListener('keydown', (event) => {
            console.log("keydown");
            if (this.div.classList.contains("hidden")) return
            if (event.code == "Space" && !this.counting){
                event.preventDefault();
                this.instructions.style.color = yellow
                if (!this.held){
                    this.held = new Date().getSeconds()
                }
                let remaining = this.wait_to_start - (new Date().getSeconds() - this.held + new Date().getMilliseconds()/1000)
                if(remaining <= 0){
                    this.instructions.innerHTML = "Release"
                    this.instructions.style.color = green
                    this.waited = true
                }else this.waited = false
            }
            if (this.counting && event.code == "Space"){
                event.preventDefault();
                this.stop()
                this.waited = false
            }
        });


        this.place(this)
    }

    place(location){
        this.timer = document.createElement("p")
        this.minutes = document.createElement("span")
        this.seconds = document.createElement("span")
        this.miliseconds = document.createElement("span")
        this.instructions = document.createElement("span")

        this.timer.classList.add("timer")
        this.minutes.classList.add("minutes")
        this.seconds.classList.add("seconds")
        this.miliseconds.classList.add("miliseconds")

        this.instructions.id = "instructions-span"

        this.instructions.innerHTML = "Hold Space"
        this.seconds.innerHTML = "00"
        this.miliseconds.innerHTML = "00"

        this.timer.appendChild(this.minutes)
        this.timer.appendChild(this.seconds)
        this.timer.appendChild(this.miliseconds)
        this.div.appendChild(this.timer)
        this.div.appendChild(this.instructions)
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

        console.log(this.minutes);
        this.minutes.innerHTML = dminutes
        this.seconds.innerHTML = dseconds
        this.miliseconds.innerHTML = dmiliseconds

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