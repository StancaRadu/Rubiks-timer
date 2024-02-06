let htmlSeconds = document.getElementById("seconds")
let htmlMiliseconds = document.getElementById("tens")
let htmlMinutes = document.getElementById("minutes")
let htmlTimer = document.getElementById("timer-div")
let htmlScramble = document.getElementById("scramble")
let htmlInstructions = document.getElementById("instructions-span")


// to be implemented
wait_to_start = 1
// 


class Timer{
    constructor(){
        this.sTime = 0;
        this.nTime = 0;
        this.time = 0;
        this.held = 0;
        this.waited = false;
        this.ready = true;
        this.counting = false;
        this.interval;
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
        console.log(minutes,seconds,miliseconds);
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
        addTimeDB("sd", time)
    }
}

let timer = new Timer


document.addEventListener('keyup', (event) => {
    if (event.code == "Space" && !timer.counting && timer.ready && timer.waited){
        timer.ready = false;
        timer.start()
    }
    else if (!timer.ready){
        timer.ready = true;
    }
    if(event.code == "Space"){
        timer.held = 0
    }
});
document.addEventListener('keydown', (event) => {
    if (event.code == "Space" && !timer.counting){
            if (!timer.held){
                timer.held = new Date().getSeconds()
            }
            timer.waited = (new Date().getSeconds() - timer.held) >= wait_to_start ? true : false
    }
    if (timer.counting && event.code == "Space"){
        timer.stop()
        timer.waited = false
    }
});


document.getElementById("new-scramble-button").addEventListener("click", () =>{
    // scramble = generateScramble(scrambleLength)
})