import * as THREE from 'three'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import Cube from './Cube'

let green = "hsl(100, 90%, 50%)"
let white = "hsl(0, 0%, 100%)"
let blue = "hsl(225, 90%, 50%)"
let yellow = "hsl(65, 90%, 50%)"
let red = "hsl(0, 90%, 50%)"
let orange = "hsl(30, 90%, 50%)"

export default class Canvas3d{
    constructor(location){
        this.parent = document.getElementById(location)
        this.canvas = document.createElement("canvas")
        this.canvas.classList.add("bg")
        this.parent.appendChild(this.canvas)

        this.scene = new THREE.Scene()
        this.light = new THREE.AmbientLight( white )
        this.camera = new THREE.PerspectiveCamera(50)
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, alpha: true })
        this.controls = new OrbitControls(this.camera, this.canvas)
        this.defaults()
        this.addResizer(this, this.parent)
        this.animate(this)
    }
    cameraPosition(positions){
        for (const key in positions) {
            switch (key) {
                case "x":
                    this.camera.position.x = positions[key]
                    break;
                case "y":
                    this.camera.position.y = positions[key]
                    break;
                case "z":
                    this.camera.position.z = positions[key]
                    break;
            }
        }
    }
    defaults(){
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.scene.add(this.light)
        this.scene.add(this.camera)
        this.cameraPosition({x:2, y:3, z:8})
        this.controls.enableDamping = true;
        this.controls.enablePan = false;
        this.controls.enableZoom = false;

    }
    animate(canvas){
        requestAnimationFrame(()=>{canvas.animate(canvas)})
        if(canvas.parent.classList.contains("hidden")) return;
        canvas.controls.update()
        canvas.renderer.render(canvas.scene, canvas.camera)
    }
    addResizer(canvas, location){
        const resizeObserver = new ResizeObserver((entries) => {
            let size = {
                width: location.clientWidth,
                height: location.clientHeight
            }
            canvas.renderer.setSize(size.width, size.height);
            canvas.camera.aspect = size.width / size.height
            canvas.camera.updateProjectionMatrix()
        });
        resizeObserver.observe(location)
    }
}

