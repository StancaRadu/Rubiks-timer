function createLeftBarOpenButton(){
    let htmlLeftBarOpenButton = document.getElementById("left-bar-control-open")
    htmlLeftBarOpenButton.addEventListener('click', (event) => {
        let htmlLeftBar = document.getElementById("statistics-div")
        
        if(htmlLeftBar.style.width == "500px"){
            htmlLeftBar.style.width = "0"
            htmlLeftBar.style.visibility = "hidden"
            htmlLeftBarOpenButton.style.transform = "none"
        }else {
            htmlLeftBar.style.width = "500px"
            htmlLeftBar.style.visibility = "visible"
            htmlLeftBarOpenButton.style.transform = "rotateZ(180deg)"
        }
        
    });
}

function scrambleToText(scramble){
    let toReturn = ""
    for (move in scramble){
        toReturn += `${scramble[move]} `
    }
    return toReturn.slice(0,-1)
}

function timeStampToDate(stamp){
    const date = new Date(stamp);
    return date.getDate() + '/' +  (date.getMonth()+1);
}