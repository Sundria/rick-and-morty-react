import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function PaginationButtons({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const showNextButton = currentPage !== totalPages - 1;
  const showPreviousButton = currentPage !== 0;

  const paginationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="cursor-pointer">...</span>}
        nextLabel={
          showNextButton && (
            <span className="md:w-10 md:h-10 md:text-lg max-md:w-7 max-md:h-7 max-sm:text-sm flex items-center justify-center bg-gray-600/50 rounded-md cursor-pointer hover:bg-gray-400/40">
              <BsChevronRight />
            </span>
          )
        }
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPreviousButton && (
            <span className="md:w-10 md:h-10 md:text-lg max-md:w-7 max-md:h-7 max-sm:text-sm flex items-center justify-center bg-gray-600/50 rounded-md cursor-pointer hover:bg-gray-400/40">
              <BsChevronLeft />
            </span>
          )
        }
        containerClassName="flex items-center justify-center my-6 gap-4 text-white max-md:gap-2 mx-5"
        activeClassName="bg-gray-600 rounded-md"
        pageLinkClassName="group block md:w-10 md:h-10 md:text-lg max-md:w-7 max-md:h-7 max-sm:text-sm flex items-center justify-center border border-gray-600/50 rounded-md hover:bg-gray-600/50 cursor-pointer"
      />
    </motion.div>
  );
}
