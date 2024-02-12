var slider = document.getElementById("main-color-picker");
let root = document.documentElement;

slider.oninput = function() {
    root.style.setProperty("--main-color", this.value)
}