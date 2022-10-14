import {cities} from "../data/data-cities";

export const getCityByName = (cityName = " ") => {
  return cities.filter((city) => city.name === cityName);
};

