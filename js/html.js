function changePage(clicked){
    let navbar = clicked.parentNode
    let buttons = Array.prototype.slice.call(navbar.children)
    let indidcator = buttons.pop()
    let frame = navbar.parentNode
    let root = getComputedStyle(document.body)
    let color = root.getPropertyValue("--main-color")
    let modifier = root.getPropertyValue("--main-color")
    let saturation = root.getPropertyValue("--main-color")
    let lightness = root.getPropertyValue("--main-color")
    
    let i = 0

    buttons.forEach(button => {
        let page = document.getElementById(button.id.split("-")[0])

        if (button == clicked){
            frame.style.backgroundColor = `hsl(calc(var(--main-color) + var(--main-modifier)*${i}), var(--main-saturation), var(--main-lightness))`
            indidcator.style.backgroundColor =  `hsl(calc(var(--main-color) + var(--main-modifier)*${i}), var(--main-saturation), var(--main-lightness))`

            page.classList.remove("hidden")
            indidcator.style.transform = `translateX(${i*100}%)`;
        
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

    if (page.clientWidth > 0) {
        page.style.width = 0
        vl.style.transform = "rotateZ(270deg)"
        hl.style.transform = "rotateZ(360deg)"
    }
    else {
        page.style.width = "500px"
        vl.style.transform = "rotateZ(0)"
        hl.style.transform = "rotateZ(0)"
    }
}