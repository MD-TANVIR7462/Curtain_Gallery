const GalleryCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="w-full md:w-[96%] lg:w-[440px] ">
        <div className=" bg-[#8682B0] bg-opacity-20 p-4 rounded-md mb-3  md:mb-4 lg:mb-6">
          <img
            src="https://i.ibb.co/5BrBG8j/background-tassel-textile-filter-brown.jpg "
            className="object-cover w-full h-[220px] rounded-md"
            alt=""
          />
          <p className="text-md  text-md lg:text-2xl font-semibold mt-2">Blockout Curtains</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-2  lg:gap-5">
          <div className=" bg-[#8682B0] p-2 md:p-4 rounded-md bg-opacity-20">
            <img
              src="https://i.ibb.co/ZhzBnyH/14-360x360.jpg"
              className="object-cover w-full md:h-[180px] lg:h-[235px] rounded-md"
              alt=""
            />
            <p className="text-md  text-md lg:text-2xl font-semibold mt-2">Sheer Curtains</p>
          </div>
          <div className=" bg-[#8682B0] p-2 md:p-4 rounded-md bg-opacity-20">
            <img
              src="https://i.ibb.co/XznQnK7/images-1.jpg"
              className="object-cover w-full md:h-[180px] lg:h-[235px] rounded-md"
              alt=""
            />
            <p className="text-md  text-md lg:text-2xl font-semibold mt-2">Eyelet Curtains</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[96%] lg:w-[440px] mt-3 md:mt-0">
        <div className=" bg-[#8682B0] bg-opacity-20 p-2 md:p-4 rounded-md mb-3 md:mb-4 lg:mb-6">
          <img
            src="https://i.ibb.co/GJVh53V/set-multi-colored-dense-fabrics-uniform-texture-choice-materials-different-colors.jpg"
            className="object-cover w-full h-[220px] rounded-md"
            alt=""
          />
          <p className="text-md  text-md lg:text-2xl font-semibold mt-2">Grommet Curtains</p>
        </div>
        <div className=" bg-[#8682B0] bg-opacity-20 p-2 md:p-4 rounded-md mb-3 md:mb-4 lg:mb-6">
          <img
            src=" https://i.ibb.co/cLqrKGS/window-curtain-2-K4-MCG940-F.jpg"
            className="object-cover w-full"
            alt=""
          />
          <p className="text-md  text-md lg:text-2xl font-semibold mt-3">Cafe Curtains</p>
        </div>
      </div>
      <div className=" bg-[#8682B0] bg-opacity-20 p-2 md:p-4 rounded-md mb-3 md:mb-4 lg:mb-6">
        <img
          src="https://i.ibb.co/yqgzW0X/window-glass-YCB6-KGMGK0.jpg"
          className="object-cover w-full md:h-[520px] rounded-md"
          alt=""
        />
        <p className="text-md  text-md lg:text-2xl font-semibold mt-3">Box Pleat Curtains</p>
      </div>
    </section>
  );
};

export default GalleryCard;
