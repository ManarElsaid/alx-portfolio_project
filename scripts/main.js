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

        //changing tips for cloudy days
        momContent.innerHTML = "<ul> \
        <li>Bring along a light jacket or sweater for your child in case it gets chilly.</li>\
        <li>Plan indoor activities like reading, puzzles, or movie time for a cozy day at home.</li>\
        <li>Use this weather as an opportunity to talk about cloud formations and weather patterns with your child.</li>\
    </ul>";
    }
    else if (weatherData.weather[0].main == "Rain"){
        weatherIcon.src = "../images/rain.png";

        //changing tips for rainy days
        momContent.innerHTML = "<ul> \
        <li>Dress your child in waterproof clothing, including raincoats, boots, and umbrellas.</li>\
        <li>Plan indoor activities like board games, arts and crafts, or baking to keep your child entertained.</li>\
        <li>Check for any potential leaks or flooding around your home and take necessary precautions to keep your child safe and dry.</li>\
    </ul>";
        femaleContent.innerHTML = "Stay dry without sacrificing style by opting for a chic trench coat or a trendy waterproof jacket. Pair it with stylish rain boots and a cute umbrella to complete your rainy day ensemble.";
        maleContent.innerHTML = "Stay dry in style with a waterproof jacket or coat. Opt for a versatile trench coat or a sporty rain jacket paired with waterproof shoes to keep your feet dry and comfortable.";
    }
    else if (weatherData.weather[0].main == "Mist"){
        weatherIcon.src = "../images/mist.png";

        //changing tips for misty days
        momContent.innerHTML = "<ul> \
        <li>Dress your child in layers to stay warm and comfortable.</li>\
        <li>Be cautious while driving and use fog lights if visibility is low.</li>\
        <li>If going outdoors, stay on well-marked trails and paths to avoid getting lost in the mist.</li>\
    </ul>";
    }
    else if (weatherData.weather[0].main == "Drizzle"){
        weatherIcon.src = "../images/drizzle.png";

        //changing tips for drizzle
        momContent.innerHTML = "<ul> \
        <li>Dress your child in waterproof clothing and pack extra layers to stay warm.</li>\
        <li>Choose indoor activities like indoor play centers, museum visits, or movie marathons.</li>\
        <li>If going outdoors, avoid slippery surfaces and watch out for puddles to prevent accidents.</li>\
    </ul>";
    }
    else if (weatherData.weather[0].main == "Clear"){
        weatherIcon.src = "../images/clear.png";

        //changing tips for clear weather
        momContent.innerHTML = "<ul> \
            <li>Encourage outdoor activities like picnics, playground visits, or nature walks.</li>\
            <li>breathable fabrics like cotton or linen.</li>\
            <li>Remember to apply sunscreen to protect your child's skin from harmful UV rays.</li>\
            <li>Keep your child hydrated by offering plenty of water,<br>especially if they're playing outside.</li>\
        </ul>"
        femaleContent.innerHTML = " Showcase your style with breezy dresses and skirts in lightweight fabrics like chiffon or silk. Pair them with open-toe shoes or sandals for an effortlessly chic look.";
        maleContent.innerHTML = " Keep it cool and casual with breathable fabrics like cotton or linen. Pair a classic button-down shirt with chinos or shorts for a laid-back yet polished look.";
    }
    else if (weatherData.weather[0].main == "Snow"){
        weatherIcon.src = "../images/snow.png";

        //changing tips for snowy days
        momContent.innerHTML = "<ul> \
        <li>Dress your child in warm, waterproof clothing, including snow pants, boots, gloves, and hats.</li>\
        <li>.Build a snowman, have a snowball fight, or go sledding for some fun outdoor activities.</li>\
        <li>Check road conditions and plan your outings accordingly to ensure safe travels.</li>\
    </ul>"
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
    document.querySelector(".mom").style.display = "flex";
    document.querySelector(".mom").style.transitionDuration = "2s";
    document.querySelector(".male").style.display = "none";
    document.querySelector(".female").style.display = "none";

});

middleButton.addEventListener("click", ()=>{
    document.querySelector(".male").style.display = "block";
    document.querySelector(".mom").style.display = "none";
    document.querySelector(".female").style.display = "none";
});

bottomButton.addEventListener("click", ()=>{
    document.querySelector(".female").style.display = "block";
    document.querySelector(".mom").style.display = "none";
    document.querySelector(".male").style.display = "none";
});




