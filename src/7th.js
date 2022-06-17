let cityName="sydney";
let apiKey="79fbf0fd751ad25907ac459fc1d6c647";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
function formateDate(timestamp) {
    let date=new Date(timestamp);
    let hours=date.getHours();
    if (hours<10) {
        hours=`0${hours}`;
    }
    let minutes=date.getMinutes();
    if (minutes<10) {
        minutes=`0${minutes}`;
    }
    let day=date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
    return `${days[day]} ${hours} : ${minutes}`;

}

function displayWeatherCondition(response) {
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
    document.querySelector("#date").innerHTML=formateDate(response.data.dt *1000);
    let iconElement=document.querySelector("#icon");
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description);
}
axios.get(apiUrl).then(displayWeatherCondition);
