import { useParams } from "react-router-dom";
import { capitalizeCity } from "../../services/capitalizeCity";
import { getCityByName } from "../../services/getCityByName";
import HeroImage from "../HeroImage";

export default function CityPage() {
  let { city } = useParams();
  let cityToRender = getCityByName(city);
  console.log(cityToRender, "da city page");
  let { country, department, info, name, population, region, thumbnails } =
    cityToRender[0];
  let cityCapitalized = capitalizeCity(name);
    let [_, heroUrl] = thumbnails;
    console.log(heroUrl)
  return (
    <section >
       
      <HeroImage urlImageHero={heroUrl}/>
      {/* <div  className="container">
        <h2>{cityCapitalized}</h2>
        <p>{country}</p>
        <p>Ppulation: {population}</p>
        <p>Region: {region}</p>
        <p>{department}</p>
        <p>{info}</p>
      </div> */}
    </section>
  );
}
