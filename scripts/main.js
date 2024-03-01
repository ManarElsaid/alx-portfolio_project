const apiKey = "1e427ad5a56d02a3d21d870b54e3bc6a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search input");
const searchButn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const findTips = document.querySelector(".tips");
const topButtom = document.querySelector(".top");
const middleButtom = document.querySelector(".middle");
const bottomButtom = document.querySelector(".buttom");

async function checkWeather(cityname){
    const response = await fetch(apiUrl + cityname + `&appid=${apiKey}`);
    var weatherData = await response.json();

    document.querySelector(".cityname").innerHTML = weatherData.name;
    document.querySelector(".tmp").innerHTML = Math.round(weatherData.main.temp) + "°c";
    document.querySelector(".humdity").innerHTML = weatherData.main.humidity + "%";
    document.querySelector(".wind").innerHTML = weatherData.wind.speed + " km/h";

    if(weatherData.weather[0].main == "Clouds"){
        weatherIcon.src = "../images/clouds.png";
    }
    else if (weatherData.weather[0].main == "Rain"){
        weatherIcon.src = "../images/rain.png";
    }
    else if (weatherData.weather[0].main == "Mist"){
        weatherIcon.src = "../images/mist.png";
    }
    else if (weatherData.weather[0].main == "Drizzle"){
        weatherIcon.src = "../images/drizzle.png";
    }
    else if (weatherData.weather[0].main == "Clear"){
        weatherIcon.src = "../images/clear.png";
    }
    else if (weatherData.weather[0].main == "Snow"){
        weatherIcon.src = "../images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".tips").style.display = "block";
};

searchButn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
});

findTips.addEventListener("click", ()=>{
    document.querySelector(".profile").style.display = "block";
})

topButtom.addEventListener("click", ()=>{
    document.querySelector(".mom").style.display = "block";
    // document.querySelector(".male").style.display = "none";
    // document.querySelector(".female").style.display = "none";

})

middleButtom.addEventListener("click", ()=>{
    document.querySelector(".male").style.display = "block";
    // document.querySelector(".mom").style.display = "none";
    // document.querySelector(".female").style.display = "none";
})

bottomButtom.addEventListener("click", ()=>{
    document.querySelector(".female").style.display = "block";
    // document.querySelector(".mom").style.display = "none";
    // document.querySelector(".male").style.display = "none";
})




