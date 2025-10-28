import { useMemo } from "react";
import Card from "./components/Card";
import { Constants } from "./constants/Constant";

const Pagination = ({ meals, currentPage }) => {
  const start = useMemo(() => {
    return (currentPage - 1) * Constants.NO_OF_CARDS;
  }, [currentPage]);

  const end = useMemo(() => {
    return currentPage * Constants.NO_OF_CARDS;
  }, [currentPage]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {meals?.slice(start, end)?.map((data, id) => {
        return <Card key={id} data={data} />;
      })}
    </div>
  );
};

export default Pagination;
