let now = new Date();
let h4 = document.querySelector("h4");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h4.innerHTML = `Last updated: ${day}, ${hours}:${minutes}`;

// Change City from form input

function replaceCityName(response) {
  let cityName = response.data.name;
  console.log(cityName);
  let header = document.querySelector("#selectedCity");
  header.innerHTML = cityName;
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let h1 = document.querySelector("#figure");
  h1.innerHTML = `${temperature}`;
  let humidity = document.querySelector("#humidity");
  let humidityValue = response.data.main.humidity;
  humidity.innerHTML = humidityValue;
  let windSpeed = document.querySelector("#wind");
  let windSpeedValue = Math.round(response.data.wind.speed);
  windSpeed.innerHTML = windSpeedValue;
  let iconBlock = document.querySelector("#iconHeader");
  iconBlock.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconBlock.setAttribute("alt", response.data.weather[0].description);
  getForecast(response.data.coord);
}

// Forecast block

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `
  <div class="row">
      <div class="col-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2370/2370266.png"
          alt="weather icon"
          width="50"
        />
        <div>
          </br>
        </div>        
        <div>
          <p>max</p>
          <p>eve</p>
          <p>min</p>
        </div>
      </div>
  `;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt="weather icon"
          width="50"
        />
        <div class="weather-forecast-temperatures">
          <p class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}°C</p>
          <p class="weather-forecast-temperature-eve"> ${Math.round(
            forecastDay.temp.eve
          )}°C</p>
          <p class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}°C</p>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "449b625b92babac43b47ea470588167d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#exampleInputCity").value;
  searchCity(cityInput);
}

// current button processing
function yourCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

function searchCity(cityInput) {
  let apiKey = "449b625b92babac43b47ea470588167d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(replaceCityName);
}

// geoposition weather

function handlePosition(position) {
  let apiKey = "449b625b92babac43b47ea470588167d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(replaceCityName);
}
let cityName = document.querySelector("#enterCity");
cityName.addEventListener("submit", showCity);
let curretCityName = document.querySelector("#currentCity");
curretCityName.addEventListener("click", yourCity);

let myInput = "Kharkiv";
searchCity(myInput);
