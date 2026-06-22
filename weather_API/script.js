const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = cityInput.value.trim();

    if(!city){
        alert("Please enter a city");
        return;
    }

    try{

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if(!response.ok){
            throw new Error("Unable to fetch weather");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent = city;

        document.getElementById("temp").textContent =
            `${data.current_condition[0].temp_C} °C`;

        document.getElementById("humidity").textContent =
            `${data.current_condition[0].humidity}%`;

        document.getElementById("wind").textContent =
            `${data.current_condition[0].windspeedKmph} km/h`;

        document.getElementById("condition").textContent =
            data.current_condition[0].weatherDesc[0].value;

    }
    catch(error){
        alert(error.message);
    }
}