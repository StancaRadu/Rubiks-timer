function changePage(clicked){
    let navbar = clicked.parentNode
    let buttons = Array.prototype.slice.call(navbar.children)
    let indidcator = buttons.pop()
    let frame = navbar.parentNode
    let i = 0
    if (frame.classList.contains("full-screen")) {
        return
    }
    buttons.forEach(button => {
        let page = document.getElementById(button.id.replace("-button", ""))
        if (button == clicked){
            frame.style.backgroundColor = `hsl(calc(var(--main-hue) + var(--main-modifier)*${i}), var(--main-saturation), var(--main-lightness))`
            indidcator.style.backgroundColor =  `hsl(calc(var(--main-hue) + var(--main-modifier)*${i}), var(--main-saturation), var(--main-lightness))`
            indidcator.style.transform = `translateX(${i*100}%)`;
            
            page.classList.remove("hidden")
            
        }else page.classList.add("hidden")
        
        i++
    });
}
function expandSide(button){
    let page = button.parentNode.parentNode
    lines = Array.prototype.slice.call(button.children[0].children)
    let vl,hl;
    lines.forEach(line => {
        if (line.classList.contains("vertical-line")) vl = line
        else if (line.classList.contains("horizontal-line")) hl = line
    });

    if (!(page.classList.contains("width0"))) {
        page.classList.add("width0")
        vl.style.transform = "rotateZ(270deg)"
        hl.style.transform = "rotateZ(360deg)"
    }
    else {
        page.classList.remove("width0")
        vl.style.transform = "rotateZ(0)"
        hl.style.transform = "rotateZ(0)"
    }
}
function openModal(id){
    let dialog = document.getElementById(id)
    dialog.showModal()
}
function closeModal(id){
    let dialog = document.getElementById(id)
    dialog.close()
}