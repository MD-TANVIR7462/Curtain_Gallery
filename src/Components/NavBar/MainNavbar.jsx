import { Navbar } from "keep-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
  const handleNavigate = () => {
    navigate("/");
  };

  const navitems = (
    <>
      <Navbar.Divider></Navbar.Divider>
      <li onClick={handleNavigate}>
        <p className=" text-white cursor-pointer py-1  lg:my-3 px-1 lg:text-xl  ease-linear   hover:bg-white rounded-sm  hover:scale-90  transition-transform duration-500  lg:py-[.5dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Home
        </p>
      </li>
      <Navbar.Divider></Navbar.Divider>

      <Link to="products" smooth={true} duration={500} offset={-200}>
        <p className=" text-white cursor-pointer py-1  lg:my-3 px-1 lg:text-xl  ease-linear   hover:bg-white rounded-sm  hover:scale-90  transition-transform duration-500  lg:py-[.5dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Products
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link to="gallery" smooth={true} duration={500} offset={-100}>
        <p className=" text-white cursor-pointer py-1 px-1  lg:text-xl  ease-linear  hover:bg-white rounded-sm hover:scale-90  transition-transform duration-500 lg:py-[.5dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Gallery
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link to="about" smooth={true} duration={500} offset={-100}>
        <p className=" text-white cursor-pointer py-1 px-1  lg:text-xl   ease-linear hover:bg-white rounded-sm hover:scale-90  transition-transform duration-500 lg:py-[.5dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
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
      className={`fixed top-0    w-full scroll-auto transition-transform bg-[#2f2d31]  z-10 lg:bg-white  lg:bg-opacity-5    lg:backdrop-blur-sm 
      ${
        isScrolled
          ? "lg:bg-opacity-25  lg:bg-black lg:backdrop-blur-md  lg:text-white shadow-md"
          : "lg:bg-opacity-[2px]"
      } `}
    >
      <Navbar.Container className="flex items-center  justify-between ">
        <p className="text-white  font-bold pl-3  text-2xl block ">CURTAIN</p>

        <Navbar.Container className="flex items-center mx-auto ">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden  items-center md:justify-between py-[1%] "
          >
            {navitems}
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="bg-[#2f2d31] bg-opacity-35 backdrop-blur-lg"
          >
            <Navbar.Container tag="ul" className="flex flex-col  ">
              {navitems}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <span className="lg:hidden p-1 !text-white bg-white rounded-sm ">
            <Navbar.Toggle />
          </span>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default MainNavbar;
