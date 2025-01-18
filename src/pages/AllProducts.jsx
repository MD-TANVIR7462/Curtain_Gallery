import { useEffect, useState } from "react";
import Slidercart from "../Components/SliderSection/Slidercart";
import PaginationMenu from "../Components/PaginatedMenu/PaginationMenu";
import ShopBanner from "../ShopBanner/ShopBanner";

const AllProducts = () => {
  const [page, setPage] = useState(1); // New state for pagination
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default to large devices
  const [products, setProducts] = useState([]); // Initialize as an empty array

  // Handle responsive number of items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(12);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(6); // Adjust for mobile
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Images.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Paginate the products
  const paginatedProducts = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle pagination navigation
  const handleNextPage = () => {
    if (page < Math.ceil(products.length / itemsPerPage)) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
    <ShopBanner/>
      <div className="my-3 md:my-8 mx-auto">
        {products.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3 max-w-[1900px]">
              {paginatedProducts().map((product) => (
                <Slidercart product={product} key={product.id} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <PaginationMenu
                  totalItems={products.length}
                  itemsPerPage={itemsPerPage}
                  page={page}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                  setPage={setPage}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="text-4xl text-center text-red-700 ">NO PRODUCTS</div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
