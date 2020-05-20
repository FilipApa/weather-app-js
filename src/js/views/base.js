export const elements = {
  main: document.getElementById("main"),
  formSearch: document.getElementById("form"),
  inputSearch: document.getElementById("search"),
  aside: document.getElementById("aside"),
  weatherDetails: document.getElementById("weather-details"),
};

const dates = {
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

export function currentDate() {
  const today = new Date();
  const day = today.getDay();
  const dayDate = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const dayName = dates.days[day - 1];
  const monthName = dates.months[month];

  const todayDateFormat = `${dayName}, ${dayDate} ${monthName} ${year}`;
  return todayDateFormat;
}
