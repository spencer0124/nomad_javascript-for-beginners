
const API_KEY = "4cc76e74d70329e279b17b492be32074";

function onGeoOk(position) {
    console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText= data.name; 
        city.innerTex= data.weather[0].main
        });
}

function onGeoError() {
    alert("can't find you. NO weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);