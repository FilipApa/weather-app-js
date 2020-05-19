import "./css/style.css";
import Search from "./models/Search";
import * as searchView from './views/searchView';

const state = {};

const controlSearch = async () => {
  const query =  searchView.getInput();
  state.search = new Search(query);
  try {
    await state.search.getResults();
    searchView.clearInput();
    searchView.renderMainImg(state.search.photo)
    console.log(state.search);
  } catch (error) {}
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
