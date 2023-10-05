function dbfile() {
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