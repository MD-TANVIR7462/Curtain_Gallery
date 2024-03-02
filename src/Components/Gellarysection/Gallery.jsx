import GalleryCard from "./GalleryCard";

const Gallery = () => {
   return (
      <div className="w-[95%] md:w-[96%] lg:w-[95%] xl:w-[75%] mx-auto my-[5%] ">
      {/* <h1 className="text-6xl font-bold mt-7 text-center">Gallery Item's</h1> */}
      <p className="text-3xl md:text-5xl text-center mt-16 md:mt-20 mb-4 md:mb-8 underline">Gallery Item's</p>
      <h1 className="text-sm md:text-[18px] md:mt-4 text-center text-white w-[98%] md:w-[50%] mx-auto ">
      Transform your space with our stunning gallery of curtain designs. Discover endless possibilities to elevate your home decor and create the perfect ambiance.
      </h1>
      <div className="mt-4 md:mt-8 w-[97%] mx-auto">
       <GalleryCard></GalleryCard>
      </div>
    </div>
   );
 };
 
 export default Gallery;
 