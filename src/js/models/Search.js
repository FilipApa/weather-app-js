import axios from "axios";
import { proxy, weatherKey, unsplashKey } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const weatherRes = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${weatherKey}`
      );
      this.weather = weatherRes;
      console.log(this.weather);

      const photoRes = await axios(
        `${proxy}https://api.unsplash.com/search/photos?page=1&query=${this.query}&client_id=${unsplashKey}`
      );
      this.photo = photoRes;
      console.log(this.photo);
    } catch (error) {
      console.log(err);
    }
  }
}
