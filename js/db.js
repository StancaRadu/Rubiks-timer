import {
  get,
  set
}from 'https://cdn.jsdelivr.net/npm/idb-keyval@5/dist/esm/index.js'


export function dbfile() {
  console.log("db file callled");
    const request = window.indexedDB.open("database", 1);
    request.onerror = (event) => {
        console.log(event);
      };
      request.onupgradeneeded = (event) => {
        db = request.result;
        console.log(db);
      };
}
export function rubik_set(scramble, time){
  set(scramble, time)
    .then(()=>{
      console.log("yay");
    })
    .catch(console.log(":("))
}