import "../css/style.css";
import Search from "./models/Search";
import { elements, renderLoader, removeLoader } from "./views/base";
import noviSad from "../assets/novi_sad@vojvodina.sky.view.jpg";
import beograd from "../assets/beograd@bg_ulice.jpg";
import nis from "../assets/nis@thecityofnis.jpg"
import * as mainView from "./views/mainView";
import * as asideView from "./views/asideView";

const state = {};

const controlSearch = async () => {
  let query = mainView.getInput() || "Novi Sad";

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
      if(query.toLowerCase() === "novi sad") {
        mainView.renderMainImg(noviSad);
      }else if(query.toLowerCase() === "beograd") {
        mainView.renderMainImg(beograd); 
      }else if(query.toLowerCase() === "niš") {
        mainView.renderMainImg(nis)
      }else {
        mainView.renderMainImg(state.search.photo);
      }
    
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

document.addEventListener("DOMContentLoaded", () => {
  console.log("radi")
  controlSearch();
});
