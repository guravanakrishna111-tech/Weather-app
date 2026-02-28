const apikey="2448f758d4a2e35d1fd47116f10c2c5e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(" .menu input");
const searchBtn=document.querySelector(" .menu button");
        const weatherIcon=document.querySelector(".weather-icon");
        async function checkWeather(city){
        const response=await fetch(apiurl+city+"&appid="+apikey);
        var data=await response.json();
        if(response.status==404){
            document.querySelector(" .error").style.display="block";
            document.querySelector(".details").style.display="none";
        }
        else
        {
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";s
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
            document.querySelector(".pressure").innerHTML=data.main.pressure+" Pa";
            if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rain.jpg";
            }
            else if(data.weather[0].main=="Clouds"){
                weatherIcon.src="images/cloud.jpg";
            }
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="images/partly-cloud.jpg";
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/freezing rain.jpg";
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/foggy.jpg";
            }  
            else
            {
                weatherIcon.src="images/sunny.jpg";
            }
            document.querySelector(" .error").style.display="none";
            document.querySelector(".details").style.display="block";
        }
    }
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});