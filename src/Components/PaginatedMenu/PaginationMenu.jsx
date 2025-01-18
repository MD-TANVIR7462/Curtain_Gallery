import PropTypes from 'prop-types';

const PaginationMenu = ({
  page,
  itemsPerPage,
  handlePrevPage,
  handleNextPage,
  setPage,
  totalItems,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav>
      <ul className="flex">
        <li>
          <a
            className={`mx-1 flex h-9 w-9 items-center justify-center text-yellow-500 rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
              page === 1 ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={handlePrevPage}
            aria-label="Previous"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1}>
            <a
              className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm transition duration-150 ease-in-out shadow-md ${
                page === index + 1
                  ? " bg-yellow-800 text-white shadow-yellow-500/20"
                  : "bg-transparent text-blue-gray-500 hover:bg-light-300"
              }`}
              onClick={() => setPage(index + 1)}
              href="#"
            >
              {index + 1}
            </a>
          </li>
        ))}

        <li>
          <a
            className={`mx-1 flex h-9 w-9 text-yellow-500 items-center justify-center rounded-full  bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
              page === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={handleNextPage}
            aria-label="Next"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Define PropTypes
PaginationMenu.propTypes = {
  page: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default PaginationMenu;
