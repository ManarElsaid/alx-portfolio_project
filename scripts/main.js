const apiKey = "1e427ad5a56d02a3d21d870b54e3bc6a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search input");
const searchButn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const findTips = document.querySelector(".tips");
const topButton = document.querySelector(".top");
const middleButton = document.querySelector(".middle");
const bottomButton = document.querySelector(".bottom");
const momContent = document.querySelector(".mom p");
const maleContent = document.querySelector(".male p");
const femaleContent = document.querySelector(".female p");

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

        //changing tips for rainy days
        momContent.innerHTML = "Opt for waterproof outerwear like a trench coat or a stylish rain jacket. Pair it with rain boots and a compact umbrella for added protection without compromising on fashion.";
        femaleContent.innerHTML = "Stay dry without sacrificing style by opting for a chic trench coat or a trendy waterproof jacket. Pair it with stylish rain boots and a cute umbrella to complete your rainy day ensemble.";
        maleContent.innerHTML = "Stay dry in style with a waterproof jacket or coat. Opt for a versatile trench coat or a sporty rain jacket paired with waterproof shoes to keep your feet dry and comfortable.";
    }
    else if (weatherData.weather[0].main == "Mist"){
        weatherIcon.src = "../images/mist.png";
    }
    else if (weatherData.weather[0].main == "Drizzle"){
        weatherIcon.src = "../images/drizzle.png";
    }
    else if (weatherData.weather[0].main == "Clear"){
        weatherIcon.src = "../images/clear.png";

        //changing tips for clear weather
        momContent.innerHTML = "Embrace the sunshine with light, breathable fabrics like cotton or linen. A flowy sundress paired with sandals will keep you cool and stylish.";
        femaleContent.innerHTML = " Showcase your style with breezy dresses and skirts in lightweight fabrics like chiffon or silk. Pair them with open-toe shoes or sandals for an effortlessly chic look.";
        maleContent.innerHTML = " Keep it cool and casual with breathable fabrics like cotton or linen. Pair a classic button-down shirt with chinos or shorts for a laid-back yet polished look.";
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
});

topButton.addEventListener("click", ()=>{
    document.querySelector(".mom").style.display = "block";
    // document.querySelector(".male").style.display = "none";
    // document.querySelector(".female").style.display = "none";

});

middleButton.addEventListener("click", ()=>{
    document.querySelector(".male").style.display = "block";
    // document.querySelector(".mom").style.display = "none";
    // document.querySelector(".female").style.display = "none";
});

bottomButton.addEventListener("click", ()=>{
    document.querySelector(".female").style.display = "block";
    // document.querySelector(".mom").style.display = "none";
    // document.querySelector(".male").style.display = "none";
});




