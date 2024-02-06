class Cube{

    static ammount = 0

    constructor(type,size = 3){
        this.id = Cube.ammount;
        Cube.ammount++;

        this.type = type;
        this.size = size;

        this.location;

    }
    createHTML(location, parent = true){
        location = document.getElementById(location)
        if (parent){
            let div = document.createElement("div");
            div.id = `cube${this.size}${this.id}`;
            location.appendChild(div);
            location = div;
        }
        this.location = location
        location.classList.add("cube-wrapper")
        // ["u","d","r","l","f","b"].forEach(face => {
        //     let div = document.createElement("div");
        //     div.classList.add()
        // });

        console.log(location);
    }
}

let cube = new Cube()

cube.createHTML("show-scramble", false)
