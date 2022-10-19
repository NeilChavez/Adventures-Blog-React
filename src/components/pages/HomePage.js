import HeroSection from "../HeroSection";
import PickedArticle from "../PickedArticle";
import Posts from "../Posts";

export default function HomePage(){
     let urlImageHero = './assets/hero-image.jpg'
    return(
        <>
            <HeroSection urlImageHero={urlImageHero}/>
            <Posts/>
            <PickedArticle/>
        </>
    )
}