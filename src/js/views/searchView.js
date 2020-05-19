import elements from "./base";

export function getInput() {
  return elements.inputSearch.value;
}

export function clearInput() {
  elements.inputSearch.value = "";
}

export function renderMainImg(imageUrl) {
  elements.main.style.backgroundImage = `url(${imageUrl})`
}
