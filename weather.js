var button = document.querySelector(".wea-btn");
var inputValue = document.querySelector(".inputValue");
var countr = document.querySelector(".country-name");
var coun = document.querySelector(".name");
var pop = document.querySelector(".popula");
var humi = document.querySelector(".humidity");
var possorain = document.querySelector(".pos");
var winds = document.querySelector(".windsp");
var longlat = document.querySelector(".landl");
var temp = document.querySelector(".temp");
var tempsec = document.querySelector(".tempsec");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inputValue.value.trim() +
      "&appid=f0f9c42986b2982069fbd38f9648e82b"
  )
    .then((res) => res.json())
    .then((data) => {
      var count = data["city"]["name"];
      var cName = data.city.country;
      var cPop = data.city.population;
      var humidi = data.list[0].main.humidity;
      var posofrain = data.list[0].weather[0].description;
      var wspeed = data.list[0].wind.speed;
      var long = data.city.coord.lat;
      var lati = data.city.coord.lon;
      var tempera = data.list[0].main.temp;
      var temperasec = data.list[0].main.temp;

      coun.innerHTML = count;
      countr.innerHTML = cName;
      pop.innerHTML = `Population of the city is ${cPop}`;
      humi.innerHTML = `Humidity is ${humidi}%`;
      possorain.innerHTML = posofrain;
      winds.innerHTML = `Wind speed : ${wspeed}m/s`;
      longlat.innerHTML = `Latitude : ${long} Longitude : ${lati}`;
      temp.innerHTML = `Temperature in celsius : ${parseFloat(
        tempera - 273.15
      ).toFixed(2)}°C`;
      tempsec.innerHTML = `Temperature in Fahrenheit : ${parseFloat(
        ((tempera - 273.15) * 9) / 5 + 32
      ).toFixed(2)}°F`;
    })
    .catch((err) => alert("Wrong city name!"));
});
