window.onload = async function(){
    await openDB()
    createChart()
    loadTimes()
    timer()
    createLeftBarOpenButton()
}