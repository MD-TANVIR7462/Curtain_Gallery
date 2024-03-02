import { useEffect } from "react";
import AboutPage from "./AboutPage";
import Benner from "./Benner";
import Footer from "./Footer";
import MainNavbar from "./NavBar/MainNavbar";
import Slider from "./SliderSection/Slider";
import { Element } from "react-scroll";
import Gallery from "./Gellarysection/Gallery";
import Feature from "./FeatureSection/Feature";
const Mainstructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainNavbar></MainNavbar>
      <Element name="home">
        <Benner
          name="Curtain Gallery"
          subtitle="Discover exquisite window treatments at Curtain Gallery. Explore our curated collection for timeless elegance and personalized style."
          img="https://i.ibb.co/8NDWRWZ/beautiful-vintage-curtain-background.jpg"
        ></Benner>
      </Element>
      <Element name="products">
        <Slider></Slider>
      </Element>
      <Element name="gallery">
        <Gallery></Gallery>
      </Element>
      <Feature></Feature>
      <Element name="about">
        <AboutPage></AboutPage>
      </Element>

    
      <Footer></Footer>
    </div>
  );
};

export default Mainstructure;
