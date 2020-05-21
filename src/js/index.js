import "./css/style.css";
import Search from "./models/Search";
import * as mainView from "./views/mainView";
import * as asideView from "./views/asideView";
const state = {};

const controlSearch = async () => {
  const query = mainView.getInput();

  if (query) {
    try {
      state.search = new Search(query);

      mainView.clearInput();
      mainView.clearResluts();
      asideView.clearResluts();
      await state.search.getResults();
      mainView.renderMainInfo(state.search.currentWeather);
      mainView.renderMainImg(state.search.photo);
      asideView.renderWeatherDetails(state.search.currentWeather);
      console.log(state.search);
      asideView.renderWeatherHourly(state.search.weather);
      asideView.renderWeatherDaily(state.search.weather);
    } catch (error) {
      console.log(error);
    }
  }
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
