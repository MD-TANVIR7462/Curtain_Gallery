import { useEffect } from "react";
import AboutPage from "./AboutPage";
import Benner from "./Benner";

import Slider from "./SliderSection/Slider";
import { Element } from "react-scroll";
import Gallery from "./Gellarysection/Gallery";
import Feature from "./FeatureSection/Feature";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
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

    </div>
  );
};

export default Home;
