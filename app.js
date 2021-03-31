const weatherApi = {
    key : "6b88f00f970b390e8dd0b3dd710f1915",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
};

// Event Listener function on keypress
const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener('keypress',(event) =>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector(".weather_body").style.display = "block";
    }
    
});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}
// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);
    let city= document.getElementById("city");
    city.innerText= `${weather.name},${weather.sys.country}`;


    let tempratue= document.getElementById("temp");
    tempratue.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let MinMax = document.getElementById("min-max");
    MinMax.innerHTML = `${weather.main.temp_min}&deg;C(min)/${Math.round(weather.main.temp_max)}&deg;C(max)`;
    
    let weatherType= document.getElementById("weather");
    weatherType.innerHTML=`${weather.weather[0].main}`;

    let date = document.getElementById("date");
    let todaydate= new Date();

    date.innerText = DateManage(todaydate);

    if(weatherType.textContent == 'Clear')
    {
        document.body.style.backgroundImage = "url('./images/clear.jpg')"
    }
    else if(weatherType.textContent == 'Clouds')
    {
        document.body.style.backgroundImage = "url('./images/cloudy.jpg')"
    }
    else if(weatherType.textContent == 'Haze')
    {
        document.body.style.backgroundImage = "url('./images/Haze.jpg')"
    }
    else if(weatherType.textContent == 'Rain')
    {
        document.body.style.backgroundImage = "url('./images/rainy.jpg')"
    }
    else if(weatherType.textContent == 'Snow')
    {
        document.body.style.backgroundImage = "url('./images/snow.jpg')"
    }



}

// Date Manage

function DateManage(dateArg){
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","Noverber","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`; 
}










// 0332efe207da2fdc241041d7ed919727


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// key : `7609a228fcffc6148af94590330fd5a0`,
//     baseUrl : `https://api.weatherstack.com/current`