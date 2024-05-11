// localStorage.clear()
if(!localStorage.length){
    localStorage.setItem("cube_speed", 0.3)
    localStorage.setItem("cube_pause", 50)
    localStorage.setItem("--main-hue", 210)
    localStorage.setItem("font-size", '16px')
    console.log('reset');
}

function applyStoredSettings(){
    let style = document.documentElement.style
    style.setProperty("--main-hue", localStorage.getItem('--main-hue'))
    style.setProperty("font-size", localStorage.getItem('font-size'))
}

applyStoredSettings()
console.log(localStorage);