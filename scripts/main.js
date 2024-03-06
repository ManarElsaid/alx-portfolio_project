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
const travContent = document.querySelector(".traveller p");
const allergyContent = document.querySelector(".allergy p");

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

        travContent.innerHTML = "<ul> \
        <li>Bring along a light jacket or sweater for cooler temperatures.</li>\
        <li>Consider indoor attractions like shopping malls, theaters, or indoor markets.</li>\
        <li>Embrace the moody ambiance by exploring historic sites or quaint villages.</li>\
    </ul>";

        allergyContent.innerHTML = "<ul> \
        <li>Consider taking vitamin D supplements if you're not getting enough sunlight exposure.</li>\
        <li> If you have respiratory issues, monitor air quality reports and <br>consider wearing a mask if necessary.</li>\
        <li>Practice mindfulness or meditation indoors to combat any feelings of <br>gloominess associated with cloudy weather.</li>\
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
    
        travContent.innerHTML = "<ul> \
        <li>Pack a compact umbrella or waterproof raincoat to stay dry while exploring.</li>\
        <li>Wear waterproof shoes to avoid soggy feet while walking around.</li>\
        <li>Plan indoor activities like visiting museums, galleries, or cafes to escape the rain.</li>\
    </ul>";

        allergyContent.innerHTML = "<ul> \
        <li>If you have allergies, check pollen forecasts and consider staying indoors during peak pollen times.</li>\
        <li>Wear proper footwear to avoid slipping and falling.</li>\
        <li> Dress warmly and stay dry to prevent chills, especially if prone to them.</li>\
    </ul>";
    }
    else if (weatherData.weather[0].main == "Mist"){
        weatherIcon.src = "../images/mist.png";

        //changing tips for misty days
        momContent.innerHTML = "<ul> \
        <li>Dress your child in layers to stay warm and comfortable.</li>\
        <li>Be cautious while driving and use fog lights if visibility is low.</li>\
        <li>If going outdoors, stay on well-marked trails and paths to avoid getting lost in the mist.</li>\
    </ul>";

        travContent.innerHTML = "<ul> \
        <li>Be cautious while driving and use fog lights if visibility is reduced.</li>\
        <li>Allow extra time for travel and use a map or GPS to navigate safely.</li>\
        <li>Enjoy the mystical atmosphere by visiting scenic spots or taking nature walks in the mist.</li>\
    </ul>";

        allergyContent.innerHTML = "<ul> \
        <li>Be cautious while walking or driving due to reduced visibility.</li>\
        <li> If you have respiratory issues, monitor your symptoms and adjust <br> medications as needed (consult your doctor).</li>\
        <li> Consider indoor activities like indoor cycling, swimming, or dancing to stay <br> active while avoiding misty conditions.</li>\
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

        travContent.innerHTML = "<ul> \
        <li>Pack a compact umbrella or a waterproof jacket with a hood.</li>\
        <li>Explore covered outdoor attractions like botanical gardens or covered markets.</li>\
        <li>Take breaks in cafes or restaurants to warm up and enjoy hot beverages.</li>\
    </ul>";

        allergyContent.innerHTML = "<ul> \
        <li>If you have joint pain or arthritis, consider gentle exercises like tai chi or swimming <br> to minimize discomfort in damp weather.</li>\
        <li>Focus on indoor activities like cooking healthy meals, practicing relaxation techniques, or engaging in hobbies.</li>\
        <li> Similar to mist, monitor your symptoms and adjust medications as needed (consult your doctor).</li>\
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
    
        travContent.innerHTML = "<ul>\
        <li>Pack sunglasses and sunscreen to protect yourself from the sun's rays.</li>\
        <li>Stay hydrated by carrying a water bottle and drinking plenty of fluids,<br>especially if you're exploring outdoors.</li>\
        <li>Take advantage of the clear skies for outdoor sightseeing and photography.</li>\
    </ul>"

        allergyContent.innerHTML = "<ul>\
        <li>Apply sunscreen and wear protective clothing if sensitive to sunlight.</li>\
        <li>Remember to stay hydrated by drinking plenty of water throughout the day.</li>\
        <li>Take advantage of the sunshine by engaging in outdoor activities like <br>walking, jogging, or yoga.</li>\
    </ul>"
    }
    else if (weatherData.weather[0].main == "Snow"){
        weatherIcon.src = "../images/snow.png";

        //changing tips for snowy days
        momContent.innerHTML = "<ul> \
        <li>Dress your child in warm, waterproof clothing, including snow pants, boots, gloves, and hats.</li>\
        <li>Build a snowman, have a snowball fight, or go sledding for some fun outdoor activities.</li>\
        <li>Check road conditions and plan your outings accordingly to ensure safe travels.</li>\
    </ul>"

        travContent.innerHTML = "<ul> \
        <li>Dress in layers with waterproof and insulated clothing to stay warm.</li>\
        <li>Wear sturdy boots with good traction to prevent slipping on icy sidewalks.</li>\
        <li>Enjoy winter activities like skiing, snowboarding, or building snowmen in designated areas.</li>\
    </ul>"

        allergyContent.innerHTML = "<ul> \
        <liWear appropriate footwear with good traction to prevent slips and falls on icy surfaces.</li>\
        <li>Avoid strenuous activity like shoveling snow if you have heart or respiratory issues.</li>\
        <li>Consider indoor workouts like strength training, yoga, or indoor cycling on days <br>when outdoor conditions are too harsh.</li>\
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
    document.querySelector(".traveller").style.display = "none";
    document.querySelector(".female").style.display = "none";

});

middleButton.addEventListener("click", ()=>{
    document.querySelector(".traveller").style.display = "block";
    document.querySelector(".mom").style.display = "none";
    document.querySelector(".female").style.display = "none";
});

bottomButton.addEventListener("click", ()=>{
    document.querySelector(".allergy").style.display = "block";
    document.querySelector(".mom").style.display = "none";
    document.querySelector(".traveller").style.display = "none";
});




