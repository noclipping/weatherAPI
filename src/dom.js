import {pullData} from './weatherapi'
import {weatherAPI} from './objcts'
let cityInput = document.querySelector("#city-input");

let cityButton = document.querySelector("#city-button")

let weatherContainer = document.querySelector(".weather-container")

let image = document.querySelector(".weather-image")

let description = document.querySelector(".description")

let temperature = document.querySelector(".temperature")

cityButton.addEventListener("click", e=>{
    weatherAPI.json(cityInput.value).then((v)=>{
        console.log(v.weather[0].icon);
        image.src = `https://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`
        description.textContent = v.weather[0].description;
        temperature.textContent = Math.floor(v.main.temp)+"°F"
    })
    .catch((err)=>{
        console.log(err)
    })
})
cityInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        cityButton.click();
    }
});