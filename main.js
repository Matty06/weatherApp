const place = document.getElementById("place");
let city = place.value;
const temperature = document.getElementById("temperature");
const time = document.getElementById("time");
const windspeed = document.getElementById("windspeed");
const btnSearch = document.getElementById("search");


window.onload = () => {
    setInterval(getTime, 1000);
    getTemp(city);
}

btnSearch.onclick = () => {
    // update city
    city = place.value;
    console.log(city);
    getTemp(city);
}

async function getTemp(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0333dd85d5639a156592d764193fbab5`);
    const data = await response.json();
    let tempC = data.main.temp - 273.15;
    console.log(data);

    place.innerHTML = data.name;
    windspeed.innerHTML = data.wind.speed + " km/h";
    temperature.innerHTML = Math.round(tempC) + " °C";
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    if(m < 10) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s;
    }

    time.innerHTML = h + ":" + m + ":" + s;
  }

