function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.main.temp;
}

let apiKey = "fdaa0bb1bbe3059f740bdeb5180d2b46";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=Varaždin&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);