

// eslint-disable-next-line react/prop-types
const Benner = ({name,subtitle,img,}) => {
  return (
    <>

    <div
      className="bg-cover object-cover object-center bg-center md:w-full md:min-h-screen  h-[380px]  flex justify-center items-center  "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="text-center md:flex  md:min-h-[860px] items-center w-[90%] mx-auto">
      <div className="max-w-xl md:w-3/4 mr-auto mt-12">
          <i className="md:text-5xl text-3xl  font-thin  text-red-600">
            Fashion Sale
          </i>
          <h1 className="md:text-6xl text-3xl font-semibold mt-3 mb-1 md:my-4 text-black">
            {name}
          </h1>
          <p className="text-sm md:text-lg  font-semibold w-[80%] md:w-[75%] mx-auto  shadow-sm bg-black bg-opacity-5   text-[#ffffff] md:text-md mb-6 ">{subtitle}</p>
     
        </div>
      </div>
    </div>

    </>
  );
};

export default Benner;