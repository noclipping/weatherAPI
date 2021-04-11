let getInfo = async function(city){
    let link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb26cf51dc89b8cefda54030ebd28499&units=imperial`
    let info = await fetch(link, {mode:'cors'});
    let response = await info.json()
    return(response);
}

const weatherAPI = {
    json: async function(city){
        let info = await getInfo(city);
        return(info);
    }
}
export {weatherAPI};