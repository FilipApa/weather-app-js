import { elements } from "./base";

export const clearResluts = () => {
  elements.weatherDetails.innerHTML = "";
};

export const renderWeatherDetails = (data) => {
  const markup = `
        <ul>
            <h2>Weather details</h2>
            <li>
                <h3>Cloudy</h3> <span>${data.clouds.all}%</span>
            </li>
            <li>
                <h3>Humidity</h3> <span>${data.main.humidity}%</span>
          
            </li>
            <li>
                <h3>Pressure</h3> <span>${data.main.pressure} hPa</span>
            </li>    
            <li>
                <h3>Wind</h3> <span>${data.wind.speed} m/s</span>
            </li>
        </ul>
    `;

  elements.weatherDetails.insertAdjacentHTML("beforeend", markup);
};
