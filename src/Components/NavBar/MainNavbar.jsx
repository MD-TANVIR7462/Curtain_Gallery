import { Navbar } from "keep-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MainNavbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navitems = (
    <>
    <Navbar.Divider></Navbar.Divider>
      <Link >
        <p className=" text-white cursor-pointer py-2  lg:my-5 px-1 lg:text-xl  ease-linear   hover:bg-white rounded-sm  hover:scale-90  transition-transform duration-500  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
       Products
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link >
        <p className=" text-white cursor-pointer py-2 px-1  lg:text-xl  ease-linear  hover:bg-white rounded-sm hover:scale-90  transition-transform duration-500 lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
        Gellary
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link >
        <p className=" text-white cursor-pointer py-2 px-1  lg:text-xl   ease-linear hover:bg-white rounded-sm hover:scale-90  transition-transform duration-500 lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
        About Us
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
     
    </>
  );
  return (
    
    <Navbar
      collapseType={true}
      fluid={true} 
      className={`lg:fixed lg:top-0    w-full scroll-auto transition-transform bg-black  z-10 lg:bg-white  lg:bg-opacity-5    lg:backdrop-blur-sm 
      ${isScrolled?'lg:bg-opacity-25  lg:bg-black lg:backdrop-blur-md  lg:text-white shadow-md':"lg:bg-opacity-[2px]"} `}

     

    >
      <Navbar.Container className="flex items-center  justify-between ">
        <p className="text-white  font-bold pl-3 lg:hidden text-2xl">CURTAIN</p>

        <Navbar.Container className="flex items-center mx-auto ">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden  items-center md:justify-between py-[1%] "
          >
            {navitems}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar" className="bg-black">
            <Navbar.Container tag="ul" className="flex flex-col  ">
              {navitems}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <span className="lg:hidden p-1 !text-white bg-white rounded-sm">
            <Navbar.Toggle />
          </span>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default MainNavbar;
