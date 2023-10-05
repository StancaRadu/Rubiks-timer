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