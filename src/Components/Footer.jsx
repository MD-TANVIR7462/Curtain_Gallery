import { useEffect, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentYear(new Date().getFullYear());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  const navOptions = (
    <>
      <li className="link link-hover">
        <p  >Home</p>
      </li>
      <li className="link link-hover">
        <p >Shop</p>
      </li>
    </>
  );
  return (
    <footer className=" text-center p-6  bg-[#2f2d31] text-base-content rounded ">
      <ul className="flex justify-center gap-4">{navOptions}</ul>


      <div className="flex justify-center py-3 ">
        <Link to={"https://www.instagram.com/invites/contact/?i=1d3npivgkqlf8&utm_content=230yydp"}>
        <span className="text-5xl" ><FaInstagramSquare /></span>
        </Link>
      </div>

      <aside>
        <p>Copyright © {currentYear} - All right reserved by <i>Curtain Gallery</i></p>
      </aside>
    </footer>
  );
};

export default Footer;




