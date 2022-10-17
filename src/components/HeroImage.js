import Button from "./Button";
import "./HeroImage.css"

export default function HeroImage({urlImageHero}) {
    let stylesImg = {
        backgroundImage: `url(${urlImageHero})`,
        backgroundPosition: "50% 75%",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      };
  return (
    <div className="hero-image" style={stylesImg}>
      <div className="hero-image-opacity">
        <Button buttonStyle="btn--outline" buttonSize={"btn--large"} textBtn="Adventures Blog">

        </Button>
      </div>
    </div>
  );
}
