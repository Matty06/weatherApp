const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Praha&appid=0333dd85d5639a156592d764193fbab5";
const temperature = document.getElementById("temperature");
const place = document.getElementById("place");

async function getTemp() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    let tempC = data.main.temp - 273.15;

    place.innerHTML = data.name;
    temperature.innerHTML = Math.round(tempC) + " °C";
}

getTemp();



