const Card = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={`${data?.strMealThumb}`}
        alt="Dish"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{data?.strMeal}</h3>
      </div>
    </div>
  );
};

export default Card;
