import { useParams } from "react-router-dom";
import { capitalizeCity } from "../../services/capitalizeCity";
import { getCityByName } from "../../services/getCityByName";
import Posts from "../Posts";
import HeroSection from "../HeroSection";
import {useEffect} from "react";

export default function CityPage({setLastScroll}) {

  let { city } = useParams();
  let cityToRender = getCityByName(city);
  let { country, department, info, name, population, region, thumbnails } =
    cityToRender[0];
  let cityCapitalized = capitalizeCity(name);
  let [image, heroUrl] = thumbnails;
  const scrollToZero = () =>{
    setLastScroll(0);
    window.scroll(0,0);
  }
  useEffect(()=>{
    scrollToZero();
  }, [city])

  console.log(heroUrl);
  return (
    <>
      <HeroSection urlImageHero={heroUrl} />
      <Posts/>
    </>
  );
}
