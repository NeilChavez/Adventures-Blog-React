import ArticleSection from "../ArticleSection";
import HeroSection from "../HeroSection";
import PickedArticle from "../PickedArticle";

import SectionRecentPosts from "../SectionRecentPosts"


export default function HomePage(){
     let urlImageHero = './assets/hero-image.jpg'
    return(
        <>
            <HeroSection urlImageHero={urlImageHero}/>
            <PickedArticle/>
            <ArticleSection/>
            <SectionRecentPosts/>
        </>
    )
}