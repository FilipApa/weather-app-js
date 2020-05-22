export const elements = {
  container: document.querySelector(".container"),
  main: document.getElementById("main"),
  formSearch: document.getElementById("form"),
  inputSearch: document.getElementById("search"),
  aside: document.getElementById("aside"),
  weatherDetails: document.getElementById("weather-details"),
  weatherHourly: document.getElementById("weather-hourly"),
  weatherDaily: document.getElementById("weather-daily"),
  box: document.querySelectorAll(".box"),
  ulElements: document.querySelectorAll("ul"),
};

const time = {
  hours: {
    "00": "12am",
    "03": "3am",
    "06": "6am",
    "09": "9am",
    "12": "12pm",
    "15": "3pm",
    "18": "6pm",
    "21": "9pm",
  },
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

export const currentDate = () => {
  const today = new Date();
  const day = today.getDay();
  const dayDate = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const dayName = time.days[day - 1];
  const monthName = time.months[month];

  const todayDateFormat = `${dayName}, ${dayDate} ${monthName} ${year}`;
  return todayDateFormat;
};

export const formatHours = (hour) => {
  const keys = Object.keys(time.hours);
  keys.forEach((key) => {
    if (hour === key) {
      hour = time.hours[key];
    }
  });
  return hour;
};

export const renderLoader = (parent) => {
  const markup = `
    <div class="loader-background">
      <i class="fas fa-cloud-sun"></i>
    </div>
  `;

  parent.insertAdjacentHTML("beforeend", markup);
};

export const removeLoader = () => {
  const loader = document.querySelector(".loader-background");

  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};
