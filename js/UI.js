class UI{
    constructor(){

    }
    static button(type){
        const button = document.createElement("div")

        const graphic = document.createElement("div")
        const line1 = document.createElement("div")
        const line2 = document.createElement("div")

        graphic.appendChild(line1)
        graphic.appendChild(line2)

        graphic.classList.add("button-graphic")
        line1.classList.add("button-graphic-line")
        line2.classList.add("button-graphic-line")

        switch (type) {
            case "expand":
                graphic.classList.add("expand-graphic")
                line1.classList.add("expand-graphic-line")
                line1.classList.add("diagonal-incline")

                line2.classList.add("expand-graphic-line")
                line2.classList.add("diagonal-decline")
                break;
        
            case "delete":
                graphic.classList.add("delete-graphic")
                line1.classList.add("delete-graphic-line")
                line1.classList.add("diagonal-incline")

                line2.classList.add("delete-graphic-line")
                line2.classList.add("diagonal-decline")
                break;
        }

        button.classList.add("tab-button")
        button.appendChild(graphic)
        return button
    }
}

export default UI
