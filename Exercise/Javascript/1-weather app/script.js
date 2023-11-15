let btn = document.querySelector('#btn');
const APIKey = '287d43ef80fa0789a7c341e02d27c727';

btn.addEventListener('click', (e) => {
  e.preventDefault();

  let city = document.querySelector('#city');
  let cityName = city.value;
  console.log(cityName);
  weatherApi(cityName);
});

let weatherApi = async (cityName) => {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`);
  let data = await response.json();
  console.log(data);
};
