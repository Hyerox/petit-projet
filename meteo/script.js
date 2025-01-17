// FIRST WAY OF DOING IT BUT IT HAD PROBLEMS SO I DECIDED TO START OVER

// const apiKey = "f4e83224516fc36e24245ebe12c53981";
// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const geoApiUrl = "https://api.openweathermap.org/data/2.5/weather?"
// const searchInput = document.querySelector(".search input");
// const searchBtn = document.getElementById("searchBtn");
// const weatherIcon = document.querySelector(".weather-icon");
// const condition = document.querySelector(".condition")

// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//         if (!response.ok) {
//             throw new Error("City not found");
//         }
//         const data = await response.json();
//         console.log(data);

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

//         if (data.weather[0].main === "Clouds") {
//             weatherIcon.src = "images/cloudy.png";
//         } else if (data.weather[0].main === "Clear") {
//             weatherIcon.src = "images/clear-day.png";
//         } else if (data.weather[0].main === "Rain") {
//             weatherIcon.src = "images/rain.png";
//         } else if (data.weather[0].main === "Drizzle") {
//             weatherIcon.src = "images/light-rain.png";
//         } else if (data.weather[0].main === "Mist") {
//             weatherIcon.src = "images/mist.png";
//         } else if (data.weather[0].main === "Thunderstorm") {
//             weatherIcon.src = "images/thunderstorm.png";
//         } else if (data.weather[0].main === "Snow") {
//             weatherIcon.src = "images/snow.png";
//         }

//         document.querySelector(".weather").style.display = "block";
//         condition.innerHTML = data.weather[0].main;

//     } catch (error) {
//         console.log(error);
//         searchInput.placeholder = "Enter an existing city";
//         searchInput.classList.add("placeholder-red");
//     }
//     searchInput.value = "";
// }
// searchBtn.addEventListener("click", () => {
//     checkWeather(validation(searchInput.value));    
// }) 



// searchInput.addEventListener("keydown", function(e) {
//     if (e.key === "Enter") {
//         checkWeather(validation(searchInput.value))
//     }
// })


// searchInput.addEventListener("focus", function() {
//     searchInput.placeholder = "";
// })

// searchInput.addEventListener("blur", function() {
//     searchInput.placeholder = "Enter City Name"
// })

// document.addEventListener("click", (e) => {
//     searchInput.classList.remove("placeholder-red")
//     searchInput.placeholder = "Enter City Name"
// })

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;

//             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            
//             // Remplacer la ligne API URL avec les coordonnées de géolocalisation
//             async function checkWeatherWithGeo() {
//                 try {
//                     // https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
//                     // "https://api.openweathermap.org/data/2.5/weather?"
//                     const response = await fetch(geoApiUrl + `lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
//                     if (!response.ok) {
//                         throw new Error("City not found");
//                     }
//                     const data = await response.json();
//                     console.log(data);
            
//                     document.querySelector(".city").innerHTML = data.name;
//                     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//                     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//                     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
//                     if (data.weather[0].main === "Clouds") {
//                         weatherIcon.src = "images/cloudy.png";
//                     } else if (data.weather[0].main === "Clear") {
//                         weatherIcon.src = "images/clear-day.png";
//                     } else if (data.weather[0].main === "Rain") {
//                         weatherIcon.src = "images/rain.png";
//                     } else if (data.weather[0].main === "Drizzle") {
//                         weatherIcon.src = "images/light-rain.png";
//                     } else if (data.weather[0].main === "Mist") {
//                         weatherIcon.src = "images/mist.png";
//                     } else if (data.weather[0].main === "Thunderstorm") {
//                         weatherIcon.src = "images/thunderstorm.png";
//                     } else if (data.weather[0].main === "Snow") {
//                         weatherIcon.src = "images/snow.png";
//                     }
            
//                     document.querySelector(".weather").style.display = "block";
//                     condition.innerHTML = data.weather[0].main;
            
//                 } catch (error) {
//                     console.log(error);
//                     searchInput.placeholder = "We couldn't find the weather for your location";
//                     searchInput.classList.add("placeholder-red");
//                 }
//                 searchInput.value = "";
//             }
            
//             // Effectuer la requête avec la nouvelle URL et afficher la météo
            
//         },
//         (error) => {
//             console.error(`Erreur lors de la géolocalisation : ${error.message}`);
//         }
//     );
// } else {
//     console.log("La géolocalisation n'est pas supportée par ce navigateur.");
// }

// function validation(userSearchTerm) {
//     userSearchTerm = userSearchTerm.trim();
    
//     if (!isNaN(userSearchTerm)) {
//         searchInput.placeholder = "Enter an existing city"; 
//         searchInput.classList.add("placeholder-red");
//         return ""
        
//     }
//     return userSearchTerm;
// }

// SECOND WAY OF DOING IT. DIFFERENT BUT EFFICIENT

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

    weatherIcon.src = weatherIcons[data.weather[0].main] || "images/default.png";
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
    if (!isNaN(userSearchTerm) || userSearchTerm === "") {
        searchInput.placeholder = "Enter an existing city";
        searchInput.classList.add("placeholder-red");
        return "";
    } 
    return userSearchTerm
}