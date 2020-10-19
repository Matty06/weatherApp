const api_url = "http://api.openweathermap.org/data/2.5/weather?q=Praha&appid=0333dd85d5639a156592d764193fbab5";
const temperature = document.getElementById("temperature");
const place = document.getElementById("place");

async function getTemp() {
    const response = await fetch(api_url);
    const data = await response.json();
    place.innerHTML = data.name;
    temperature.innerHTML = data.main.temp;
}
getTemp();
