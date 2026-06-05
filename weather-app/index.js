const btn = document.getElementById("btn");

async function fetchWeather() {
  const city = document.getElementById("city").value.trim().toLowerCase();

  try{
    const url = `http://api.weatherapi.com/v1/current.json?key=04b3ee34158c40bfa63175630260506&q=${city}&aqi=yes`;

    const res = await fetch(url);

    const ctn = document.getElementById("weather");
    ctn.innerHTML = '';


    const data = await res.json();

     if(!res.ok){
      console.log("Weather data not found");
      ctn.innerHTML = '<p>Weather data not found. Please check the city name and try again.</p>';
    }



    
    ctn.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>Temperature: ${data.current.temp_c}°C</p>
      <p>Condition: ${data.current.condition.text}</p>
      <p>Humidity: ${data.current.humidity}%</p>
      <p>AQI: ${data.current.air_quality["us-epa-index"]}</p>
      <p>Wind Speed: ${data.current.wind_kph} km/h</p>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;

   

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

btn.addEventListener("click", fetchWeather);
