import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Slidercart from "./Slidercart";

const Slider = () => {
  const [curtains, setCurtains] = useState([]);
  const [setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [Space, setSpace] = useState(40);
  useEffect(() => {
    // Function to update slidesPerView based on window width
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); // Show only 1 slide on phone devices
        setSpace(50);
      } else if (window.innerWidth <= 1000) {
        setSlidesPerView(2); // Show only 1 slide on phone devices
        setSpace(30);
      } else {
        setSlidesPerView(3); // Show 3 slides on other devices
        setSpace(40);
      }
    };

    // Initial update
    updateSlidesPerView();

    // Add event listener to update on window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Images.json");
        const data = await response.json();
        setCurtains(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1900px] mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50 mt-4 mb-4 md:mt-12 md:mb-8">
          Our Products
        </h2>
      </div>
      <div className="  mx-auto w-[93%] md:w-[94%] ">
        <div className="">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            spaceBetween={Space}
            pagination={{
              type: "",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            {curtains.map((product) => (
              <SwiperSlide key={product._id}>
                <Slidercart product={product} key={product._id}></Slidercart>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
