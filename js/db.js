function openDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("database", 1);
    request.onerror = (event) => {
      console.log(event);
    };

    request.onsuccess = (event) => {
      db = request.result;
      resolve()
    };

    request.onupgradeneeded = (event) => {
      db = request.result;
      const store = db.createObjectStore("solves", { keyPath: 'timeOfSolving' });
      store.createIndex("time", ["seconds"], {unique:false})
      resolve()
    };
  })
}

function getConnectionToStore(store){
  const transaction = db.transaction([store], "readwrite");
  transaction.oncomplete  = (event) => {
  };
  transaction.onerror = (event) => {
    console.log("--error: " + event);
  };
  const toReturn = transaction.objectStore(store);

  return toReturn
}

function addTimeDB(scramble, time){
  const store = getConnectionToStore("solves")
  
  newEntry = {
    "timeOfSolving": Date.now(),
    "scramble": scramble,
    "seconds": time,
    "puzzle": "3x3",
    "session": "main",
    "penalty": 0,
    "dnf": false,
    "comments": ""
  }
  const putTransaction = store.put(newEntry)
  
  putTransaction.onsuccess = () => {
    addTimeToChart(newEntry)
    addTimeToHistory(newEntry)
  };
  putTransaction.onerror = (event) => {
    console.log("--error: " + event);
  };
}

function getTimeDB(index = "timeOfSolve", value = NaN){
  return new Promise((resolve, reject) => {
    const store = getConnectionToStore("solves")
    let getRequest;

    if (index == "timeOfSolve"){
      getRequest = store.getAll()
    }else console.log("wrong index!");

    getRequest.onsuccess = () =>{
      resolve(getRequest.result)
    }
    getRequest.onerror = (event) =>{
      console.log(event);
    }
  })
}

function deleteTimeDB(id){
  const store = getConnectionToStore("solves")

  let query = store.delete(id);
  query.onsuccess = () =>{
    loadTimes()
  }
  query.onerror = (event) =>{
    console.log(event);
  }
}
