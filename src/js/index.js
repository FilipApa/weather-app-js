import "./css/style.css";
import Search from "./models/Search";
import getInput from "./views/searchView";
const state = {};

const controlSearch = async () => {
  const query = getInput();
  state.search = new Search(query);
  try {
    await state.search.getResults();
    console.log(state.search);
  } catch (error) {}
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
