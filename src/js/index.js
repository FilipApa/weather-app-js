import "./css/style.css";

import Search from "./models/Search";
import * as mainView from "./views/mainView";

const state = {};

const controlSearch = async () => {
  const query = mainView.getInput();

  if (query) {
    try {
      state.search = new Search(query);

      mainView.clearInput();
      mainView.clearResluts();

      await state.search.getResults();
      mainView.renderMainInfo(state.search.currentWeather);
      mainView.renderMainImg(state.search.photo);
    } catch (error) {
      console.log(error);
    }
  }
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
