window.onload = async function(){
    await openDB()
    createChart()
    loadTimesIntoHistory()
    timer()
    createLeftBarOpenButton()
}