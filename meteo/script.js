const apiKey = "f4e83224516fc36e24245ebe12c53981";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const geoApiUrl = "https://api.openweathermap.org/data/2.5/weather?"
const searchInput = document.querySelector(".search input");
const searchBtn = document.getElementById("searchBtn");
const condition = document.querySelector(".condition")
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const url = `${apiUrl}${city}&appid=${apiKey}`;
    await fetchWeatherData(url)
}

async function checkWeatherWithGeo(latitude, longitude) {
    const url = `${geoApiUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    await fetchWeatherData(url);
}

async function fetchWeatherData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        updateWeatherUI(data);
    } catch(error) {
        console.log(error);
        searchInput.placeholder = "Enter an existing city";
        searchInput.classList.add("placeholder-red");
    }
    searchInput.value = "";
}

function updateWeatherUI(data) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherIcons = {
        "Clouds": "images/cloudy.png",
        "Clear": "images/clear-day.png",
        "Rain": "images/rain.png",
        "Drizzle": "images/light-rain.png",
        "Mist": "images/mist.png",
        "Thunderstorm": "images/thunderstorm.png",
        "Snow": "images/snow.png"
    }
    weatherIcon.src = weatherIcons[data.weather[0].main];
    document.querySelector(".weather").style.display = "block";
    condition.innerHTML = data.weather[0].main;
}

searchBtn.addEventListener("click", () => {
    checkWeather(validateInput(searchInput.value));    
}) 



searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        checkWeather(validateInput(searchInput.value))
    }
})


searchInput.addEventListener("focus", function() {
    searchInput.placeholder = "";
})

searchInput.addEventListener("blur", function() {
    searchInput.placeholder = "Enter City Name"
})

document.addEventListener("click", (e) => {
    searchInput.classList.remove("placeholder-red")
    searchInput.placeholder = "Enter City Name"
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            checkWeatherWithGeo(latitude, longitude);
        },
        (error) => {
            console.error(`Geolocation error: ${error.message}`);
        }
    );
} else {
    console.log("we couldn't find the weather for your location");
}

function validateInput(userSearchTerm) {
    userSearchTerm = userSearchTerm.trim();
    const specialCharacter = /[^a-zA-Zà-ÿÀ-Ÿ\s-]/;
    if (specialCharacter.test(userSearchTerm) || userSearchTerm === "") {
        searchInput.placeholder = "Enter an existing city";
        searchInput.classList.add("placeholder-red");
        return "";
    } 
    return userSearchTerm
}