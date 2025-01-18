import { AiFillMail, AiFillPhone, AiFillInfoCircle } from "react-icons/ai";
const AboutPage = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50 mt-4 mb-4 md:mt-12 md:mb-8">
     About Us
        </h2>
      </div>
      <div className="max-w-[1900px]  mb-8  md:mb-20 p-4 md:p-12 bg-base-200 shadow-2xl md:w-[90%] md:flex justify-around mx-auto items-center">
        <div className="mb-5 md:mb-0">
          <p className="text-lg md:text-4xl font-bold mb-1">GET IN TOUCH</p>
          <h1 className="text-xs md:text-sm  font-medium mb-4 md:mb-5">
            Visit Our Instagram page For More Updates....{" "}
          </h1>
          <p className=" md:text-lg font-bold  mb-1">Head office</p>
          <p className="flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-white">
            <AiFillMail className="text-yellow-700" /> saifuddin_rubel@yahoo.com
          </p>
          <p className="flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-white py-2">
            <AiFillPhone className="text-green-500" /> (+971)558272925
          </p>
          <p className="flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-white">
            <AiFillInfoCircle className="text-blue-500" /> 24 Hours Support
          </p>
        </div>

        <div className=" border w-full  md:w-[50%] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14443.402178180613!2d55.40322790422348!3d25.174523858450573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f614952f915f9%3A0xc406c97713611a9!2sDragon%20Mart!5e0!3m2!1sen!2sbd!4v1707814480858!5m2!1sen!2sbd"
            width="600"
            height="450"
            className="w-full h-[300px] md:h-[411px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
