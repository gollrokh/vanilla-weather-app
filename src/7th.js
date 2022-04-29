let apiKey="79fbf0fd751ad25907ac459fc1d6c647";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
function displayWeatherCondition(response) {
    console.log(response);
    let cityName=response.data.name;
    document.querySelector("#city").innerHTML=`${cityName}`;
    let temp =Math.round(response.data.main.temp);
    document.querySelector("#temperature").innerHTML=`${temp}`;
    let weatherDescription=response.data.weather[0].description;
    document.querySelector("#situation").innerHTML=`${weatherDescription}`;
    let humidity=response.data.main.humidity;
    document.querySelector("#humidity").innerHTML=` Humidity: ${humidity} % ` ;
    let wind=Math.round(response.data.wind.speed);
    document.querySelector("#wind").innerHTML=` Wind Speed: ${wind} Km/h `;

}
axios.get(apiUrl).then(displayWeatherCondition);
