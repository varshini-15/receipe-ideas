import Button from "./components/Button";
import { Constants } from "./constants/Constant";

const PaginationFooter = ({ meals, setCurrentPage, currentPage, loading }) => {
  return (
    <div className="flex justify-between my-5">
      {currentPage > 1 && (
        <Button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage < 1 || loading}
        >
          Prev
        </Button>
      )}
      {currentPage * Constants.NO_OF_CARDS <= meals?.length && (
        <Button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={
            currentPage * Constants.NO_OF_CARDS > meals?.length || loading
          }
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default PaginationFooter;
