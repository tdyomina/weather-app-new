// Current Time and Date
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

function showCity(event) {
  event.preventDefault();
  let cityInput = document.getElementById("exampleInputCity");
  let h2 = document.querySelector("#selectedCity");
  h2.innerHTML = cityInput.value;
  return cityInput.value;
}
let cityName = document.querySelector("#enterCity");
cityName.addEventListener("click", showCity);

// current button processing
function yourCity(event) {
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let curretCityName = document.querySelector("#currentCity");
curretCityName.addEventListener("click", yourCity);

// geoposition weather

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "449b625b92babac43b47ea470588167d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(`${apiUrl}`).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityName = response.data.name;
  console.log(cityName);
  let header = document.getElementsByClassName("selectedCity");
  header.innerHTML = response.data.name;
  console.log(temperature);
  let h1 = document.querySelector("#figure");
  h1.innerHTML = `${temperature}`;
  let humidity = document.querySelector("#humidity");
  let humidityValue = response.data.main.humidity;
  humidity.innerHTML = humidityValue;
  let windSpeed = document.querySelector("#wind");
  let windSpeedValue = response.data.wind.speed;
  windSpeed.innerHTML = windSpeedValue;
}

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
