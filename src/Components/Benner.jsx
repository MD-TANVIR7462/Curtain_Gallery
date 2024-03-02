// eslint-disable-next-line react/prop-types
// const Benner = ({name,subtitle,img,}) => {
//   return (
//     <>

//     <div
//       className="bg-cover object-cover object-center bg-center md:w-full md:min-h-screen  h-[380px]  flex justify-center items-center  "
//       style={{
//         backgroundImage: `url(${img})`,
//       }}
//     >
//       <div className="text-center   md:flex justify-center md:min-h-[860px] items-center w-[90%] mx-auto">
//       <div className="max-w-xl   md:w-3/4  mt-12">

//           <h1 className="md:text-6xl text-4xl font-semibold mt-3 mb-1 md:my-4 text-black">
//             {name}
//           </h1>
//           <p className="text-sm md:text-lg  font-semibold w-[90%] md:w-[75%] mx-auto  shadow-sm bg-black bg-opacity-5   text-[#ffffff] md:text-md mb-6 ">{subtitle}</p>

//         </div>
//       </div>
//     </div>

//     </>
//   );
// };

// export default Benner;

const Benner = () => {
  return (
    <section>
      <div className="bg-black  text-white py-20 lg:py-40">
        <div className="container mx-auto  flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              TechFest
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Space : The Timeless Infinity
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="mt-28 hidden xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  alt="TechFest Image 1"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  alt="TechFest Image 2"
                />
              </div>
              <div>
                <img
                  className=" mt-28 hidden lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  alt="TechFest Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benner;
