import { useState } from "react";
import Header from "./Header";
import Input from "./components/Input";
import Button from "./components/Button";
import Chips from "./components/Chips";
import Loader from "./components/Loader";
import Pagination from "./Pagination";
import PaginationFooter from "./PaginationFooter";
import Alert from "./components/Alert";
import bgImage from "./assets/image.png";

export default function App() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddChips = () => {
    const newIngredient = input.trim();
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
    setInput("");
  };

  const handleRemoveChips = (index) => {
    const filteredArray = ingredients.filter((data, i) => i !== index);
    setIngredients(filteredArray);
  };

  const handleGenerateReceipe = async () => {
    setLoading(true);
    setError("");
    try {
      const allResults = [];
      let commonMeals;

      if (input && ingredients?.length === 0) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`
        );
        const data = await response.json();

        if (data.meals) {
          allResults.push(...data.meals);
        }
      } else {
        for (const ingredient of ingredients) {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
          const data = await response.json();

          if (data.meals) {
            allResults.push(data.meals);
          }
        }
      }
      if (allResults.length === 0) {
        setMeals([]);
        setLoading(false);
        return;
      }

      if (input && ingredients?.length === 0) {
        commonMeals = allResults;
      } else {
        commonMeals = allResults.reduce((a, b) =>
          a.filter((mealA) => b.some((mealB) => mealB.idMeal === mealA.idMeal))
        );
      }

      setMeals(commonMeals);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-800 bg-white">
      <div
        className="w-full flex flex-col items-center justify-center text-center py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 from-white/10 via-white/50 to-white"></div>

        <div className="relative z-10 flex flex-col items-center">
          <Header />

          <div className="flex w-full max-w-md items-center bg-white shadow-md rounded-full mt-6 px-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddChips()}
            />
            <Button onClick={handleAddChips} className="!rounded-full">
              +
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {ingredients.map((item, index) => (
              <Chips
                key={index}
                item={item}
                onClick={() => handleRemoveChips(index)}
              />
            ))}
          </div>

          <div className="my-6 w-full max-w-md">
            <Button
              variant="success"
              size="lg"
              className="w-full"
              onClick={() => {
                handleGenerateReceipe();
              }}
            >
              Generate Recipe Ideas
            </Button>
          </div>
        </div>
      </div>
      {error?.toString() && <Alert message={error?.toString() ?? null} />}
      <div className="w-full max-w-5xl  p-8">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)]?.map(() => {
              return <Loader type="card" />;
            })}
          </div>
        ) : meals?.length > 0 ? (
          <>
            <Pagination
              meals={meals}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center">
            No recipes found this time — let’s switch up the ingredients and try
            again!
          </div>
        )}
        <PaginationFooter
          meals={meals}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={loading}
        />
      </div>
    </div>
  );
}
