function db_file() {
  const request = window.indexedDB.open("database", 1);
    request.onerror = (event) => {
      console.log(event);
    };

    request.onsuccess = (event) => {
      db = request.result;
    };

    request.onupgradeneeded = (event) => {
      db = request.result;
      const store = db.createObjectStore("solves", { keyPath: 'timeOfSolving' });
      store.createIndex("scramble", ["scramble"], {unique:false})
      store.createIndex("time", "seconds", {unique:false})
    };
}

function addTimeDB(scramble, time){
  const transaction = db.transaction(["solves"], "readwrite");
  transaction.oncomplete = (event) => {
    console.log(event);
  };
  transaction.onerror = (event) => {
    console.log("--error: " + event);
  };

  const store = transaction.objectStore("solves");
  
  const putTransaction = store.put({
    timeOfSolving: Date.now(),
    scramble: scramble,
    seconds: time[0]*60 + time[1]
  })
  putTransaction.onsuccess = (event) => {
  };
  putTransaction.onerror = (event) => {
    console.log("--error: " + event);
  };
}
