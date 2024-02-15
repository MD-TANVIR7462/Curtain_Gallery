
// eslint-disable-next-line react/prop-types
const AboutUsbenner = ({name,subtitle,img,}) => {
   return (
      <div
      className="relative bg-cover bg-center  pt-32 pb-20 md:py-64"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl text-black font-bold mb-2 md:mb-4">{name}</h1>
          <p className="text-sm md:text-lg  font-semibold w-[80%] md:w-[45%] mx-auto  shadow-sm bg-black bg-opacity-5   text-[#ffffff] md:text-md mb-6 ">{subtitle}</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default AboutUsbenner;