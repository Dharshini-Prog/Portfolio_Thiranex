const apiKey = "336b1890f920768588aa9577b05c6f18";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = cityInput.value.trim();

    if(!city){
        alert("Please enter a city name");
        return;
    }

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").textContent =
            `${data.main.temp} °C`;

        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;

        document.getElementById("condition").textContent =
            data.weather[0].description;

    }
    catch(error){

        alert(error.message);

    }
}