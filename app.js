"use strict";

// Variables
const searchCity = document.querySelector(".input_text");
const button = document.querySelector(".submit");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const cityName = document.querySelector(".city-name");
const feelLike = document.querySelector(".feels");
const description = document.querySelector(".description");
const weatherIcon = document.querySelector(".icon-weather");
const temprature = document.querySelector(".weatherTemp-real");
const HSS = "9cfa0bb4b1af700be136514df8902b9b";
const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
button.addEventListener(
  "click",

  function () {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=metric&APPID=${HSS}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        cityName.innerHTML = data.name;
        feelLike.innerHTML = parseInt(data.main.feels_like);
        temprature.innerHTML = parseInt(data.main.temp);
        description.innerHTML = data.weather[0].description;
        // Date Section
        day.innerHTML = new Date().toLocaleString("en-GB", {
          weekday: "long",
        });
        date.innerHTML = new Date()
          .toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          .replace(/ /g, "-");
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      })
      .catch("Error");
  }
);
