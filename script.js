document.getElementById("getWeatherBtn").addEventListener("click", function() {
    var location = document.getElementById("locationInput").value;
    var apiKey = '4f7d6e6bc39112ea916370588db6310f'; // Replace with your API key
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
        document.getElementById("weatherInfo").innerHTML = "Error fetching weather data. Please try again.";
    });
});
