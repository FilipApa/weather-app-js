import { elements, formatHours } from "./base";

export const clearResluts = () => {
  elements.weatherDetails.innerHTML = "";
  elements.weatherHourly.innerHTML = "";
  elements.box.forEach((elem) => (elem.style.display = "none"));
  elements.ulElements.forEach((elem) => (elem.style.display = "none"));
};

export const renderWeatherDetails = (data) => {
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;

  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);
  const markup = `
            <h2>Weather details</h2>
            <li>
                <p>Cloudy</p> <span>${data.clouds.all}%</span>
            </li>
            <li>
               <p>Humidity</p> <span>${data.main.humidity}%</span>
          
            </li>
            <li>
                <p>Pressure</p> <span>${data.main.pressure} hPa</span>
            </li>    
            <li>
                <p>Wind</p> <span>${data.wind.speed} m/s</span>
            </li>

            <li>
                <p>Sunrise</p> <span>${sunriseTime.toLocaleTimeString()}</span>
            </li>
            <li>
                <p>Sunset</p> <span>${sunsetTime.toLocaleTimeString()}</span>
            </li>
    `;
  elements.weatherDetails.insertAdjacentHTML("beforeend", markup);
  elements.weatherDetails.style.display = "block";
};

const renderHourly = (weather) => {
  const timeData = weather.dt_txt.split(" ");
  const hourData = timeData[1].split("");
  const hour = formatHours(`${hourData[0]}${hourData[1]}`);

  const markup = `
      <li>
        <span class="aside__number">${hour}</span>
        <span class="aside__temperature temp">${Math.floor(
          weather.main.temp
        )}</span>
        <div class="aside__rain">
          <i class="fas fa-cloud"></i>
          <span class="aside__number">${weather.clouds.all}%</span>
        </div>
      </li>
  `;

  elements.weatherHourly.insertAdjacentHTML("beforeend", markup);
};

export const renderWeatherHourly = (data) => {
  const dataList = data.list.slice(0, 4);

  dataList.forEach((weather) => renderHourly(weather));

  elements.box.forEach((elem) => (elem.style.display = "flex"));
  elements.weatherHourly.style.display = "flex";
};

const renderDaily = (weather) => {
  const timeData = weather.dt_txt.split(" ");
  const dateData = timeData[0].split("-");
  const dateFormat = `${dateData[2]}.${dateData[1]} `;

  const markup = `
    <li>
      <span class="aside__number">${dateFormat}</span>
      <img class="aside__daily-icon" src="http://openweathermap.org/img/w/${
        weather.weather[0].icon
      }.png" alt="${weather.weather[0].description}">
      <span class="aside__temperature temp">${Math.floor(
        weather.main.temp
      )}</span>
      <div class="aside__rain">
         <i class="fas fa-cloud"></i>
        <span class="aside__number">${weather.clouds.all}%</span>
    </div>
    </li>
  `;
  elements.weatherDaily.insertAdjacentHTML("beforeend", markup);
};

export const renderWeatherDaily = (data) => {
  const newArr = data.list.filter((listItem) => {
    if (listItem.dt_txt.includes("12:00:00")) {
      return listItem;
    }
  });
  newArr.pop();
  newArr.forEach((weather) => renderDaily(weather));
  elements.weatherDaily.style.display = "flex";
};
