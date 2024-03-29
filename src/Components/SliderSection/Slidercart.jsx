// import  { useState } from "react";


// eslint-disable-next-line react/prop-types
const Slidercart = ({ product }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [img, setImage] = useState([]);

//   const openModal = (img) => {
//     setImage(img);
//     setIsOpen(true);
    
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

  // eslint-disable-next-line react/prop-types
  const { name,url } = product;

  return (
    <div className="mb-3 md:mb-0 shadow-lg hover:shadow-md transition-shadow duration-300 rounded-lg  ">
      <div className="relative  rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-700">
        <div className="group">
          <img
            src={url}
            alt=""
            className="w-full object-cover object-center  h-[270px] md:h-[320px]  ob opacity-100 scale-100 hover:scale-110 transition-transform group-hover:opacity-100 duration-1000"
          />
        </div>
      </div>
      <div className="flex justify-between my-6 px-2">
        <span>
          <p className="text-sm md:text-lg text-white font-light">{name}</p>
        
          {/* <p className="md:text-xl text-[#168a73]">
            {} <span className="text-[#168a73]font-semibold"><span className="font-bold">Instalation Charge</span> : 50 AED per window </span>
          </p> */}
        </span>
        {/* <a
          onClick={() => openModal(url, name)}
          className="btn btn-outline btn-xs mr-2"
        >
       Details
        </a> */}
      </div>
      {/* modal */}
      {/* {isOpen && (
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
          <div className="modal-box ">
            <span className="flex justify-between items-center mb-4">
              <p className="text-lg md:text-3xl font-bold ">Product Details</p>

              <a
                onClick={closeModal}
                className=" btn btn-outline btn-xs mr-2 "
              >
              
                <span className="relative">Close</span>
              </a>
            </span>

            <img src={img} alt="IMG" className="rounded-lg w-full h-[30vh]" />
      
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Slidercart;