const apiKey = "03dfa929ee4dd9dfb9feba4929296d27";
const submit = document.getElementById("submit");
const destinationCity = document.getElementById("cityName");
const displayWeather = document.getElementById("weather");
const time = moment();
const now = document.getElementById("moment");

function retrieveWeather() {
  let destination = destinationCity.value; 
  let getWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    destination +
    "&exclude=minutely&appid=" +
    apiKey;
  getWeatherUrl = getWeather.replace(/\s/g, '&').trim();
  console.log(getWeatherUrl)
  fetch(getWeatherUrl)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    displayWeather.innerHTML = data.weather[0].description;
    });
  }

function fluffyClouds() {
  now.innerHTML = time.format("dddd, MMMM Do");
}

submit.addEventListener("click", retrieveWeather);
fluffyClouds();