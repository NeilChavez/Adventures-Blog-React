import { useParams } from "react-router-dom";
import { capitalizeCity } from "../../services/capitalizeCity";
import { getCityByName } from "../../services/getCityByName";
import Posts from "../Posts";
import HeroSection from "../HeroSection";
import {useEffect} from "react";

export default function CityPage() {
  let { city } = useParams();
  let cityToRender = getCityByName(city);
  console.log(cityToRender, "da city page");
  let { country, department, info, name, population, region, thumbnails } =
    cityToRender[0];
  let cityCapitalized = capitalizeCity(name);
  let [image, heroUrl] = thumbnails;
  useEffect(()=>{
    window.scroll(0,0)
  }, [city])

  console.log(heroUrl);
  return (
    <>
      <HeroSection urlImageHero={heroUrl} />
      <Posts/>
    </>
  );
}
