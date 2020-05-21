import axios from "axios";
import { proxy, weatherKey, unsplashKey } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const weatherRes = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&units=metric&appid=${weatherKey}`
      );
      this.weather = weatherRes.data;

      const currentWeatherRes = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${weatherKey}`
      );
      this.currentWeather = currentWeatherRes.data;

      const photoRes = await axios(
        `${proxy}https://api.unsplash.com/search/photos?page=1&query=${this.query}&client_id=${unsplashKey}`
      );
      this.photo = photoRes.data.results[0].urls.regular;
    } catch (error) {
      console.log(error);
    }
  }
}
