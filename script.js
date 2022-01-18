const apiKey = "d61a549ca7934cf32585e27568205dd6";

const cityValue = document.getElementById("city");
const tempValue = document.getElementById("temp");
const humidityValue = document.getElementById("humidity");
const windValue = document.getElementById("wind");

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let searchValue = document.getElementById("search").value;
  console.log(searchValue);
  fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey}&query=${searchValue}&units=m`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cityValue.innerText = `${data.location.name}`;
      tempValue.innerText = `${data.current.temperature} degrés °`;
      humidityValue.innerText = `${data.current.humidity}`;
      windValue.innerText = `${data.current.wind_speed} Km/h`;
    });
});
