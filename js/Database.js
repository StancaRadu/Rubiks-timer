import AvgChart from "./AvgChart";
import Table from "./Table";
import { loadTimes } from "./utils";

class Database{
    static toUpdate = []
    constructor(){
      this.db;
    }

    static open(){
      return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("database", 1);
        request.onerror = (event) => {
          console.log(event);
          reject()
        };
    
        request.onsuccess = () => {
          this.db = request.result;
          resolve()
        };
    
        request.onupgradeneeded = () => {
          this.db = request.result;
          const store = db.createObjectStore("solves", { keyPath: 'timeOfSolving' });
          store.createIndex("time", ["seconds"], {unique:false})
          resolve()
        };
      })
    }
    static getConnectionToStore(store){
      const transaction = this.db.transaction([store], "readwrite");
      transaction.oncomplete  = (event) => {
      };
      transaction.onerror = (event) => {
        console.log("--error: " + event);
      };
      const toReturn = transaction.objectStore(store);
    
      return toReturn
    }
    static add(scramble, time){
      const store = this.getConnectionToStore("solves")
      
      let newEntry = {
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
        let to_update = [].concat(AvgChart.charts, Table.tables)
        to_update.forEach( element => {
          element.addTime(newEntry)
        })
      };
      putTransaction.onerror = (event) => {
        console.log("--error: " + event);
      };
    }
    static get(index = "timeOfSolve", value = NaN){
      return new Promise((resolve, reject) => {
        const store = this.getConnectionToStore("solves")
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
    static delete(id){
      const store = this.getConnectionToStore("solves")
    
      let query = store.delete(id);
      query.onsuccess = () =>{
        loadTimes()
      }
      query.onerror = (event) =>{
        console.log(event);
      }
    }  
}

export default Database
