let city = "Praha";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0333dd85d5639a156592d764193fbab5`;

const temperature = document.getElementById("temperature");
const place = document.getElementById("place");
const time = document.getElementById("time");

window.onload = () => {
    setInterval(getTime, 1000);
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    time.innerHTML = h + ":" + m + ":" + s;
  }


async function getTemp() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    let tempC = data.main.temp - 273.15;
    console.log(data);

    place.innerHTML = data.name;
    temperature.innerHTML = Math.round(tempC) + " °C";
}

getTemp();



