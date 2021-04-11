
    let weatherContainer = document.querySelector(".weather-container")

let getInfo = async function(city){
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb26cf51dc89b8cefda54030ebd28499&units=imperial`
    let info = await fetch(link, {mode:'cors'});
    let response = await info.json()
    return(response);
}

let pullData = async function(city){
    let image = document.querySelector(".weather-image");
    let info = await getInfo(city);
    image.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    console.log(info.weather[0].icon)
    console.log(info.main.temp)
    weatherContainer.appendChild(image);
}


export {getInfo, pullData}