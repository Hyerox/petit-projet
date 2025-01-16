const apiKey = "f4e83224516fc36e24245ebe12c53981";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.querySelector(".weather-icon");
const condition = document.querySelector(".condition")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    
    


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear-day.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/light-rain.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "images/thunderstorm.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    } 

    document.querySelector(".weather").style.display = "block"

    condition.innerHTML = data.weather[0].main;
    searchInput.value = "";

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value)
})

searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        checkWeather(searchInput.value)
    }
})

searchInput.addEventListener("focus", function() {
    searchInput.placeholder = "";
})

searchInput.addEventListener("blur", function() {
    searchInput.placeholder = "Enter City Name"
})



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
            console.error(`Erreur lors de la géolocalisation : ${error.message}`);
        }
    );
} else {
    console.log("La géolocalisation n'est pas supportée par ce navigateur.");
}