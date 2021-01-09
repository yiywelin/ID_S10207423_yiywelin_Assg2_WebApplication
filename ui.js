class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London";
    }
  
    populateUI(data) {
      //de-structure vars
  
      //add them to inner HTML
  
      this.uiContainer.innerHTML = `

          <div class="card mb-3" wfd-id="40">
  <h3 class="card-header justify-content-center" style="text-align:center;"font-family: 'Source Sans Pro', sans-serif;>Weather Today in ${data.name}</h3>
  <div class="card-body" wfd-id="48">
    <h5 class="card-title" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">${data.weather[0].description}</h5>
    <h6 class="card-subtitle text-muted" style="text-align:center; font-size: 40px; font-family: 'Source Sans Pro', sans-serif;">${data.main.temp}°C</h6>
  </div>
  <ul class="list-group list-group-flush" wfd-id="43">
    <li class="list-group-item" wfd-id="46" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">Highest temperature: ${data.main.temp_max}°C</li>
    <li class="list-group-item" wfd-id="45" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">Lowest temperature: ${data.main.temp_min}°C</li>
    <li class="list-group-item" wfd-id="44" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">Feels like: ${data.main.feels_like}°C</li>
    <li class="list-group-item" wfd-id="44" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">Pressure: ${data.main.pressure} hPa</li>
    <li class="list-group-item" wfd-id="44" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">Humidity: ${data.main.humidity}%</li>
    <li class="list-group-item" wfd-id="44" style="text-align:center; font-size: 20px; font-family: 'Source Sans Pro', sans-serif;">Wind: ${data.wind.speed} m/s</li>
  </ul>
  <div class="card-body" wfd-id="42" style="text-align:center;">
    <a href="https://weather.com" target="_blank" class="card-link">More Information</a>
  </div>
          
          `;
    }

    clearUI() {
        uiContainer.innerHTML = "";
      }
    
      saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data));
      }
    
      getFromLS() {
        if (localStorage.getItem("city" == null)) {
          return this.defaultCity;
        } else {
          this.city = JSON.parse(localStorage.getItem("city"));
        }
    
        return this.city;
      }
    
      clearLS() {
        localStorage.clear();
      }
}