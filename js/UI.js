class UI{
    constructor(){

    }
    static button(type){
        const button = document.createElement("c-button")

        const graphic = document.createElement("button-graphic")
        const line1 = document.createElement("line")
        const line2 = document.createElement("line")

        graphic.appendChild(line1)
        graphic.appendChild(line2)

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

        button.appendChild(graphic)
        return button
    }
}

export default UI
