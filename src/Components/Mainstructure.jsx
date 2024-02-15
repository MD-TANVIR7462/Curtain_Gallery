import AboutPage from "./AboutPage";
import Benner from "./Benner";
import Footer from "./Footer";



const Mainstructure = () => {
    return (
        <div>
            <Benner name='Curtain Gallery' subtitle='Discover exquisite window treatments at Curtain Gallery. Explore our curated collection for timeless elegance and personalized style.' img='https://i.ibb.co/8NDWRWZ/beautiful-vintage-curtain-background.jpg'></Benner>
            <AboutPage></AboutPage>
        <Footer></Footer>
        </div>
    );
};

export default Mainstructure;

