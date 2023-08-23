const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

const checkweather = async(city) => {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    if (response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png"
        } 
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png"
        } 
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png"
        } 
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png"
        } 
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
}

   
searchbtn.addEventListener("click",() => {
    checkweather(searchInput.value);
})
