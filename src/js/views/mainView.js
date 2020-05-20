import { elements, currentDate } from "./base";

export function getInput() {
  return elements.inputSearch.value;
}

export function clearInput() {
  elements.inputSearch.value = "";
}

export function clearResluts() {
  const weatherContainer = document.querySelector(".weather-container");
  if (typeof weatherContainer != "undefined" && weatherContainer != null) {
    console.log("proslo");
    elements.main.removeChild(weatherContainer);
  }
}

export function renderMainImg(imageUrl) {
  elements.main.style.backgroundImage = `url(${imageUrl})`;
}

export function renderMainInfo(data) {
  const currentDateFormat = currentDate();
  const temperature = Math.floor(data.main.temp);

  const markup = `
    <div class="weather-container">
      <div class="weather-container__temp-box">
          <p class="weather-container__temp">${temperature.toString()}</p>
      </div>
      <div class="weather-container__info-box">
        <p class="weather-container__town">
          <strong>${data.name},</strong> 
          <span class="weather-container__state">${data.sys.country}</span></p>
        <p class="weather-container__date">${currentDateFormat}</p>
      </div>
    </div>
  `;

  elements.main.insertAdjacentHTML("beforeend", markup);
}
