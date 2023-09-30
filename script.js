const check = async () => {
    let location = inputName.value;
    if (location) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);
        const jsonData = await response.json();
        console.log(jsonData);
        const temp = jsonData.main.temp;
        const feelsLike = jsonData.main.feels_like;
        const pressure = jsonData.main.pressure;
        const humidity = jsonData.main.humidity;
        const windSpeed = jsonData.wind.speed;
        const cityName = jsonData.name;
        const country = jsonData.sys.country;
        document.getElementById("location").innerHTML = `${cityName}`;
        document.getElementById("feel").innerHTML = `feels like: ${feelsLike} ℃`;
        document.getElementById("pressure").innerHTML = `${pressure}`;
        document.getElementById("temperature").innerHTML = `${temp} ℃`;
        document.getElementById("humidity").innerHTML = `${humidity}%`;
        document.getElementById("wind").innerHTML = ` ${windSpeed} kmph`;
        document.getElementById("country").innerHTML = ` ${country}`;
        // Time calculation from UNIX code
        const timestamp = jsonData.dt
        const date = new Date(timestamp * 1000)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        document.getElementById("timezone").innerHTML = `${date} Time: ${hours}:${minutes}:${seconds}`;
    } else {
        alert("Please enter a location");
    }
}
