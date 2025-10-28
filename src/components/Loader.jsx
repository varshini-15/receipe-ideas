const Loader = ({ type }) => {
  const CardLoader = () => {
    return (
      <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-200" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  };
  return type === "card" && <CardLoader />;
};

export default Loader;
