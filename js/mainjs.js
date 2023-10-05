import { dbfile } from "./db";

let db;
let rubikSolves = []
window.onload = function(){
    console.log(1);
    dbfile()
    console.log(2);
    menu()
    timer()
}