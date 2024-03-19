const Benner = () => {
  return (
    <section>
      <div className="bg-black  text-white pt-16 pb-8 md:py-20  lg:py-[180px] xl:py-60 ">
        <div className="col-span-12    my-12 mx-auto grid grid-cols-12   md:justify-items-end justify-items-center lg:justify-items-end xl:justify-items-end  md:my-24 xl:w-[85%] items-center lg:w-[95%] md:w-[90%] w-[90%] ">
          <div className="col-span-11  md:col-span-5 xl:col-span-4  ">
            <h1 className="text-3xl md:text-3xl lg:text-5xl  text-yellow-300 tracking-loose mb-2">
              CURTAIN GALLERY
            </h1>

            <p className="text-sm md:text-base text-gray-50 mb-4">
            Transform your space with the exquisite curtain collection at  Curtain Gallery. Explore designs crafted to make your home more beautiful.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>

          <div className=" col-span-12 md:col-span-6 xl:col-span-8 py-20 ">
            <div className="h-48 flex flex-wrap content-center lg:gap-10">
              <div>
                <img
                  className="mt-28 w-[160px]  h-[270px] hidden xl:block -rotate-[24deg] rounded-full border p-2"
                  src="https://i.ibb.co/9cwkztx/nathan-dumlao-etkm-Wcqt-Zzg-unsplash.jpg"
                  alt="TechFest Image 1"
                />
              </div>
              <div>
                <img
                  className=" border  inline-block mt-24 md:mt-0 p-3 md:p-2 w-[88%]  lg:w-[240px] h-[380px] sm:h-[440px] rounded-full -rotate-[20deg] ml-4 md:ml-0  md:-rotate-[24deg] "
                  src="https://i.ibb.co/Mf02mwJ/hutomo-abrianto-Q-f-Zcn8vl-WY-unsplash.jpg"
                  alt="TechFest Image 2 "
                />
              </div>
              <div>
                <img
                  className=" mt-28 hidden lg:block w-[160px] rounded-full -rotate-[24deg] h-[270px]  ml-6 border p-2"
                  src="https://i.ibb.co/crxgLxC/anais-murith-u2k-V8mqvdtc-unsplash.jpg"
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
