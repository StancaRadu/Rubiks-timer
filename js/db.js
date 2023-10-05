import {
  get,
  set
}from 'https://cdn.jsdelivr.net/npm/idb-keyval@5/dist/esm/index.js'


function db_file() {
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
function rubik_set(scramble, time){
  set(scramble, time)
    .then(()=>{
      console.log("yay");
    })
    .catch(console.log(":("))
}

window.db_file = db_file;
window.rubik_set = rubik_set;