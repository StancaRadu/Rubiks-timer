localStorage.clear()
if(!localStorage.length){
    localStorage.setItem("cube_speed", 0.3)
    localStorage.setItem("cube_move_pause", 50)
    localStorage.setItem("default_color", 210)
    console.log('reset');
}
console.log(localStorage);