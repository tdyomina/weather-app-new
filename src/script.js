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
h4.innerHTML = `${day}, ${hours}:${minutes}`;

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
// farenheit calculation

//document.getElementById("celsium").addEventListener("click", function (event) {
//  event.preventDefault();
//  document.querySelector("#figure").innerHTML = showTemp.response;
//});
//document
//  .getElementById("farenheit")
//  .addEventListener("click", function (event) {
//    event.preventDefault();
//    document.querySelector("#figure").innerHTML = Math.round(
//      (showTemp.response.value * 9) / 5 + 32
//    );
//  });
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
h4.innerHTML = `${day}, ${hours}:${minutes}`;

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
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#exampleInputCity").value;
  searchCity(cityInput);
}

// farenheit calculation

// document
//   .getElementById("celsium")
//   .addEventListener("click", function celsiumValue(event) {
//     event.preventDefault();
//     let celsiumTemp = response.data.temp;
//     document.querySelector("#figure").innerHTML = celsiumTemp.value;
//   });
// document
//   .getElementById("farenheit")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     let farenheitTemp = Math.round((response.data.main.temp * 9) / 5 + 32);
//     document.querySelector("#figure").innerHTML = farenheitTemp;
//   });

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
