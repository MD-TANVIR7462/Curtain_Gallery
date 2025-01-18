const ShopBanner = () => {
    return (
      <div
        className="relative bg-cover bg-center text-white py-[5%] md:py-[6%] lg:py-[8%]"
        style={{
          backgroundImage: `url(${"https://i.ibb.co.com/VCsP2vh/pexels-carlos-caamal-can-13734-910458-1.jpg"})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-55"></div> {/* This is the dark overlay */}
  
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2 md:mb-4">
              Our Curtains
            </h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopBanner;
  