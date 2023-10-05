// import{
//   get,
//   set
// } from 'https://cdn.jsdelivr.net/npm/idb-keyval@5/dist/iife/index.js'

function dbfile() {
    const request = window.indexedDB.open("database", 1);
    request.onerror = (event) => {
        console.log(event);
      };
      request.onupgradeneeded = (event) => {
        db = request.result;
        console.log(db);
      };
}