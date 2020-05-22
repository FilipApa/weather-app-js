import "./css/style.css";
import Search from "./models/Search";
import { elements, renderLoader, removeLoader } from "./views/base";
import * as mainView from "./views/mainView";
import * as asideView from "./views/asideView";

const state = {};

const controlSearch = async () => {
  const query = mainView.getInput();

  if (query) {
    state.search = new Search(query);
    mainView.clearInput();
    mainView.clearResluts();
    asideView.clearResluts();
    renderLoader(elements.container);

    try {
      await state.search.getResults();
      removeLoader();
      mainView.renderMainInfo(state.search.currentWeather);
      mainView.renderMainImg(state.search.photo);

      asideView.renderWeatherDetails(state.search.currentWeather);
      asideView.renderWeatherHourly(state.search.weather);
      asideView.renderWeatherDaily(state.search.weather);
    } catch (error) {
      console.log(error);
    }
  }
};

elements.formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

document.addEventListener("load", () => {
  controlSearch();
});
