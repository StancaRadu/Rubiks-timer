let htmlSeconds = document.getElementById("seconds")
let htmlMiliseconds = document.getElementById("tens")
let htmlMinutes = document.getElementById("minutes")
let htmlTimer = document.getElementById("timer-div")
let htmlScramble = document.getElementById("scramble")
let htmlInstructions = document.getElementById("instructions-span")



class Timer{
    constructor(){
        this.sTime = 0;
        this.nTime = 0;
        this.time = 0;
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
        let miliseconds = time[1]
        let solveTime = parseFloat(`${time[0]}.${time[1]}`)
        console.log(solveTime);
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
    }
}

let timer = new Timer


document.addEventListener('keyup', (event) => {
    if (!timer.counting && event.code == "Space" && timer.ready){
        timer.ready = false;
        timer.start()
    }
    else if (!timer.ready){
        timer.ready = true;
    }
});
document.addEventListener('keydown', (event) => {
    if (timer.counting && event.code == "Space"){
        timer.stop()
    }
});
document.getElementById("new-scramble-button").addEventListener("click", () =>{
    // scramble = generateScramble(scrambleLength)
})